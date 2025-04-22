import React, { useState } from "react";
import { Pressable, Text, View, Image, Button } from "react-native";
import { LevelCounter } from "./levelCounter";
import { SuccessFailLevelCounter } from "./successFailLevelCounter"
import { ScrollView } from "react-native";
import SwipeCounter from "./swipeCounter"
import { PageSwitcher } from "./pageSwitcher";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CoralAlgaeState } from "./coralAlgaeState"
import { Teleop } from "./teleop"
import { Tabs } from "expo-router";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [flag, setFlag] = useState(false);
  const teleopState: CoralAlgaeState = {
    l4: useState(0),
    faill4: useState(0),
    l3: useState(0),
    faill3: useState(0),
    l2: useState(0),
    faill2: useState(0),
    l1: useState(0),
    faill1: useState(0),
    net: useState(0),
    failNet: useState(0),
    proccessor: useState(0),
    reef: useState(0),
  };
  const autoState: CoralAlgaeState = {
    l4: useState(0),
    faill4: useState(0),
    l3: useState(0),
    faill3: useState(0),
    l2: useState(0),
    faill2: useState(0),
    l1: useState(0),
    faill1: useState(0),
    net: useState(0),
    failNet: useState(0),
    proccessor: useState(0),
    reef: useState(0),
  };


  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Auto"
        options={{ title: 'Auto' }}
      >
        {props => (
          <Teleop teleopState={autoState} isAuto={true} setCrossedLine={setFlag} crossedLine={flag}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="tabs"
        options={{ title: 'Teleop' }}
      >
        {props => (
          <Teleop teleopState={teleopState} isAuto={false}/>
        )}
      </Tab.Screen>

    </Tab.Navigator>
  )
}