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
        source={{ uri: 'https://lh3.googleusercontent.com/pw/AP1GczNKSojT0ZPir8heLKsUUGWpCOnZGXWWF9JIIW3ME7uvYt_NobJ-VD8Xz0DCL38nqzaM82cFNk4RrBA4x3w2l_4T1_Y5tqpI6ZVw6U6QuZiAb55zOP-_VzTyQQvneeJ_DNTeWYTW0ptcnlRG8wcANiHlvHsstx1G41uiceAmreAjOV0vOTmRbBATVVhEMpfPfYGdgWKsfY54wlf2RNcfNDPWnAOo_TqAGm8j8L3sA_CkZ4T6AYQ16qSaoV6_ITSiwds0wcBW97c_J8-8bkZ4jRw2OaC1VvhymL2WVayuQXasATtPfpdz3tZUT7BsfK2MMzwjKwrQhQovr1idbqaPCwbxCgtYxZ1bX79xOqVKoe8bAmHbQtawIfCVZmkaBJ7BOTIxfC-8GnXoWWayDDabg05Gov2XKt4HqGFUPSkl02ELQGxc2BFDZCMbMs74NepO2PwQoqL083wWUnShABXZdvY4F6d_iMUK4rA9JaI46jx4aM2UfvV49OROTZHz-6XrDSFi4_tW05ScSVT5faB_YadtTM9_qZJDXsIeePEX5Sm8xcrhn3S_lyfyY5aIkv-ChRibbLtTWBPocz9Ge8Gg1BrsTIzfD1rvJdPC9W6inl7hSUI2zZK_2nQJxM6r8c7AAHePLqHN4Tijl1FFTzq9n-o6C36wpvEf4dpCSp-vXCnetQbYAd4dVEg_HBbSdBaROESNQJYBv118dt8UCcjyhTq7uuhJ-gIuTdw3HIRJBTsv56MhTY6981o1FZghcOLYuWraQiUj9GWvJJs2M4LMicl1UeUzNVAou1vg8yC8dZex7BdyM6_UGbQ8udRVdNI3CIkfQ0QZ2W2TZIs3tcZ7HDYevs_LlpV1TJBCoK8c4TmiLYNWF_U53A90dlMCaw0FsGIMLTh5b9J55M0tBqPuGfsYivPTKg=w1678-h1678-s-no?authuser=0' }}
        resizeMode="cover"
        blurRadius={18}

        style={{
          ...StyleSheet.absoluteFillObject,
          zIndex: -1,
          opacity: 0.7,

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