import { View, Text, ImageBackground } from "react-native";
import { SuccessFailText } from './successFailText';
import { SuccessFailLevelCounter } from "./successFailLevelCounter";
import { CoralState } from "./coralAlgaeState";

interface coralsProps {
    coral: CoralState;
}

export function CoralCounters({ coral }: coralsProps) {
    const {
        l4, faill4,
        l3, faill3,
        l2, faill2,
        l1, faill1,
    } = coral;
    const [L4, setL4] = l4;
    const [failL4, setFailL4] = faill4;
    const [L3, setL3] = l3;
    const [failL3, setFailL3] = faill3;
    const [L2, setL2] = l2;
    const [failL2, setFailL2] = faill2;
    const [L1, setL1] = l1;
    const [failL1, setFailL1] = faill1;
    return (
        <View>
            <ImageBackground
                source={{ uri: 'https://drive.google.com/uc?export=view&id=1KoXK12QpA4rsUAkJY3VuFsQg_4CMCQFx' }}
                style={{
                    zIndex: -1,
                    width: 160,
                    height: 660,
                    left: 120,
                    top: 150,
                    position: "absolute"
                }}
            />
            {/* Title */}
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: 20 }}>
                <Text style={{ fontSize: 50 }}>Coral</Text>
            </View>

            <SuccessFailText />

            {/* Counters */}
            <View
                style={{
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 80,
                    paddingBottom: 100,
                }}
            >
                <SuccessFailLevelCounter
                    levelLabel="L4"
                    successCount={L4}
                    setSuccessCount={setL4}
                    failCount={failL4}
                    setFailCount={setFailL4}
                />
                <SuccessFailLevelCounter
                    levelLabel="L3"
                    successCount={L3}
                    setSuccessCount={setL3}
                    failCount={failL3}
                    setFailCount={setFailL3}
                />
                <SuccessFailLevelCounter
                    levelLabel="L2"
                    successCount={L2}
                    setSuccessCount={setL2}
                    failCount={failL2}
                    setFailCount={setFailL2}
                />
                <SuccessFailLevelCounter
                    levelLabel="L1"
                    successCount={L1}
                    setSuccessCount={setL1}
                    failCount={failL1}
                    setFailCount={setFailL1}
                />
            </View>
        </View>
    );
}
