import React from 'react';
import { View, Text, Pressable, } from 'react-native';

interface BooleanProps {
    bool: boolean;
    setBool: (v: boolean) => void;
    trueText: string;
    falseText: string;
}

export function TrueFalseButton({ bool, setBool, trueText, falseText }: BooleanProps) {
    return (
        <View style={{ marginVertical: 50, alignContent: "center", }}>
            <Pressable
                onPress={() => setBool(!bool)}
                style={{
                    backgroundColor: bool ? 'green' : 'red',
                    paddingVertical: 22,
                    borderRadius: 6,
                    alignSelf: "center",
                    width: 230
                }}
            >/
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', alignSelf: "center" }}>
                    {bool ? trueText : falseText}
                </Text>
            </Pressable>
        </View>
    );
}