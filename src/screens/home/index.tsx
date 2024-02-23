import { Button, Pressable, SafeAreaView, Text, View } from "@/ui";
import {
  DynamicModal,
  DynamicModalRefType,
} from "@/ui/core/modal/dynamic-modal";
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
                dynamicModalRef.current?.hideCoolestModal();
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
                secondDynamicModalRef.current?.hideCoolestModal();
              }}
              label="Close Second Dynamic Modal"
            />
          </View>
        </DynamicModal> */}

        {/* <Button
          onPress={() => {
            dynamicModalRef.current?.showCoolestModal();
          }}
          label="Open First Dynamic Modal"
        />

        <Button
          onPress={() => {
            secondDynamicModalRef.current?.showCoolestModal();
          }}
          label="Open Second Dynamic Modal"
        /> */}

        <Pressable
          onPress={() => {
            navigation.navigate("LevelOneTabNavigator", {
              screen: "Alphabet",
            });
          }}
        >
          <Text>Level One(Alphabet)</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;
