import React, { useState, } from 'react';
import { View, Text, Pressable, Dimensions } from 'react-native';
import { Timer } from './timer';

const { height: screenHeight } = Dimensions.get('window');
const halfHeight = screenHeight / 2;

interface BooleanProps {
    bool: boolean;
    setBool: (v: boolean) => void;
}

export function ClimbParkButtons({ bool, setBool }: BooleanProps) {
    return (
        <View style={{ flexDirection: "column", justifyContent: "flex-start", flex: 1 }}>
            <Pressable
                onPress={() => setBool(false)}
                style={{
                    backgroundColor: bool ? 'white' : 'red',
                    width: 50,
                    flex: 1,
                    justifyContent: 'center'
                }}
            >
                <Text style={{ color: 'black', fontSize: 28, fontWeight: 'bold', textAlign: "center" }}>
                    {"c\nl\ni\nm\nb"}
                </Text>
            </Pressable>

            <Pressable
                onPress={() => setBool(true)}
                style={{
                    backgroundColor: bool ? 'red' : 'white',
                    width: 50,
                    flex: 1,
                    justifyContent: 'center'
                }}
            >
                <Text style={{ color: 'black', fontSize: 28, fontWeight: 'bold', textAlign: "center" }}>
                    {"p\na\nr\nk"}
                </Text>
            </Pressable>
        </View>
    );
}