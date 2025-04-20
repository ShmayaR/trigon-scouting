import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    PanResponder,
    Animated,
    Pressable,
} from 'react-native';
import { addIncrementTap, addDecrementTap } from './haptics';

const CONTAINER_WIDTH = 100;

const SwipeCounter = ({
    initialValue = 0,
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    label = 'Count',
}) => {
    const [count, setCount] = useState(initialValue);
    const animatedValue = useRef(new Animated.Value(0)).current;

    const rippleAnim = useRef(new Animated.Value(0)).current;

    const triggerRipple = () => {
        rippleAnim.setValue(0);
        Animated.timing(rippleAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
        }).start();
    };

    const animateAndChange = (dir: number, newValue: number) => {
        Animated.timing(animatedValue, {
            toValue: -dir * CONTAINER_WIDTH,
            duration: 200,
            useNativeDriver: true,
        }).start(() => {
            setCount(newValue);
            animatedValue.setValue(dir * CONTAINER_WIDTH);
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }).start();
        });
    };

    const increment = () => {
        const next = Math.min(count + 1, max);
        if (next !== count) animateAndChange(1, next);
    };

    const decrement = () => {
        const next = Math.max(count - 1, min);
        if (next !== count) animateAndChange(-1, next);
    };

    const handleTapIncrement = () => {
        addIncrementTap();
        triggerRipple();
        increment();
    };

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: (_, g) =>
            Math.abs(g.dx) > 10 && Math.abs(g.dy) < 20,
        onPanResponderRelease: (_, g) => {
            if (g.dx > 20) {
                addDecrementTap();
                decrement();
            }
        },
    });

    const rippleStyle: any = {
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: CONTAINER_WIDTH,
        height: CONTAINER_WIDTH,
        borderRadius: CONTAINER_WIDTH / 2,
        backgroundColor: 'rgba(0,0,0,0.2)',
        transform: [
            { translateX: -CONTAINER_WIDTH / 2 },
            { translateY: -CONTAINER_WIDTH / 2 },
            {
                scale: rippleAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                }),
            },
        ],
        opacity: rippleAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0.4, 0],
        }),
    };

    return (
        <View style={styles.container} {...panResponder.panHandlers}>
            <Text style={styles.label}>{label}</Text>
            <Pressable onPress={handleTapIncrement} style={styles.counter}>
                <Animated.View pointerEvents="none" style={rippleStyle} />
                <View style={styles.hiddenOverflow}>
                    <Animated.View
                        style={[
                            styles.countContainer,
                            { transform: [{ translateX: animatedValue }] },
                        ]}
                    >
                        <Text style={styles.countText}>{count}</Text>
                    </Animated.View>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    label: {
        marginBottom: 8,
        fontSize: 16,
        color: '#333',
    },
    counter: {
        width: CONTAINER_WIDTH,
        height: CONTAINER_WIDTH,
        backgroundColor: '#eee',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    hiddenOverflow: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    countContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    countText: {
        fontSize: 26,
        fontWeight: 'bold',
    },
});

export default SwipeCounter;
