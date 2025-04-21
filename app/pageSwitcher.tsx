import React, { useState } from "react";
import { Pressable, Text, View, Image } from "react-native";

type PageProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  };
  
 export function PageSwitcher({ count, setCount }:PageProps) {
    return (
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
        }}>
  
        <Pressable
          onPress={() => setCount(count - 1)}
          style={({ pressed }) => ({
            backgroundColor: pressed ? "blue" : "white",
            flex: 1,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "gray",
            borderWidth: 0.75,
            borderRadius: 0,
          })}
        >
          <Text style={{ fontSize: 30, lineHeight: 50, }}>←Previous</Text>
        </Pressable>
  
        <Pressable
          onPress={() => setCount(count + 1)}
          style={({ pressed }) => ({
            backgroundColor: pressed ? "blue" : "white",
            flex: 1,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "gray",
            borderWidth: 0.75,
            borderRadius: 0,
          })}
        >
          <Text style={{ fontSize: 30, lineHeight: 50 }}>Next→</Text>
        </Pressable>
      </View>)
  }