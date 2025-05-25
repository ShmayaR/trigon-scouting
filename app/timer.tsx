import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';

const MAX_TIME = 1500; // in tenths of a second

interface TimerProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

export function Timer({ count, setCount }: TimerProps) {
    // running flag drives both UI and the effect
    const [running, setRunning] = useState(false);

    // keep refs so we can resume mid-count
    const startTimeRef = useRef<number>(0);
    const rafRef = useRef<number>(0);

    // whenever `running` flips, start or stop the loop
    useEffect(() => {
        if (running) {
            // if resuming, backdate startTime so elapsedMs carries over
            startTimeRef.current = Date.now() - count;
            rafRef.current = requestAnimationFrame(step);
        } else {
            cancelAnimationFrame(rafRef.current);
        }
        return () => cancelAnimationFrame(rafRef.current);
    }, [running]);

    // one frame of the timer
    const step = () => {
        const now = Date.now();
        let delta = now - startTimeRef.current;

        // cap at MAX_TIME
        if (delta >= MAX_TIME * 100) {
            delta = MAX_TIME * 100;
            setRunning(false);
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        } else {
            rafRef.current = requestAnimationFrame(step);
        }

        setCount(delta);
    };

    // toggle start / pause
    const toggle = () => {
        setRunning(prev => {
            const next = !prev;
            Haptics.impactAsync(
                next
                    ? Haptics.ImpactFeedbackStyle.Heavy
                    : Haptics.ImpactFeedbackStyle.Light
            );
            return next;
        });
    };

    // reset back to zero
    const reset = () => {
        cancelAnimationFrame(rafRef.current);
        setRunning(false);
        setCount(0);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    };

    // format to one decimal place
    const display = (count / 1000).toFixed(1);

    return (
        <View style={styles.container}>
            <View style={styles.buttonRow}>
                <Pressable
                    style={[styles.button, running ? styles.pauseButton : styles.startButton]}
                    onPress={toggle}
                >
                    <Text style={styles.buttonText}>
                        {running ? 'Pause' : 'Start🍌'}
                    </Text>
                </Pressable>
                <Pressable style={[styles.button, styles.resetButton]} onPress={reset}>
                    <Text style={styles.buttonText}>Reset</Text>
                </Pressable>
            </View>

            {/* you can tap the timer itself, too */}
            <Pressable onPress={toggle}>
                <Text style={styles.timer}>{display}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { alignItems: 'center', paddingVertical: 40 },
    timer: { fontSize: 80, fontWeight: 'bold', marginTop: 30 },
    buttonRow: { flexDirection: 'row', justifyContent: 'center', gap: 20 },
    button: {
        width: 130,
        paddingVertical: 12,
        borderRadius: 6,
        borderWidth: 1,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    buttonText: { fontSize: 30, color: 'white', textTransform: 'capitalize' },
    startButton: { backgroundColor: 'green', borderColor: '#0a0' },
    pauseButton: { backgroundColor: 'orange', borderColor: '#cc8400' },
    resetButton: { backgroundColor: 'red', borderColor: '#a00' },
});
