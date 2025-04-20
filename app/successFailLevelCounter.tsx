import { Pressable, Text, View, Image } from "react-native";
import  SwipeCounter  from "./swipeCounter";
import { AutoSizeText } from "./autosizeText";

export function SuccessFailLevelCounter(props: { levelLabel: string }) {
  return <View style={{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    width: "100%"
  }}>
    <SwipeCounter label={props.levelLabel} />
    {/* make this view flex so AutoSizeText knows its max width */}

    <SwipeCounter label={props.levelLabel} />
  </View>
}