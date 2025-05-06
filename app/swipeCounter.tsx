import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
} from 'react-native';
import { addIncrementTap, addDecrementTap } from './haptics'; // Optional haptic feedback

const ANIMATION_DURATION = 200;
const CONTAINER_WIDTH = 80;
const DECREMENT_BUTTON_WIDTH = 32;

type SwipeCounterProps = {
  min?: number;
  max?: number;
  label?: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  tintColor?: string;
};

const SwipeCounter: React.FC<SwipeCounterProps> = ({
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
  label = 'Count',
  count,
  setCount,
  tintColor,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const rippleAnimMain = useRef(new Animated.Value(0)).current;
  const rippleAnimDecrement = useRef(new Animated.Value(0)).current;

  const triggerRipple = (rippleAnim: Animated.Value) => {
    rippleAnim.setValue(0);
    Animated.timing(rippleAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const animateFromCenter = (dir: number) => {
    Animated.timing(animatedValue, {
      toValue: -dir * CONTAINER_WIDTH,
      duration: ANIMATION_DURATION,
      useNativeDriver: true,
    }).start(() => {
      animatedValue.setValue(dir * CONTAINER_WIDTH);
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }).start();
    });
  };

  const increment = () => {
    const next = Math.min(count + 1, max);
    if (next !== count) {
      addIncrementTap?.();
      triggerRipple(rippleAnimMain);
      setCount(next);
      animateFromCenter(1);
    }
  };

  const decrement = () => {
    const next = Math.max(count - 1, min);
    if (next !== count) {
      addDecrementTap?.();
      triggerRipple(rippleAnimDecrement);
      setCount(next);
      animateFromCenter(-1);
    }
  };

  const createRippleStyle = (rippleAnim: Animated.Value, width: number, height: number) => ({
    position: 'absolute' as const,
    top: height / 2,
    left: width / 2,
    width: width,
    height: height,
    borderRadius: Math.min(width, height) / 2,
    backgroundColor: 'rgba(0,0,0,0.2)',
    transform: [
      { translateX: -width / 2 },
      { translateY: -height / 2 },
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
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.counterRow}>
        {/* Decrement Button */}
        <Pressable
          style={[
            styles.decrementButton,
            { backgroundColor: tintColor || '#ddd' },
          ]}
          onPress={decrement}
        >
          <Animated.View
            pointerEvents="none"
            style={createRippleStyle(rippleAnimDecrement, DECREMENT_BUTTON_WIDTH, CONTAINER_WIDTH)}
          />
          <Text style={styles.decrementText}>-</Text>
        </Pressable>

        {/* Main Counter */}
        <Pressable
          onPress={increment}
          style={[
            styles.counter,
            { backgroundColor: tintColor || '#eee' },
          ]}
        >
          <Animated.View
            pointerEvents="none"
            style={createRippleStyle(rippleAnimMain, CONTAINER_WIDTH, CONTAINER_WIDTH)}
          />
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
    fontWeight:"bold",
    color: '#333',
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  decrementButton: {
    width: DECREMENT_BUTTON_WIDTH,
    height: CONTAINER_WIDTH,
    backgroundColor: '#ddd',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    overflow: 'hidden',
  },
  decrementText: {
    fontSize: 24,
    fontWeight: 'bold',
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
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default SwipeCounter;
