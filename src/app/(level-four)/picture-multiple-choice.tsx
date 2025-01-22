import { Image } from "expo-image";
import { MicrophoneIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text, View } from "@/ui";
import Header from "@/ui/core/headers";

const OPTION = {
  id: "",
  audio: "",
  options: [
    {
      image:
        "https://images.unsplash.com/photo-1593183230686-69876b0cb240?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523304108042-8ac30850c748?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

const PictureMultipleChoice = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F3EFF0",
      }}
    >
      <Header title="Picture multiple choice" />
      <Text className="mx-4">Picture multiple choice</Text>
      <View className="m-4 bg-white p-4">
        <View className="flex flex-row items-center justify-center">
          <MicrophoneIcon />
        </View>
        <View className="mt-10 flex flex-row items-center justify-evenly">
          {OPTION.options.map((option, index) => (
            <View key={index} className="flex flex-col">
              <View className="overflow-hidden rounded-lg">
                <Image
                  source={{ uri: option.image }}
                  style={{
                    width: 80,
                    height: 80,
                  }}
                />
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PictureMultipleChoice;
