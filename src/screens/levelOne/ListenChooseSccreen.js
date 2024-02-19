import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Pressable, Alert } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { Audio } from "expo-av";

import colors from "../../config/colors";
import Screen from "../../components/Screen";
import alphabetSound from "../../config/alphabetSound";
import ResultScreen from "../ResultScreen";

function ListenChooseSccreen(props) {
  const [letters, setLetters] = useState([]);
  const [correctLetter, setCorrectLetter] = useState("");
  const [chosenLetter, setChosenLetter] = useState("");
  const [randomNumber, setRandomNumber] = useState();
  const [sound, setSound] = useState();
  const [visibleReusltModal, setvisibleReusltModal] = useState(false);
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    generateLetters();
  }, []);

  const generateLetters = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    setRandomNumber(alphabet.indexOf(randomLetter));
    // Create an array of three letters, including one correct letter.
    const options = [randomLetter];
    while (options.length < 3) {
      const randomOption =
        alphabet[Math.floor(Math.random() * alphabet.length)];
      if (!options.includes(randomOption)) {
        options.push(randomOption);
      }
    }

    // Shuffle the options to randomize their order.
    options.sort(() => Math.random() - 0.5);

    setLetters(options);
    setCorrectLetter(randomLetter);
    setChosenLetter("");
  };

  const handleLetterPress = (letter) => {
    sound.unloadAsync();
    if (letter === correctLetter) {
      setAnimation(
        require("../../assets/animation/Animation - 1697908227812.json")
      );
      setvisibleReusltModal(true);
      setTimeout(() => {
        setvisibleReusltModal(false);
      }, 2300);
      generateLetters();
    } else {
      setAnimation(require("../../assets/animation/wrong-new.json"));
      setvisibleReusltModal(true);
      setTimeout(() => {
        setvisibleReusltModal(false);
      }, 2000);
      generateLetters();
    }
    setChosenLetter(letter);
  };

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      alphabetSound[randomNumber]
    );
    setSound(sound);
    await sound.playAsync();
    React.useEffect(() => {
      return sound
        ? () => {
            console.log("Unloading Sound");
            sound.unloadAsync();
          }
        : undefined;
    }, [sound]);
  }

  return (
    <Screen
      style={{ backgroundColor: colors.background }}
      className="flex-1 items-center w-full p-4"
    >
      <ResultScreen source={animation} visible={visibleReusltModal} />

      <Pressable onPress={() => playSound()}>
        <View
          className="rounded-full p-10 shadow-2xl shadow-black my-24"
          style={{ backgroundColor: colors.icons }}
        >
          <MaterialCommunityIcons name="ear-hearing" size={150} color="black" />
        </View>
      </Pressable>

      <View className="flex-row w-full justify-between items-center mb-24">
        {letters.map((letter, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleLetterPress(letter)}
          >
            <Text
              style={{
                borderWidth: 2,
                borderRadius: 3,
                borderColor: colors.border,
                margin: 5,
              }}
              className="font-semibold text-4xl px-8 py-4"
            >
              {letter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Pressable
        onPress={() => playSound()}
        className="w-full px-5 flex-row items-center mb-8"
      >
        <View
          style={{ backgroundColor: colors.icons }}
          className="rounded-full"
        >
          <Feather name="volume-2" size={30} color="black" />
        </View>
        <Text className="ml-2 font-semibold text-lg">Listen and select</Text>
      </Pressable>
      <Pressable
        onPress={() => playSound()}
        className="w-full px-5 flex-row items-center"
      >
        <View
          style={{ backgroundColor: colors.icons }}
          className="rounded-full"
        >
          <Feather name="volume-2" size={30} color="black" />
        </View>
        <Text className="ml-2 font-semibold text-lg">
          گوش کنید و انتخاب کنید
        </Text>
      </Pressable>
    </Screen>
  );
}

export default ListenChooseSccreen;
