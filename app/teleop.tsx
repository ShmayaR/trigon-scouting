import { Pressable, Text, View, Image } from "react-native";
import { SuccessFailLevelCounter } from "./successFailLevelCounter"
import { ScrollView } from "react-native";
import { CoralAlgaeState } from "./coralAlgaeState"
import React, { useState } from 'react';
import SwipeCounter from "./swipeCounter"

interface TeleopProps {
    teleopState: CoralAlgaeState;
    isAuto: boolean;
    crossedLine?: boolean;
    setCrossedLine?: (v: boolean) => void;
}
interface AutoButtonsProps {
    flag: boolean;
    setFlag: (v: boolean) => void;
}
export function Teleop({ teleopState, isAuto, setCrossedLine: setCrossedLine, crossedLine }: TeleopProps) {
    const {
        l4, faill4,
        l3, faill3,
        l2, faill2,
        l1, faill1,
        net, failNet,
        proccessor, reef,
    } = teleopState;
    const [L4, setL4] = l4;
    const [failL4, setFailL4] = faill4;

    const [L3, setL3] = l3;
    const [failL3, setFailL3] = faill3;

    const [L2, setL2] = l2;
    const [failL2, setFailL2] = faill2;

    const [L1, setL1] = l1;
    const [failL1, setFailL1] = faill1;

    const [Net, setNet] = net;
    const [FailNet, setFailNet] = failNet;

    const [Reef, setReef] = reef;
    const [Proccessor, setProccessor] = proccessor;

    return (
        <View style={{
            flex: 1,
            alignContent: "center"
        }}>
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{
                    flexDirection: "column",
                    padding: 20,
                    paddingBlockEnd: 100,
                    gap: 0,
                    alignContent: "center",
                    alignItems: "center"
                }}>

                {isAuto && crossedLine !== undefined && setCrossedLine && (
                    <AutoButtons
                        flag={crossedLine}
                        setFlag={setCrossedLine}
                    />
                )}
                <View style={{
                    flexDirection: "column",
                    padding: 20,
                    paddingBlockEnd: 100,
                    gap: 80,
                    alignContent: "center",
                    alignItems: "center"
                }}
                >
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        width: "100%",
                        gap: 165,
                        left: 10,
                        top: 60,
                    }}>
                        <Text style={{ fontSize: 30 }}>Fail</Text>
                        <Text style={{ fontSize: 30 }}>Success</Text>

                    </View>
                    <SuccessFailLevelCounter
                        levelLabel="L4" successCount={L4} setSuccessCount={setL4} failCount={failL4} setFailCount={setFailL4} />
                    <SuccessFailLevelCounter
                        levelLabel="L3" successCount={L3} setSuccessCount={setL3} failCount={failL3} setFailCount={setFailL3} />
                    <SuccessFailLevelCounter
                        levelLabel="L2" successCount={L2} setSuccessCount={setL2} failCount={failL2} setFailCount={setFailL2} />
                    <SuccessFailLevelCounter
                        levelLabel="L1" successCount={L1} setSuccessCount={setL1} failCount={failL1} setFailCount={setFailL1} />
                    <SuccessFailLevelCounter
                        levelLabel="Net" successCount={Net} setSuccessCount={setNet} failCount={FailNet} setFailCount={setFailNet} />

                    <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 240, }}>
                        <SwipeCounter label="Outta reef" count={Reef} setCount={setReef} />
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 240, }}>
                        <SwipeCounter label="processor" count={Proccessor} setCount={setProccessor} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
function AutoButtons({ flag, setFlag }: AutoButtonsProps) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Pressable
                onPress={() => setFlag(!flag)}
                style={{
                    backgroundColor: flag ? 'green' : 'red',
                    paddingVertical: 12,
                    paddingHorizontal: 32,
                    borderRadius: 6,
                }}
            >
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                    {flag.toString()}
                </Text>
            </Pressable>
        </View>
    );
}