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
          navigation.navigate("LevelOneTabNavigator", {
            screen: "AudiblePicker",
          });
        }}
      >
        <Text>Level Two(Audio)</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("LevelTwoTabNavigator", {
            screen: "Alphabet",
          });
        }}
      >
        <Text>Level Two(Alphabet)</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("LevelTwoTabNavigator", {
            screen: "AudiblePicker",
          });
        }}
      >
        <Text>Level Two(Audio)</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
