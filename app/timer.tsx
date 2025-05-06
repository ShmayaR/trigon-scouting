import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';

const MAX_TIME = 1500; // 150 seconds = 1500 tenths

export function Timer() {
    const [time, setTime] = useState(0); // tenths of a second
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval: number | undefined;

        if (running) {
            interval = setInterval(() => {
                setTime(prev => {
                    if (prev + 1 >= MAX_TIME) {
                        setRunning(false);
                        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                        return MAX_TIME;
                    }
                    return prev + 1;
                });
            }, 100);
        }

        return () => {
            if (interval !== undefined) clearInterval(interval);
        };
    }, [running]);

    const toggleRunning = () => {
        Haptics.impactAsync(
            running ? Haptics.ImpactFeedbackStyle.Light : Haptics.ImpactFeedbackStyle.Heavy
        );
        setRunning(!running);
    };

    const reset = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        setRunning(false);
        setTime(0);
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonRow}>
                <Pressable
                    style={[styles.button, running ? styles.pauseButton : styles.startButton]}
                    onPress={toggleRunning}
                >
                    <Text style={styles.buttonText}>
                        {running ? 'Pause' : 'Start🍌'}
                    </Text>
                </Pressable>

                <Pressable style={[styles.button, styles.resetButton]} onPress={reset}>
                    <Text style={styles.buttonText}>Reset</Text>
                </Pressable>
            </View>

            <Text style={styles.timer}>{(time / 10).toFixed(1)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    timer: {
        fontSize: 80,
        fontWeight: 'bold',
        marginTop: 30,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
    },
    button: {
        paddingHorizontal: 28,
        paddingVertical: 12,
        borderRadius: 6,
        borderWidth: 1,
        marginHorizontal: 10,
    },
    buttonText: {
        fontSize: 30,
        color: 'white',
        textTransform: 'capitalize',
    },
    startButton: {
        backgroundColor: 'green',
        borderColor: '#0a0',
    },
    pauseButton: {
        backgroundColor: 'orange',
        borderColor: '#cc8400',
    },
    resetButton: {
        backgroundColor: 'red',
        borderColor: '#a00',
    },
});