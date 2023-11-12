import * as React from "react";
import { View, StyleSheet, Modal, Text, Image, Pressable, TouchableOpacity } from "react-native";

import Screen from "../components/Screen";

import AlphabetIcon from "../assets/icons/levels/AlphabetIcon";
import SpeechBubbles from "../assets/icons/levels/SpeechBubbles";
import Finger from "../assets/icons/levels/Finger";
import Pizza from "../assets/icons/levels/Pizza";

import CheckMark from "../assets/icons/CheckMark";

import {LevelBorderTop, LevelBorderCenter, LevelBorderBottom} from "../assets/icons/levels/LevelBorder";

function MainMenu({ navigation }) {
    return (
        <Screen>
            <View className="flex flex-row w-[100%] items-center gap-[8px] mb-[10px] px-[8px]">
                <View className="flex-1 h-[2px] bg-black" /> 
                <Text>Level 1</Text>
                <View className="flex-1 h-[2px] bg-black" /> 
            </View>
            <View className="flex flex-column items-center mx-auto border border-black">
                {/* Row 1 */}
                <View className="flex flex-row items-center border border-black">
                    {/* TODO: Make LevelBorder and AbsoluteView scale together */}
                    <LevelBorderTop />
                    {/* TODO: Research replace with Touchable? */}
                    <TouchableOpacity 
                        onPress = {() => navigation.navigate("LevelOneAlphabet")}
                        className="absolute h-[102px] w-[256px] flex flex-row items-center">
                        <View className="ml-[10px] border border-black">
                            <AlphabetIcon />
                        </View>
                        <Text className="ml-[10px]">s, a, t, p, i, n</Text>
                    </TouchableOpacity>
                    <View className="ml-[10px] border border-black">
                        <CheckMark />
                    </View>
                </View>
                {/* Row 2 */}
                    <View className="flex flex-row items-center border border-black relative -top-[5px]">
                    <LevelBorderCenter />
                    <View className="absolute h-[102px] w-[256px] flex flex-row items-center">
                        <View className="ml-[10px] border border-black">
                            <SpeechBubbles />
                        </View>
                        <Text className="ml-[10px]">I am...</Text>
                    </View>
                    <View className="ml-[10px] border border-black">
                        <CheckMark />
                    </View>
                </View>
                {/* Row 3 */}
                <View className="flex flex-row items-center border border-black relative -top-[10px]">
                    <LevelBorderCenter />
                    <View className="absolute h-[102px] w-[256px] flex flex-row items-center">
                        <View className="ml-[10px] border border-black">
                            <Finger />
                        </View>
                        <Text className="ml-[10px]">sit, pen...</Text>
                    </View>
                    <View className="ml-[10px] border border-black">
                        <CheckMark />
                    </View>
                </View>
                {/* Row 4 */}
                {/* TODO: relative top positioning keeps incrementally increasing 
                due to svg borders overlapping. Is there a cleaner solution? */}
                <View className="flex flex-row items-center border border-black relative -top-[15px]">
                    <LevelBorderBottom />
                    <View className="absolute h-[102px] w-[256px] flex flex-row items-center">
                        <View className="ml-[10px] border border-black">
                            <Pizza />
                        </View>
                        <Text className="ml-[10px]">food</Text>
                    </View>
                    <View className="ml-[10px] border border-black">
                        <CheckMark />
                    </View>
                </View>
            </View>
        </Screen>
    );
}

export default MainMenu;
