import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { View, Button, StyleSheet, Modal, Text, Image, Touchable, TouchableOpacity } from "react-native";

import LowerA from "../../assets/animation/a_animated.js";

import Handwriting from "../../assets/icons/Handwriting.js";

import Speaker from "../../assets/icons/Speaker.js";
import Ear from "../../assets/icons/Ear.js";
import Nametag from "../../assets/icons/Nametag.js";
import SquareFrame from "../../assets/icons/SquareFrame.js";
import CheckMark from "../../assets/icons/CheckMark.js";

export default function LevelOneAlphabet({ navigation }) {
    const [selectedLetter, setSelectedLetter] = useState("a");

    const lowercaseWebView = useRef(null);
    const uppercaseWebView = useRef(null);

    const animateLowercase = () => {
        const jsCommand = `document.querySelector('svg').svgatorPlayer['ready']((player) => player.play()); true;`;
        lowercaseWebView.current.injectJavaScript(jsCommand);
    };
    const animateUppercase = () => {
        const jsCommand = `document.querySelector('svg').svgatorPlayer['ready']((player) => player.play()); true;`;
        uppercaseWebView.current.injectJavaScript(jsCommand);
    };

    return (
    // <Screen>
        <View className="relative h-[100%] my-[0px] py-[0px] flex flex-column items-center justify-around">
            {/* Hand written letters section */}
            <View className="relative w-[100%] h-[200px] bg-white"> 
                {/* Outside solid blue lines */}
                <View className="relative h-[120px] top-[40px] border-y-[1px] border-[#7747FF]/50">
                    {/* Row of letters */}
                    <View className="top-[0px] flex flex-row justify-around h-[120px] z-100 px-[50px]">
                        <View className="h-[120px] w-[60px]">
                            <LowerA ref={lowercaseWebView} />
                        </View>
                        <View className="h-[120px] w-[60px]">
                            <LowerA ref={uppercaseWebView} />
                        </View>
                    </View>
                    {/* Inner solid blue lines */}
                    <View className="absolute z-100 h-[40px] inset-x-0 top-[40px] border-y-[1px] border-[#7747FF]/50" />
                </View>

                {/* Animate writing button */}
                <TouchableOpacity 
                    className="absolute top-[150px] left-[30px] w-[60px] h-[60px] bg-white border-2 border-[#ADD590] rounded-full flex items-center justify-center"
                    onPress={animateLowercase}
                >
                    <View className="w-[42px] aspect-square">
                        <Handwriting />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    className="absolute top-[150px] right-[30px] w-[60px] h-[60px] bg-white border-2 border-[#ADD590] rounded-full flex items-center justify-center"
                    onPress={animateUppercase}
                >
                    <View className="w-[42px] aspect-square">
                        <Handwriting />
                    </View>
                </TouchableOpacity>
            </View>

            <View className="flex flex-colum gap-y-[20px]">
                {/* Sound Button */}
                <View className="flex flex-row items-center gap-x-[12px] mx-auto">
                    <TouchableOpacity className="w-[40px] aspect-square">
                        <Speaker />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-[#dce1cd] h-[80px] w-[200px] rounded-full flex flex-row items-center justify-around px-[15px]">
                        <Text>Sound</Text>
                        <View className="w-[70px] aspect-square">
                            <Ear />
                        </View>
                        <Text>صدا</Text>
                    </TouchableOpacity>
                </View>
                {/* Name Button */}
                <View className="flex flex-row items-center gap-x-[12px] mx-auto">
                    <TouchableOpacity className="w-[40px] aspect-square">
                        <Speaker />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-[#dce1cd] h-[80px] w-[200px] rounded-full flex flex-row items-center justify-around px-[15px]">
                        <Text>Name</Text>
                        <View className="w-[45px] aspect-square">
                            <Nametag />
                        </View>
                        <Text>نام</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Switch through S,A,T,P,I,N */}
            <View className="flex flex-row items-center justify-around w-[100%] px-[10px]">
                {/* Map an array of letters in to buttons to toggle the selected letter*/}
                {["s", "a", "t", "p", "i", "n"].map((letter, index) => (
                    <View className="flex flex-column items-center gap-y-[5px]">
                        <View className="w-[20px] h-[20px]">    
                            <CheckMark />
                        </View>
                        <TouchableOpacity 
                            className="w-[42px] h-[42px]"
                            onPress={() => setSelectedLetter(letter)}
                        >
                            <SquareFrame active={letter==selectedLetter} />
                            <View className="absolute w-[42px] h-[42px] flex flex-row items-center justify-center">
                                <Text className="text-[30px] leading-[32px]">{letter}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    // </Screen>
    );
}
