import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { HealthRings } from './components/HealthRings/HealthRing';
import { Home, ColorPalette, MenstrualCycle, Translate, Weather } from "./screens"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HealthRate from './components/HeartRate/HealthRate';
import SpO2 from './components/SpO2/SpO2';
import StressLevel from './components/StressLevel/StressLevel';
import { Platform } from 'react-native';

import BloodSugar from './components/BloodSugar/BloodSugar';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 15,
    right: 10,
    left: 10,
    elevation: 0,
    height: 70,
    background: "#fff",
    borderRadius:15,
    
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Translate"
          component={Translate}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <MaterialIcons name="translate" size={24} color={focused ? "#29AB87" : "#111"} />

                  <Text style={{ fontSize: 12, color: focused ? "#29AB87" : "#111" }}>Çeviri</Text>

                </View>
              )
            }
          }}
        />
        <Tab.Screen
          name="Weather"
          component={Weather}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <MaterialCommunityIcons name="weather-partly-cloudy" size={24} color={focused ? "#33CCCC" : "#111"} />
                  <Text style={{ fontSize: 12, color: focused ? "#33CCCC" : "#111" }}>Hava Durumuaaa</Text>
                </View>
              )
            }
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "maroon",
                    width: Platform.OS == "ios" ? 50 : 60,
                    height: Platform.OS == "ios" ? 50 : 60,
                    top: Platform.OS == "ios" ? -10 : -20,
                    borderRadius: Platform.OS == "ios" ? 25 : 30
                  }}>
                  <FontAwesome name="heartbeat" size={37} color={focused ? "#e5acb6" : "#111"} />

                </View>
              )
            }
          }}
        />
        <Tab.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  
                    <Ionicons name="ios-color-palette-outline" size={24} color={focused ? "#FFD700" : "#111" } />
                    <Text style={{ fontSize: 12, color: focused ? "#FFD700" : "#111"  }}>Renk Paleti</Text>
                  

                </View>
              )
            }
          }}
        />
        <Tab.Screen
          name="MenstrualCycle"
          component={MenstrualCycle}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <MaterialCommunityIcons name="calendar-heart" size={24} color={focused ? "#AA336A" : "#111"} />
                  <Text style={{ color: focused ? "#AA336A" : "#111", fontSize: 12 }}>Periyod İzleyici</Text>
                </View>
              )
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

