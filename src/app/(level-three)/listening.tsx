import type { AVPlaybackSource, AVPlaybackStatus } from "expo-av";
import { Audio } from "expo-av";
import type { Sound } from "expo-av/build/Audio";
import { MotiView } from "moti";
import type { ReactNode } from "react";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Slider } from "react-native-awesome-slider";
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import { useLevelStore } from "@/core/store/levels";
import { View } from "@/ui";
import ChatIndicator from "@/ui/components/chat-indicator";
import {
  FemaleEnglishAudioPlayedIcon,
  FemaleNativeAudioPlayedIcon,
  MaleEnglishAudioPlayedIcon,
  MaleNativeAudioPlayedIcon,
} from "@/ui/components/listening/icons";
import Header from "@/ui/core/headers";
import { PauseButton } from "@/ui/icons/circular/pause-button";
import { PlayButton } from "@/ui/icons/circular/play-button";
import { UserAvatar } from "@/ui/illustrations";
import { cn } from "@/utils/helpers";

type Message = {
  id: string;
  avatar: ReactNode;
  mediaType: "audio" | "video" | "chat";
  englishAudioResources: {
    gender: string;
    source: AVPlaybackSource;
  };
  nativeAudioResources: {
    gender: string;
    source: AVPlaybackSource;
    lang: string;
  };
};

const DATA: Message[] = [
  {
    id: "message-1",
    avatar: <UserAvatar gender="f" name="a" />,
    mediaType: "audio",
    englishAudioResources: {
      gender: "F",
      source: require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_female.mp3"),
    },

    nativeAudioResources: {
      gender: "F",
      lang: "fr",
      source: require("assets/multilingual-audio/farsi/conversations/how_are_you/conversation1_how_are_you_partA_female.mp3"),
    },
  },
  {
    id: "message-2",
    avatar: <UserAvatar gender="m" name="b" />,
    mediaType: "audio",
    englishAudioResources: {
      gender: "M",
      source: require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partB_male.mp3"),
    },
    nativeAudioResources: {
      gender: "M",
      lang: "fr",
      source: require("assets/multilingual-audio/farsi/conversations/how_are_you/conversation1_how_are_you_partB_male.mp3"),
    },
  },
  {
    id: "message-3",
    avatar: <UserAvatar gender="f" name="a" />,
    mediaType: "audio",
    englishAudioResources: {
      gender: "F",
      source: require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partC_female.mp3"),
    },
    nativeAudioResources: {
      gender: "F",
      lang: "fr",
      source: require("assets/multilingual-audio/farsi/conversations/how_are_you/conversation1_how_are_you_partC_female.mp3"),
    },
  },
  {
    id: "message-4",
    avatar: <UserAvatar gender="m" name="b" />,
    mediaType: "audio",
    englishAudioResources: {
      gender: "M",
      source: require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partD_male.mp3"),
    },
    nativeAudioResources: {
      gender: "M",
      lang: "fr",
      source: require("assets/multilingual-audio/farsi/conversations/how_are_you/conversation1_how_are_you_partD_male.mp3"),
    },
  },
];

const ItemSeparator = () => <View className="h-4 bg-[#F2EFF0]" />;

// Animated Audio Button Component
type AnimatedAudioButtonProps = {
  onPress: () => void;
  icon: ReactNode;
  isPlaying?: boolean;
  width?: number;
  height?: number;
  borderColor?: string;
  borderWidth?: number;
  breatheDuration?: number;
  className?: string;
};

