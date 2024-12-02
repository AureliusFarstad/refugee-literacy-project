import { Image } from "expo-image";
import React from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@/ui";
import Header from "@/ui/core/headers";

const FLASH_CARDS = [
  {
    id: "1",
    question: "What is the capital of France?",
    answer: "Paris",
    image:
      "https://plus.unsplash.com/premium_photo-1668772704261-b11d89a92bad?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    question: "What is the capital of Italy?",
    answer: "Rome",
    image:
      "https://plus.unsplash.com/premium_photo-1724249990837-f6dfcb7f3eaa?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const RegularContent = () => {
  return (
    <View style={regularContentStyles.card}>
      <Text style={regularContentStyles.text}>Regular content ✨</Text>
    </View>
  );
};

const regularContentStyles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#b6cff7",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#001a72",
  },
});

const FlippedContent = () => {
  return (
    <View style={flippedContentStyles.card}>
      <Text style={flippedContentStyles.text}>Flipped content 🚀</Text>
    </View>
  );
};

const flippedContentStyles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#baeee5",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#001a72",
  },
});

const FlipCard = ({
  isFlipped,
  cardStyle,
  direction = "y",
  duration = 500,
  RegularContent,
  FlippedContent,
}: {
  isFlipped: boolean;
  cardStyle: any;
  direction?: string;
  duration?: number;
  RegularContent: any;
  FlippedContent: any;
}) => {
  const isDirectionX = direction === "x";

  const regularCardAnimatedStyle = useAnimatedStyle(() => {
    // @ts-ignore
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [0, 180]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration });

    return {
      transform: [
        isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },
      ],
    };
  });

  const flippedCardAnimatedStyle = useAnimatedStyle(() => {
    // @ts-ignore
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [180, 360]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration });

    return {
      transform: [
        isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },
      ],
    };
  });

  return (
    <View>
      <Animated.View
        style={[
          flipCardStyles.regularCard,
          cardStyle,
          regularCardAnimatedStyle,
        ]}
      >
        {RegularContent}
      </Animated.View>
      <Animated.View
        style={[
          flipCardStyles.flippedCard,
          cardStyle,
          flippedCardAnimatedStyle,
        ]}
      >
        {FlippedContent}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  toggleButton: {
    backgroundColor: "#b58df1",
    padding: 12,
    borderRadius: 48,
  },
  toggleButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  flipCard: {
    width: 170,
    height: 200,
  },
});

const Flashcards = () => {
  const isFlipped = useSharedValue(false);

  const handlePress = () => {
    isFlipped.value = !isFlipped.value;
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F3EFF0",
      }}
    >
      <Header title="Flashcards" />

      <Text>Flashcards</Text>

      <FlatList
        data={FLASH_CARDS}
        renderItem={({ item }) => (
          <View className="m-4 bg-white p-4">
            <Image
              source={{ uri: item.image }}
              style={{
                width: "100%",
                height: 200,
                borderRadius: 8,
              }}
            />
            <View className="py-4">
              <Text>{item.question}</Text>
              <Text>{item.answer}</Text>
            </View>
            <Pressable style={styles.toggleButton} onPress={handlePress}>
              <Text style={styles.toggleButtonText}>Toggle card</Text>
            </Pressable>
            <FlipCard
              // @ts-ignore
              isFlipped={isFlipped}
              cardStyle={styles.flipCard}
              FlippedContent={<FlippedContent />}
              RegularContent={<RegularContent />}
            />
          </View>
        )}
        keyExtractor={(item) => item.question}
      />
    </SafeAreaView>
  );
};

export default Flashcards;

const flipCardStyles = StyleSheet.create({
  regularCard: {
    position: "absolute",
    zIndex: 1,
  },
  flippedCard: {
    backfaceVisibility: "hidden",
    zIndex: 2,
  },
});
