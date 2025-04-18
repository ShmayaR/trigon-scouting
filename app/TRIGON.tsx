import React, { useState } from "react";
import { Pressable, Text, View, Image } from "react-native";
import { LevelCounter } from "./levelCounter";
import { SuccessFailLevelCounter } from "./successFailLevelCounter"
import { ScrollView } from "react-native";

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
        gap: 150,
        right: 15,
        top: 60,
      }}>
        <Text style={{ fontSize: 30 }}>Success</Text>
        <Text style={{ fontSize: 30 }}>Fail</Text>

      </View>
      <SuccessFailLevelCounter levelLabel="L4" />
      <SuccessFailLevelCounter levelLabel="L3" />
      <SuccessFailLevelCounter levelLabel="L2" />
      <SuccessFailLevelCounter levelLabel="L1" />
      <SuccessFailLevelCounter levelLabel="Net" />
      <View style={{ flexDirection: "row", alignItems: "center", gap: 50 }}>
        <Text>Processor</Text>
        <LevelCounter />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 50 }}>
        <Text>Reef 🪸</Text>
        <LevelCounter />
      </View>
    </ScrollView>

  )
}