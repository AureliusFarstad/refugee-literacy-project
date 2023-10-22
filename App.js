import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ListenChooseSccreen from "./app/screens/ListenChooseSccreen";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <ListenChooseSccreen />
      <StatusBar style="auto" />
    </View>
  );
}
