import { Text, View, } from "react-native";

export function SuccessFailText() {
    return (
        <View style={{
            flexDirection: "row",
            width: "100%",
            gap: 130,
            paddingBottom: 20,
        }}>
            <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontSize: 30 }}>Fail</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontSize: 30 }}>Success</Text>
            </View>
        </View>
    )
}