import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { ColorPicker } from '../components/ColorPicker';


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

const CIRCLE_SIZE = Dimensions.get('window').width * 0.8;

const PICKER_WIDTH = Dimensions.get('window').width * 0.9;


export default function ColorPalette() {
  return (
    <>
      <View style={styles.topContainer}>

      </View>
      <View style={styles.bottomContainer}>
        <ColorPicker
          colors={COLORS}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
          maxWidth={PICKER_WIDTH}
        />
      </View>
    </>

  )
}


const styles = StyleSheet.create({
  topContainer: {
    flex: 3,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: { height: 40, width: PICKER_WIDTH, borderRadius: 20 },

});