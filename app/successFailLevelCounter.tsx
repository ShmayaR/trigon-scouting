import { Pressable, Text, View, Image } from "react-native";
import { LevelCounter } from "./levelCounter";

export function SuccessFailLevelCounter(props: {levelLabel: string}) {
    return <View style={{
        flexDirection: "row",
        gap:20,
    }}>
        <LevelCounter  />
        <Text style={{ fontSize: 40 }}>{props.levelLabel}</Text>
        <LevelCounter />
    </View>
}