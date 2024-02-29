import { Pressable, SafeAreaView, Text, View } from "@/ui";
import { FocusAwareStatusBar } from "@/ui/focus-aware-status-bar";
import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";

const Home = () => {
  const navigation = useNavigation();

  const dynamicModalRef = useRef<DynamicModalRefType>(null);
  const secondDynamicModalRef = useRef<DynamicModalRefType>(null);

  return (
    <SafeAreaView>
      <FocusAwareStatusBar />
      <View className="px-4">
        <Text>Home Screen</Text>

        {/* <DynamicModal ref={dynamicModalRef}>
          <View className="bg-white p-4 rounded-xl">
            <Button
              onPress={() => {
                dynamicModalRef.current?.hideDynamicModal();
              }}
              label="Close Dynamic Modal"
            ></Button>
            <Text className="">Close first Dynamic modal</Text>
          </View>
        </DynamicModal>

        <DynamicModal ref={secondDynamicModalRef}>
          <View className="bg-white p-4 rounded-xl">
            <Text className="">
              Dynamic modal second Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Similique, reprehenderit tenetur porro ad alias
              exercitationem, optio commodi pariatur eius placeat ut saepe quasi
              dignissimos commodi in.
            </Text>
            <Button
              onPress={() => {
                secondDynamicModalRef.current?.hideDynamicModal();
              }}
              label="Close Second Dynamic Modal"
            />
          </View>
        </DynamicModal> */}

        {/* <Button
          onPress={() => {
            dynamicModalRef.current?.showDynamicModal();
          }}
          label="Open First Dynamic Modal"
        />

        <Button
          onPress={() => {
            secondDynamicModalRef.current?.showDynamicModal();
          }}
          label="Open Second Dynamic Modal"
        /> */}

        <Pressable
          onPress={() => {
            navigation.navigate("LevelOneTabNavigator", {
              screen: "LetterIntroduction",
            });
          }}
        >
          <Text>Level One(LetterIntroduction)</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;
