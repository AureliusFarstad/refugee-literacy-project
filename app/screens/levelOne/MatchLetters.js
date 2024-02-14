import * as React from "react";

import { View } from "react-native";

import SquareFrameColor from "../../assets/icons/SquareFrameColor.js";

const exampleLetters = ["s", "a", "t", "p", "i", "n"];

export default function MatchLetters({ exampleLetters=exampleLetters }) {
    return (
        <View>
            <View className="w-[64px] h-[64px]">
                <SquareFrameColor color="#000000" />
            </View>
            <View className="w-[64px] h-[64px]">
                <SquareFrameColor color="#00FF00" />
            </View>
            <View className="w-[64px] h-[64px]">
                <SquareFrameColor color="#FF0000" />
            </View>
            <View className="w-[64px] h-[64px]">
                <SquareFrameColor color="#FFFFFF" />
            </View>
        </View>
    );
}
