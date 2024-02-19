import { Pressable, SafeAreaView, Text, View } from "@/ui";
import { FocusAwareStatusBar } from "@/ui/focus-aware-status-bar";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <FocusAwareStatusBar />
      <Text>Home Screen</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("LevelOneTabNavigator", {
            screen: "Alphabet",
          });
        }}
      >
        <Text>Level One(Alphabet)</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("LevelThreeTabNavigator", {
            screen: "AudiblePicker",
          });
        }}
      >
        <Text>Level Three(Audio)</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("LevelThreeTabNavigator", {
            screen: "Alphabet",
          });
        }}
      >
        <Text>Level Three(Alphabet)</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("LevelThreeTabNavigator", {
            screen: "AudiblePicker",
          });
        }}
      >
        <Text>Level Three(Audio)</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("LevelFourTabNavigator", {
            screen: "Alphabet",
          });
        }}
      >
        <Text>Level Four(Alphabet)</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("LevelFourTabNavigator", {
            screen: "AudiblePicker",
          });
        }}
      >
        <Text>Level Four(Audio)</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
