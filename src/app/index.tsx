import { SafeAreaView, Text } from "@/ui";
import { Link } from "expo-router";

import React from "react";

const Home = () => {
  return (
    <SafeAreaView>
      <Text className="text-pink-500">Home</Text>
      <Link href={"/(level-one)/letter-introduction"}>
        <Text className="text-pink-500">Go to tabs</Text>
      </Link>
    </SafeAreaView>
  );
};

export default Home;
