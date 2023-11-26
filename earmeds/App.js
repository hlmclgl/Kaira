import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigation from './src/navigation/AppNavigation';
import { Asistant } from './src/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AppNavigation"
          component={AppNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AriseAI"
          component={Asistant}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