function AnimatedAudioButton({
  onPress,
  icon,
  isPlaying = false,
  width = 40,
  height = 40,
  borderColor = "#F69F4E",
  borderWidth = 2,
  breatheDuration = 2000,
  className,
}: AnimatedAudioButtonProps) {
  const borderOpacity = useSharedValue(0);

  useEffect(() => {
    if (isPlaying) {
      startBreathingAnimation();
    } else {
      stopAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      cancelAnimation(borderOpacity);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stopAnimation = () => {
    cancelAnimation(borderOpacity);
    borderOpacity.value = withTiming(0, { duration: 300 });
  };

  const startBreathingAnimation = () => {
    borderOpacity.value = withSequence(
      withTiming(0.6, { duration: breatheDuration / 2, easing: Easing.ease }),
      withRepeat(
        withSequence(
          withTiming(1, { duration: breatheDuration / 2, easing: Easing.ease }),
          withTiming(0.6, {
            duration: breatheDuration / 2,
            easing: Easing.ease,
          }),
        ),
        -1,
      ),
    );
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: borderOpacity.value,
  }));

  return (
    <TouchableOpacity
      style={[styles.animatedButtonContainer]}
      onPress={onPress}
      className={className}
    >
      <Animated.View
        style={[
          styles.animatedBorder,
          {
            borderColor,
            borderWidth,
            width: width + borderWidth * 2,
            height: height + borderWidth * 2,
            borderRadius: (width + borderWidth * 2) / 2,
          },
          animatedStyle,
        ]}
      />
      <View
        style={[
          styles.animatedButton,
          { width, height, borderRadius: width / 2 },
        ]}
      >
        {icon}
      </View>
    </TouchableOpacity>
  );
}

type PlayingAudio = {
  rowIndex: number;
  type: "english" | "native" | "none";
};

type AudioControlsProps = {
  onPlayEnglish: () => void;
  onPlayNative: () => void;
  item: Message;
  conversationComplete: boolean;
  isPlayingEnglish?: boolean;
  isPlayingNative?: boolean;
};

function AudioControls({
  onPlayEnglish,
  onPlayNative,
  item,
  conversationComplete,
  isPlayingEnglish = false,
  isPlayingNative = false,
}: AudioControlsProps) {
  const englishBorderColor =
    item?.englishAudioResources.gender === "F" ? "#FBD65B" : "#F69F4E";
  const nativeBorderColor =
    item?.nativeAudioResources.gender === "F" ? "#FBD65B" : "#F69F4E";

  return (
    <MotiView
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(
        "flex h-[72px] flex-row items-center rounded-lg border-2 border-[#D9D9D966] bg-[#EDEDED] px-6 py-4 relative",
        {
          "bg-white border-[#FBD65B]": conversationComplete,
          "border-[#F69F4E]":
            item?.englishAudioResources.gender === "M" && conversationComplete,
        },
      )}
    >
      <AnimatedAudioButton
        onPress={onPlayEnglish}
        isPlaying={isPlayingEnglish}
        borderColor={englishBorderColor}
        className="flex size-[40] flex-row items-center justify-center rounded-full"
        icon={
          item?.englishAudioResources?.gender === "F" ? (
            <FemaleEnglishAudioPlayedIcon isPlaying={!conversationComplete} />
          ) : (
            <MaleEnglishAudioPlayedIcon isPlaying={!conversationComplete} />
          )
        }
      />

      <View className="w-2.5" />

      <AnimatedAudioButton
        onPress={onPlayNative}
        isPlaying={isPlayingNative}
        borderColor={nativeBorderColor}
        className="flex size-[40] flex-row items-center justify-center rounded-full"
        icon={
          item?.nativeAudioResources?.gender === "F" ? (
            <FemaleNativeAudioPlayedIcon isPlaying={!conversationComplete} />
          ) : (
            <MaleNativeAudioPlayedIcon isPlaying={!conversationComplete} />
          )
        }
      />
    </MotiView>
  );
}

type ActiveRow = {
  number: number;
  step: "avatar" | "chat-indicator" | "audio-controls" | "complete";
  rowsAnimated?: number[];
};

type MessageRowProps = {
  item: Message;
  index: number;
  activeRow: ActiveRow;
  playAudio: (
    source: AVPlaybackSource,
    rowIndex: number,
    type: "english" | "native",
  ) => Promise<void>;
  playingAudio: PlayingAudio;
};

function MessageRow({
  item,
  index,
  activeRow,
  playAudio,
  playingAudio,
}: MessageRowProps) {
  const isEven = index % 2 === 0;
  const isActive = activeRow.number === index;
  const isAnimated = activeRow.rowsAnimated?.includes(index);
  const conversationComplete = activeRow.step === "complete";

  // Only set conversationComplete to true for an item when the entire conversation is complete
  const isItemComplete = conversationComplete;

  // Determine if audio is playing for this specific row
  const isPlayingEnglish =
    playingAudio.rowIndex === index && playingAudio.type === "english";
  const isPlayingNative =
    playingAudio.rowIndex === index && playingAudio.type === "native";

  const renderContent = () => {
    if (isAnimated || (conversationComplete && index === DATA.length - 1)) {
      return (
        <View className="flex h-[72] flex-row items-end justify-end ">
          {isEven && <View className="mr-4">{item.avatar}</View>}
          <AudioControls
            item={item}
            conversationComplete={isItemComplete}
            isPlayingEnglish={isPlayingEnglish}
            isPlayingNative={isPlayingNative}
            onPlayEnglish={() =>
              playAudio(item.englishAudioResources.source, index, "english")
            }
            onPlayNative={() =>
              playAudio(item.nativeAudioResources.source, index, "native")
            }
          />
          {!isEven && <View className="ml-4">{item.avatar}</View>}
        </View>
      );
    }

    if (isActive) {
      switch (activeRow.step) {
        case "avatar":
          return (
            <View className="flex h-[72] flex-row items-end justify-end">
              <View className={isEven ? "mr-4" : "ml-4"}>{item.avatar}</View>
            </View>
          );
        case "chat-indicator":
          return (
            <View className="flex h-[72] flex-row items-end justify-end">
              {isEven && <View className="mr-4">{item.avatar}</View>}
              <View className="flex h-10 flex-row items-center justify-center">
                <ChatIndicator />
              </View>
              {!isEven && <View className="ml-4">{item.avatar}</View>}
            </View>
          );
        case "audio-controls":
        case "complete":
          return (
            <View className="flex h-[72] flex-row items-end justify-end">
              {isEven && <View className="mr-4">{item.avatar}</View>}
              <AudioControls
                item={item}
                conversationComplete={isItemComplete}
                isPlayingEnglish={isPlayingEnglish}
                isPlayingNative={isPlayingNative}
                onPlayEnglish={() =>
                  playAudio(item.englishAudioResources.source, index, "english")
                }
                onPlayNative={() =>
                  playAudio(item.nativeAudioResources.source, index, "native")
                }
              />
              {!isEven && <View className="ml-4">{item.avatar}</View>}
            </View>
          );
      }
    }

    return null;
  };

  return (
    <View
      className={cn("p-4", {
        "flex flex-row": isEven,
        "flex flex-row justify-end": !isEven,
      })}
    >
      <View className="flex h-[80px] flex-row items-center">
        {renderContent()}
      </View>
    </View>
  );
}

