import React, { useState, } from 'react';
import { View, Text, Pressable, Dimensions } from 'react-native';
import { Timer } from './timer';
import { ClimbParkButtons } from './SideNavigator';

interface BooleanProps {
  bool: boolean;
  setBool: (v: boolean) => void;
}

export function EndGame() {
  const [flag, setFlag] = useState(false);
  const [park, setPark] = useState(false);

  return (
    <View style={{ flexDirection: "row", flex: 1 }}>
      <ClimbParkButtons bool={flag} setBool={setFlag} />

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {flag ? <ParkButton bool={park} setBool={setPark} /> : <Timer />}
      </View>
      
    </View>
  )
}

function ParkButton({ bool, setBool }: BooleanProps) {
  return (
    <View style={{ marginVertical: 50, alignContent: "center" }}>
      <Pressable
        onPress={() => setBool(!bool)}
        style={{
          backgroundColor: bool ? 'green' : 'red',
          paddingVertical: 22,
          borderRadius: 6,
          alignSelf: "center",
          width: 230
        }}
      >
        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', alignSelf: "center" }}>
          {"parked - " + bool.toString()}
        </Text>
      </Pressable>
    </View>
  );
}