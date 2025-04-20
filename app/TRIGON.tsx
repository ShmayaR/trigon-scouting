import React, { useState } from "react";
import { Pressable, Text, View, Image } from "react-native";
import { LevelCounter } from "./levelCounter";
import { SuccessFailLevelCounter } from "./successFailLevelCounter"
import { ScrollView } from "react-native";
import SwipeCounter from "./swipeCounter"
export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}

      contentContainerStyle={{
        flexDirection: "column",
        padding: 20,
        paddingBlockEnd: 100,
        gap: 80,
        alignContent: "center",
        alignItems: "center"
      }}>
      <View style={{
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        gap: 165,
        left: 10,
        top: 60,
      }}>
        <Text style={{ fontSize: 30 }}>Fail</Text>
        <Text style={{ fontSize: 30 }}>Success</Text>

      </View>
      <SuccessFailLevelCounter levelLabel="L4" />
      <SuccessFailLevelCounter levelLabel="L3" />
      <SuccessFailLevelCounter levelLabel="L2" />
      <SuccessFailLevelCounter levelLabel="L1" />
      <SuccessFailLevelCounter levelLabel="Net" />

      <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 240, }}>
        <SwipeCounter label="Outta reef" />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 240, }}>
        <SwipeCounter label="processor" />
      </View>
    </ScrollView>

  )
}