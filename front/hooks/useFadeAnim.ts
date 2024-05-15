import { useEffect, useRef } from "react";
import { Animated } from "react-native";

export const useFadeAnim = (duration: number, delay?: number) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration,
      delay: delay ?? 0,
      useNativeDriver: true,
    }).start();
  }, []);

  return fadeAnim;
};
