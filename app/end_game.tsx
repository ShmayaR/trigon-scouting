import React, { useState, } from 'react';
import { ImageBackground, View, StyleSheet, } from 'react-native';
import { Timer } from './timer';
import { ClimbParkButtons } from './sideNavigator';
import { TrueFalseButton } from './trueFalseButton'

export function EndGame() {
  const [flag, setFlag] = useState(false);
  const [park, setPark] = useState(false);
  const [climb, setClimb] = useState(true);
  const [climbTime, setClimbTime] = useState(0);

  return (
    <View style={{ flexDirection: "row", flex: 1 }}>
      <ImageBackground
        source={{ uri: 'https://drive.google.com/uc?export=view&id=1P9II7ZelTo9OtHxBJB9knPXTDDfEhJKS' }}
        resizeMode="cover"
        blurRadius={18}

        style={{
          ...StyleSheet.absoluteFillObject,
          zIndex: -1,
          opacity: 0.3,

        }}
      />
      <ClimbParkButtons bool={flag} setBool={setFlag} />

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: "absolute", paddingTop: 120, paddingLeft: 50, }}>
        {flag ?
          <View style={{ flex: 1, justifyContent: 'center', paddingTop: 120, paddingLeft: 50, }}>
            <TrueFalseButton bool={park} setBool={setPark} trueText='parked - true' falseText='parked - false' />
          </View>
          : <><Timer count={climbTime} setCount={setClimbTime} />
            <TrueFalseButton bool={climb} setBool={setClimb} trueText='climb succesful' falseText='climb failed' /></>}
      </View>

    </View >
  )
}