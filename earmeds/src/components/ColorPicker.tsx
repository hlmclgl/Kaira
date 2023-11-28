import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import React from 'react'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { interpolateColor, useAnimatedGestureHandler, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring } from 'react-native-reanimated';


interface ColorPickerProps extends LinearGradientProps {
  maxWidth: number
}

const ColorPicker: React.FC<ColorPickerProps> = ({ colors, start, end, style, maxWidth }) => {


  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  const adjustedTranslateX = useDerivedValue(() => {
    return Math.min(
      Math.max(translateX.value, 0),
      maxWidth - CIRCLE_PICKER_SIZE
    );
  });

  const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent,
    { x: number }
  >({
    onStart: (_, context) => {
      context.x = translateX.value

      translateY.value = withSpring(-CIRCLE_PICKER_SIZE);
      scale.value = withSpring(1.2);
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.x;
    },
    onEnd: () => {
      translateY.value = withSpring(0);
      scale.value = withSpring(1);
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: adjustedTranslateX.value },
        { scale: scale.value },
        { translateY: translateY.value }
      ],
    }
  })

  const rInternalPickerStyle = useAnimatedStyle(() => {

    const inputRange = colors.map((_, index) => (index / colors.length) * maxWidth);

    const backgroundColor = interpolateColor(translateX.value, inputRange, colors);

    return {
      backgroundColor: backgroundColor,
    }
  })

  return (
    <PanGestureHandler onGestureEvent={panGestureEvent}>
      <Animated.View style={{ justifyContent: 'center' }}>
        <LinearGradient colors={colors} start={start} end={end} style={style} />
        <Animated.View style={[styles.picker, rStyle]} >
          <Animated.View style={[styles.internalPicker, rInternalPickerStyle]} />
        </Animated.View>
      </Animated.View>
    </PanGestureHandler>


  )



}

const CIRCLE_PICKER_SIZE = 40.3;
const INTERNAL_PICKER_SIZE = CIRCLE_PICKER_SIZE / 2;

const styles = StyleSheet.create({
  picker: {
    position: 'absolute',
    backgroundColor: 'slategray',
    width: CIRCLE_PICKER_SIZE,
    height: CIRCLE_PICKER_SIZE,
    borderRadius: CIRCLE_PICKER_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  internalPicker: {
    width: INTERNAL_PICKER_SIZE,
    height: INTERNAL_PICKER_SIZE,
    borderRadius: INTERNAL_PICKER_SIZE / 2,
    borderWidth: 1.0,
    borderColor: 'rgba(0,0,0,0.2)',
  },
});

export { ColorPicker };