import React, { useState } from 'react';
import { Pressable, Text, View, ScrollView, ImageBackground, StyleSheet, Image, ImageBackgroundBase } from "react-native";
import { SuccessFailLevelCounter } from "./successFailLevelCounter";
import { CoralAlgaeState } from "./coralAlgaeState";
import SwipeCounter from "./swipeCounter";
import { SuccessFailText } from './successFailText';
import { CoralCounters } from './coralCounters';
import * as Haptics from 'expo-haptics';

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

export function Teleop({ teleopState, isAuto, setCrossedLine, crossedLine }: TeleopProps) {
    const {
        l4, faill4,
        l3, faill3,
        l2, faill2,
        l1, faill1,
        net, failNet,
        proccessor, reef,
    } = teleopState;
    const corals = {
        l4, faill4,
        l3, faill3,
        l2, faill2,
        l1, faill1,
    }

    const [Net, setNet] = net;
    const [FailNet, setFailNet] = failNet;
    const [Reef, setReef] = reef;
    const [Proccessor, setProccessor] = proccessor;

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={{ uri: 'https://drive.google.com/uc?export=view&id=1P9II7ZelTo9OtHxBJB9knPXTDDfEhJKS' }}
                resizeMode="cover"
                blurRadius={12}

                style={{
                    ...StyleSheet.absoluteFillObject,
                    zIndex: -1,
                    opacity: 0.4,

                }}
            />
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{
                    flexGrow: 1,
                }}
            >

                {/* Foreground Content */}
                <View style={{
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 20,
                    gap: 0,
                    paddingTop: 60,
                    paddingBottom: 100,
                }}>
                    {/* Optional Auto Mode Toggle */}
                    {isAuto && crossedLine !== undefined && setCrossedLine && (
                        <AutoButtons flag={crossedLine} setFlag={setCrossedLine} />
                    )}

                    <CoralCounters coral={corals} />

                    <View
                        style={{
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 80,
                            paddingBottom: 100,
                        }}>
                        <View style={{
                            paddingTop: 50,
                            alignItems: "center",
                            width: "100%",
                        }}>

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: 20 }}>
                                <Text style={{ fontSize: 50, }}>Algae</Text>
                            </View>
                            {/* Labels */}
                            <SuccessFailText />

                            <SuccessFailLevelCounter levelLabel="Net" successCount={Net} setSuccessCount={setNet} failCount={FailNet} setFailCount={setFailNet}
                                centerImage={{ uri: 'https://drive.google.com/uc?export=view&id=1NMzmGheeISyqct0hRKm9A3B5qLEcZjNO' }} />
                        </View>

                        {/* Swipe Counters */}
                        <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 135, gap: 20 }}>
                            <Image
                                source={{ uri: 'https://drive.google.com/uc?export=view&id=1tqt9zrS6gCoQCv0iKWKCMenC6lcsaRfB' }}
                                style={{
                                    width: 80,
                                    height: 85,
                                    top: 10
                                }}
                                resizeMode="cover"
                            />
                            <SwipeCounter label="Outta reef" count={Reef} setCount={setReef} tintColor={"#d1ecf1"} />
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 150, gap: 20 }}>
                            <Image
                                source={{ uri: 'https://drive.google.com/uc?export=view&id=1jOuCVzI_3tKd8E8-CICdbINUtbrCTEFq' }}
                                style={{
                                    width: 60,
                                    height: 80,
                                    top: 10
                                }}
                                resizeMode="cover"
                            />
                            <SwipeCounter label="processor" count={Proccessor} setCount={setProccessor} tintColor={"#FFCC80"} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

function AutoButtons({ flag, setFlag }: AutoButtonsProps) {
    return (
        <View style={{ marginVertical: 20 }}>
            <Pressable
                onPress={() => {
                    setFlag(!flag)
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                }}
                style={{
                    backgroundColor: flag ? 'green' : 'red',
                    paddingVertical: 12,
                    paddingHorizontal: 32,
                    borderRadius: 6,
                }}
            >
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                    {"crossed auto line - " + flag.toString()}
                </Text>
            </Pressable>
        </View>
    );
}
