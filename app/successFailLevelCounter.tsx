import { Pressable, Text, View, Image, ImageSourcePropType } from "react-native";
import SwipeCounter from "./swipeCounter";
import { AutoSizeText } from "./autosizeText";

export function SuccessFailLevelCounter(props: {
    levelLabel: string,
    successCount: number,
    setSuccessCount: React.Dispatch<React.SetStateAction<number>>,
    failCount: number,
    setFailCount: React.Dispatch<React.SetStateAction<number>>,
    centerImage?: ImageSourcePropType; // 🌟 NEW optional prop
}) {
    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            gap: 20, // smaller gap because we add image
        }}>

            {/* Success Counter */}
            <View style={{ width: 120, alignItems: 'center' }}>
                <SwipeCounter
                    label={props.levelLabel}
                    count={props.successCount}
                    setCount={props.setSuccessCount}
                    tintColor={"#f8d7da"}
                />
            </View>

            <View style={{ alignItems: "center" }}>
                <Text style={{ marginBottom: 8, fontSize: 14, color: 'transparent' }}>
                    {" "} {/* Invisible text just to balance the height */}
                </Text>
                <Image
                    source={props.centerImage}
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 8,
                    }}
                    resizeMode="cover"
                />
            </View>


            {/* Fail Counter */}
            <View style={{ width: 120, alignItems: 'center' }}>
                <SwipeCounter
                    label={props.levelLabel}
                    count={props.failCount}
                    setCount={props.setFailCount}
                    tintColor={"#d4edda"} 
                />
            </View>
        </View>
    );
}
