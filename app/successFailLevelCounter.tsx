import { Pressable, Text, View, Image } from "react-native";
import SwipeCounter from "./swipeCounter";
import { AutoSizeText } from "./autosizeText";

export function SuccessFailLevelCounter(props: {
    levelLabel: string,
    successCount: number,
    setSuccessCount: React.Dispatch<React.SetStateAction<number>>,
    failCount: number,
    setFailCount: React.Dispatch<React.SetStateAction<number>>,
}) {
    return <View style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        width: "100%"
    }}>
        <SwipeCounter label={props.levelLabel} count={props. successCount} setCount={props. setSuccessCount}/>
        {/* make this view flex so AutoSizeText knows its max width */}

        <SwipeCounter label={props.levelLabel} count={props.failCount} setCount={props.setFailCount} />
    </View>
}