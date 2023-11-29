import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Pressable } from 'react-native'
import React, { useCallback } from 'react'
import { ColorPicker } from '../components/ColorPicker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';


const COLORS = [
  'pink',
  'red',
  'purple',
  'blue',
  'cyan',
  'green',
  'yellow',
  'orange',
  'black',
  'gray',
  'white',




];

const BACKGROUND_COLOR = 'rgba(0,0,0,0.9)';

const { width } = Dimensions.get('window');

const CIRCLE_SIZE = width * 0.8;

const PICKER_WIDTH = width * 0.9;


export default function ColorPalette() {

  const pickedColor = useSharedValue<string | number>(COLORS[0]);

  const onColorChanged = useCallback((color: string | number) => {
    'worklet';
    pickedColor.value = color;
  }, [])

  const rStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: pickedColor.value,
    };
  });

  return (
    <>
      <View style={styles.topContainer}>
        <Text style={styles.headerText}>Kaira E-ink</Text>
        <Animated.View style={[styles.circle, rStyle]} />


      </View>
      <View style={styles.bottomContainer}>
        <ColorPicker
          colors={COLORS}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
          maxWidth={PICKER_WIDTH}
          onColorChanged={onColorChanged}
        />
        <Pressable style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            Rengini Seç
          </Text>
        </Pressable>

      
    </View >
    </>

  )
}


const styles = StyleSheet.create({
  topContainer: {
    flex: 3.3,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bottomContainer: {
    flex: 1.7,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,

  },
  gradient: { height: 40, width: PICKER_WIDTH, borderRadius: 20 },
  headerText: {
    top: 10,
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'white',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 15,
    paddingHorizontal: 112.5,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "rgb(5 150 105)",
    bottom: -65
  },
  buttonText: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'white',
    fontSize: 24,
  },

});