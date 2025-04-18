import React, { useState } from "react";
import { Pressable, Text, View, Image } from "react-native";
import { LevelCounter } from "./levelCounter";
import { SuccessFailLevelCounter } from "./successFailLevelCounter"
export default function Index() {
  return (
    <View style={{
      flexDirection: "column",
      padding: 20,
      gap: 80,
      alignContent: "center",
      alignItems: "center"
    }}>
      <View style={{
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        gap: 150,
        right:15,
        top:60,
      }}>
        <Text style={{ fontSize: 30 }}>Success</Text>
        <Text style={{ fontSize: 30 }}>Fail</Text>
        
      </View>
      <SuccessFailLevelCounter levelLabel="L4" />
      <SuccessFailLevelCounter levelLabel="L3" />
      <SuccessFailLevelCounter levelLabel="L2" />
      <SuccessFailLevelCounter levelLabel="L1" />
    </View>

  )
}