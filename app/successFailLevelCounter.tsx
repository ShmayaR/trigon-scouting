import { Pressable, Text, View, Image } from "react-native";
import { LevelCounter } from "./levelCounter";
import { AutoSizeText } from "./autosizeText";

export function SuccessFailLevelCounter(props: { levelLabel: string }) {
  return <View style={{
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  }}>
    <LevelCounter />
    {/* make this view flex so AutoSizeText knows its max width */}
    <View style={{ flex: 1 }}>
      <AutoSizeText style={{ fontSize: 40 }}>
        {props.levelLabel}
      </AutoSizeText>
    </View>
    <LevelCounter />
  </View>
}