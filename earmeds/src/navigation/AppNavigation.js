import { View, Text, SafeAreaView, StyleSheet  } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, ColorPalette, MenstrualCycle, Settings, Welcome } from "../screens"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { Platform } from 'react-native';


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
        borderRadius: 15,

    }
}

export default function AppNavigation() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Tab.Navigator screenOptions={screenOptions} initialRouteName='Onboarding'>
                    <Tab.Screen
                        name="Welcome"
                        component={Welcome}
                        options={{
                            tabBarIcon: ({ focused }) => {
                                return (
                                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                                        <MaterialCommunityIcons name="artstation" size={24} color={focused ? "#29AB87" : "#111"} />

                                        <Text style={{ fontSize: 12, color: focused ? "#29AB87" : "#111" }}>Arise AI</Text>

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

                                        <Ionicons name="ios-color-palette-outline" size={24} color={focused ? "#FFD700" : "#111"} />
                                        <Text style={{ fontSize: 12, color: focused ? "#FFD700" : "#111" }}>Renk Paleti</Text>


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
                        name="MenstrualCycle"
                        component={MenstrualCycle}
                        options={{
                            tabBarIcon: ({ focused }) => {
                                return (
                                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                                        <MaterialCommunityIcons name="calendar-heart" size={24} color={focused ? "#AA336A" : "#111"} />
                                        <Text style={{ color: focused ? "#AA336A" : "#111", fontSize: 12 }}>Periyot Takibi</Text>
                                    </View>
                                )
                            }
                        }}
                    />
                    <Tab.Screen
                        name="Settings"
                        component={Settings}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({ focused }) => {
                                return (
                                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                                        <Feather name="settings" size={24} color= {focused ? "#33CCCC" : "#111"} />
                                        <Text style={{ fontSize: 12, color: focused ? "#33CCCC" : "#111" }}>Ayarlar</Text>
                                    </View>
                                )
                            }
                        }}
                    />
                </Tab.Navigator>
            </View>
            
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      // İçeriğinizin stilleri buraya gelecek
    },
  });