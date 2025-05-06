import React, { useState, } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CoralAlgaeState } from "./coralAlgaeState"
import { Teleop } from "./teleop"
import { Ionicons } from '@expo/vector-icons';
import { EndGame } from "./end_game";

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
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#333',
        },
        headerStyle: {
          backgroundColor: '#555555'
        },
        headerTintColor: 'red',
        headerTitleStyle: {
          fontSize: 30
        }
      }}>
      <Tab.Screen
        name="Auto"
        options={{
          title: 'Auto',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-python" size={size} color={color} />
          )
        }}
      >
        {props => (
          <Teleop teleopState={autoState} isAuto={true} setCrossedLine={setFlag} crossedLine={flag}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Teleop"
        options={{
          title: 'Teleop',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-xbox" size={size} color={color} />
          )
        }}
      >
        {props => (
          <Teleop teleopState={teleopState} isAuto={false} />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="End-game"
        options={{
          title: 'End Game',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-apple" size={size} color={color} />
          )
        }}
      >
        {props => (
          <EndGame />
        )}
      </Tab.Screen>

    </Tab.Navigator>
  )
}