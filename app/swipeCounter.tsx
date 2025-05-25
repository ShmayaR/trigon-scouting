import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
} from 'react-native';
import { addIncrementTap, addDecrementTap } from './haptics';

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
  // two animated values: one for the old count, one for the new
  const slideOld = useRef(new Animated.Value(0)).current;
  const slideNew = useRef(new Animated.Value(0)).current;

  // internal state to drive what's shown in each animated view
  const [prevCount, setPrevCount] = useState(count);
  const [displayCount, setDisplayCount] = useState(count);

  // keep internal display in sync if parent count ever changes
  useEffect(() => {
    setPrevCount(count);
    setDisplayCount(count);
  }, [count]);

  const rippleMain = useRef(new Animated.Value(0)).current;
  const rippleDec = useRef(new Animated.Value(0)).current;

  const triggerRipple = (rippleAnim: Animated.Value) => {
    rippleAnim.setValue(0);
    Animated.timing(rippleAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  function doSlide(dir: 1 | -1, next: number) {
    // 1) capture old, update both parent + display
    setPrevCount(displayCount);
    setDisplayCount(next);
    setCount(next);

    // 2) reset both animations to their start positions
    slideOld.stopAnimation();
    slideNew.stopAnimation();
    slideOld.setValue(0);
    slideNew.setValue(dir * CONTAINER_WIDTH);

    // 3) run them in parallel
    Animated.parallel([
      Animated.timing(slideOld, {
        toValue: -dir * CONTAINER_WIDTH,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(slideNew, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
    ]).start();
  }

  const increment = () => {
    const next = Math.min(count + 1, max);
    if (next !== count) {
      addIncrementTap?.();
      triggerRipple(rippleMain);
      doSlide(1, next);
    }
  };

  const decrement = () => {
    const next = Math.max(count - 1, min);
    if (next !== count) {
      addDecrementTap?.();
      triggerRipple(rippleDec);
      doSlide(-1, next);
    }
  };

  const createRippleStyle = (r: Animated.Value, w: number, h: number) => ({
    position: 'absolute' as const,
    top: h / 2,
    left: w / 2,
    width: w,
    height: h,
    borderRadius: Math.min(w, h) / 2,
    backgroundColor: 'rgba(0,0,0,0.2)',
    transform: [
      { translateX: -w / 2 },
      { translateY: -h / 2 },
      {
        scale: r.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }),
      },
    ],
    opacity: r.interpolate({ inputRange: [0, 1], outputRange: [0.4, 0] }),
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
            style={createRippleStyle(rippleDec, DECREMENT_BUTTON_WIDTH, CONTAINER_WIDTH)}
          />
          <Text style={styles.decrementText}>–</Text>
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
            style={createRippleStyle(rippleMain, CONTAINER_WIDTH, CONTAINER_WIDTH)}
          />

          <View style={styles.hiddenOverflow}>
            {/* old number */}
            <Animated.View
              style={[
                StyleSheet.absoluteFillObject,
                styles.countContainer,
                { transform: [{ translateX: slideOld }] },
              ]}
            >
              <Text style={styles.countText}>{prevCount}</Text>
            </Animated.View>

            {/* new number */}
            <Animated.View
              style={[
                StyleSheet.absoluteFillObject,
                styles.countContainer,
                { transform: [{ translateX: slideNew }] },
              ]}
            >
              <Text style={styles.countText}>{displayCount}</Text>
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
    fontWeight: 'bold',
    color: '#333',
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  decrementButton: {
    width: DECREMENT_BUTTON_WIDTH,
    height: CONTAINER_WIDTH,
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
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  hiddenOverflow: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
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