function Listening() {
  const { levels: _levels } = useLevelStore();
  const [sound, setSound] = useState<Sound>();
  const [status, setStatus] = useState<
    AVPlaybackStatus & {
      isLoaded: boolean;
      isPlaying: boolean;
      isBuffering: boolean;
      didJustFinish: boolean;
    }
  >({
    isLoaded: false,
    isPlaying: false,
    isBuffering: false,
    didJustFinish: false,
  });

  const [playingAudio, setPlayingAudio] = useState<PlayingAudio>({
    rowIndex: -1,
    type: "none",
  });

  const [activeRow, setActiveRow] = useState<ActiveRow>({
    number: 0,
    step: "avatar",
    rowsAnimated: [],
  });

  const [isSliding, setIsSliding] = useState(false);

  const progressValue = useSharedValue(activeRow.number);
  const min = useSharedValue(0);
  const max = useSharedValue(DATA.length - 1);

  const onPlaybackStatusUpdate = useCallback(
    (playbackStatus: AVPlaybackStatus) => {
      if (!playbackStatus.isLoaded) {
        if (playbackStatus.error) {
          console.log(
            `Encountered a fatal error during playback: ${playbackStatus.error}`,
          );
        }
      } else {
        setStatus(playbackStatus as any);

        // Clear playing state when audio finishes
        if (playbackStatus.didJustFinish) {
          setPlayingAudio({ rowIndex: -1, type: "none" });
        }
      }
    },
    [],
  );

  // Modified to handle custom audio playback
  const playAudio = async (
    source: AVPlaybackSource,
    rowIndex: number,
    type: "english" | "native",
  ) => {
    try {
      // Stop existing audio if playing
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
      }

      // Update playing state
      setPlayingAudio({ rowIndex, type });

      // Play the new audio
      const { sound: newSound } = await Audio.Sound.createAsync(
        source,
        {},
        onPlaybackStatusUpdate,
      );

      setSound(newSound);
      await newSound.playAsync();

      return Promise.resolve();
    } catch (error) {
      console.error("Error playing audio:", error);
      setPlayingAudio({ rowIndex: -1, type: "none" });
      return Promise.reject(error);
    }
  };

  const playSound = useCallback(
    async (currentActiveNumber: number) => {
      try {
        if (currentActiveNumber >= DATA.length) {
          console.log("Reached the end of messages");
          return;
        }

        console.log(`Playing audio for row: ${currentActiveNumber}`);
        const currentRowAudio = DATA[currentActiveNumber];

        // Use the enhanced playAudio function
        await playAudio(
          currentRowAudio.englishAudioResources.source,
          currentActiveNumber,
          "english",
        );
      } catch (error) {
        console.error("Error in playSound:", error);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onPlaybackStatusUpdate],
  );

  const _initializeTimeline = useCallback(() => {
    console.log("Initializing timeline");
    setActiveRow({
      number: 0,
      step: "avatar",
      rowsAnimated: [],
    });
  }, []);

  const moveToNextStep = useCallback(() => {
    setActiveRow((prev) => {
      if (prev.step === "avatar") {
        return { ...prev, step: "chat-indicator" };
      } else if (prev.step === "chat-indicator") {
        return { ...prev, step: "audio-controls" };
      } else if (prev.step === "audio-controls") {
        const nextNumber = prev.number + 1;
        if (nextNumber >= DATA.length) {
          console.log("Reached the end of messages");
          // Mark the conversation as complete and add the last message to rowsAnimated
          return {
            ...prev,
            step: "complete",
            rowsAnimated: [...(prev.rowsAnimated || []), prev.number],
          };
        }
        return {
          number: nextNumber,
          step: "avatar",
          rowsAnimated: [...(prev.rowsAnimated || []), prev.number],
        };
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    if (activeRow.step === "avatar" || activeRow.step === "chat-indicator") {
      const timer = setTimeout(moveToNextStep, 2000);
      return () => clearTimeout(timer);
    } else if (activeRow.step === "audio-controls") {
      playSound(activeRow.number).catch((error) =>
        console.error("Error playing sound:", error),
      );
    }
  }, [activeRow.step, activeRow.number, playSound, moveToNextStep]);

  useEffect(() => {
    if (status.didJustFinish) {
      moveToNextStep();
    }
  }, [status.didJustFinish, moveToNextStep]);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    progressValue.value = activeRow.number;
  }, [activeRow.number, progressValue]);

  const handleSliderChange = async (value: number) => {
    const newIndex = Math.round(value);

    // Stop current audio if playing
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();

      // Clear playing state
      setPlayingAudio({ rowIndex: -1, type: "none" });
    }

    // Update active row state
    setActiveRow({
      number: newIndex,
      step: "audio-controls",
      rowsAnimated: Array.from({ length: newIndex }, (_, i) => i),
    });

    // Play audio for the new position
    playSound(newIndex);
  };

  const handleReplay = async () => {
    // If conversation is complete or not active, restart
    if (activeRow.step === "complete" || !isConversationActive()) {
      // Stop current audio if playing
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
      }

      // Reset all states
      setActiveRow({
        number: 0,
        step: "avatar",
        rowsAnimated: [],
      });

      // Clear playing state
      setPlayingAudio({ rowIndex: -1, type: "none" });

      progressValue.value = 0;
      setIsSliding(false);
      setStatus({
        isLoaded: false,
        isPlaying: false,
        isBuffering: false,
        didJustFinish: false,
      });
    } else {
      // If conversation is active, pause it
      if (sound && status.isPlaying) {
        await sound.pauseAsync();

        // Clear playing state
        setPlayingAudio({ rowIndex: -1, type: "none" });
      }
    }
  };

  useEffect(() => {
    if (!isSliding) {
      progressValue.value = activeRow.number;
    }
  }, [activeRow.number, progressValue, isSliding]);

  const isConversationActive = () => {
    // Check if conversation is complete
    if (activeRow.step === "complete") {
      return false;
    }

    // Check if the conversation is in a playing state
    const isPlaying = status.isLoaded && status.isPlaying;

    // Check if we're in an active step
    const isActiveStep =
      activeRow.step === "avatar" ||
      activeRow.step === "chat-indicator" ||
      (activeRow.step === "audio-controls" && !status.didJustFinish);

    return isPlaying || isActiveStep;
  };

  const conversationActive = isConversationActive();

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <Header title="Sound" />
      <View className="flex h-20 flex-row items-center bg-[#F2EFF0] px-4">
        <TouchableOpacity
          onPress={handleReplay}
          className="mr-2 flex items-center justify-center"
        >
          <View className="flex size-12 items-center justify-center rounded-full bg-yellow-400">
            {conversationActive ? (
              <PauseButton
                backgroundColor="#F9C720"
                offblackColor="#000000"
                offwhiteColor="#FFFFFF"
                primaryColor="#F9C720"
                secondaryColor="#FAECBB"
              />
            ) : (
              <PlayButton
                backgroundColor="#F9C720"
                offblackColor="#000000"
                offwhiteColor="#FFFFFF"
                primaryColor="#F9C720"
                secondaryColor="#FAECBB"
              />
            )}
          </View>
        </TouchableOpacity>
        <Slider
          style={{
            height: 40,
          }}
          theme={{
            bubbleTextColor: "#F9C720",
            minimumTrackTintColor: "#F9C720",
            maximumTrackTintColor: "#FAE8AB",
            bubbleBackgroundColor: "#ffffff",
          }}
          progress={progressValue}
          minimumValue={min}
          maximumValue={max}
          onSlidingStart={() => setIsSliding(true)}
          onSlidingComplete={(value) => {
            setIsSliding(false);
            handleSliderChange(value);
          }}
        />
      </View>

      <View className="flex-1 bg-[#F2EFF0]">
        <FlatList
          data={DATA}
          renderItem={({ item, index }) => (
            <MessageRow
              item={item}
              index={index}
              activeRow={activeRow}
              playAudio={playAudio}
              playingAudio={playingAudio}
            />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={ItemSeparator}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </SafeAreaView>
  );
}

export default Listening;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    backgroundColor: "#F2EFF0",
  },
  flatListContent: {
    flexGrow: 1,
    paddingBottom: 0,
    backgroundColor: "#F2EFF0",
  },
  animatedButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  animatedBorder: {
    position: "absolute",
    borderStyle: "solid",
  },
  animatedButton: {
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
