import React, { useState } from "react";
import { Pressable, Text, View, Image } from "react-native";

export function LevelCounter() {
    const [count, setCount] = useState(0);

    return (
        <View
            style={{
                flexDirection: "row",
                gap: 10,
            }}>

            <Pressable
                onPress={() => setCount(underZero(count) ? 0 : count - 1)}
                style={({ pressed }) => ({
                    backgroundColor: pressed ? "blue" : "white",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 20,
                })}
            >
                <Text style={{ fontSize: 50, lineHeight: 50 }}>-</Text>
            </Pressable>

            <Text style={{ fontSize: 20, lineHeight: 50, textAlign: "center", width: 25}}>{count}</Text>

            <Pressable
                onPress={() => setCount(count + 1)}
                style={({ pressed }) => ({
                    backgroundColor: pressed ? "blue" : "white",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 20,
                })}
            >
                <Text style={{ fontSize: 50, lineHeight: 50 }}>+</Text>
            </Pressable>

        </View>
    )
}
function underZero(params: number) {
    return params <= 0
}