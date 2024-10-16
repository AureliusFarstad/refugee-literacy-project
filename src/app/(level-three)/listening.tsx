import clsx from "clsx";
import type { AVPlaybackSource, AVPlaybackStatus } from "expo-av";
import { Audio } from "expo-av";
import type { Sound } from "expo-av/build/Audio";
import { MotiView } from "moti";
import type { ReactNode } from "react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";

import useSound from "@/core/hooks/useSound";
import { useLevelStore } from "@/core/store/levels";
import { SafeAreaView, Text, View } from "@/ui";
import ChatIndicator from "@/ui/components/chat-indicator";
import Header from "@/ui/core/headers";
import { DynamicModal } from "@/ui/core/modal/dynamic-modal";
import { EarIcon, EnSpeakerIcon, NativeSpeakerIcon } from "@/ui/icons";
import { UserAvatar } from "@/ui/illustrations";

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
      source: require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA.mp3"),
    },
    nativeAudioResources: {
      gender: "F",
      lang: "fr",
      source:
        "https://res.cloudinary.com/vanilajs/video/upload/v1725950496/app/ssvypcjumxp0fpvibog6.mp3",
    },
  },
  {
    id: "message-2",
    avatar: <UserAvatar gender="m" name="b" />,
    mediaType: "audio",
    englishAudioResources: {
      gender: "M",
      source: require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partB.mp3"),
    },
    nativeAudioResources: {
      gender: "M",
      lang: "fr",
      source:
        "https://res.cloudinary.com/vanilajs/video/upload/v1726104200/app/crss2fxhx0oxymlmtews.mp3",
    },
  },
  {
    id: "message-3",
    avatar: <UserAvatar gender="f" name="a" />,
    mediaType: "audio",
    englishAudioResources: {
      gender: "F",
      source: require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partC.mp3"),
    },
    nativeAudioResources: {
      gender: "F",
      lang: "fr",
      source:
        "https://res.cloudinary.com/vanilajs/video/upload/v1726104210/app/new_female_audio_message_fr.mp3",
    },
  },
  {
    id: "message-4",
    avatar: <UserAvatar gender="m" name="b" />,
    mediaType: "audio",
    englishAudioResources: {
      gender: "M",
      source: require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partD.mp3"),
    },
    nativeAudioResources: {
      gender: "M",
      lang: "fr",
      source: require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA.mp3"),
    },
  },
];

const ItemSeparator = () => <View className="h-4" />;

type AudioButtonProps = {
  onPress: () => void;
  icon: ReactNode;
};

function AudioButton({ onPress, icon }: AudioButtonProps) {
  return (
    <TouchableOpacity
      className="flex size-[40] flex-row items-center justify-center rounded-full bg-[#9E9E9E]"
      onPress={onPress}
    >
      {icon}
    </TouchableOpacity>
  );
}

type AudioControlsProps = {
  onPlayEnglish: () => void;
  onPlayNative: () => void;
};

function AudioControls({ onPlayEnglish, onPlayNative }: AudioControlsProps) {
  return (
    <MotiView
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-[72px] flex-row items-center rounded-lg border border-[#FAFAFA] bg-[#D9D9D9] px-6 py-4"
    >
      <AudioButton onPress={onPlayEnglish} icon={<EnSpeakerIcon />} />
      <View className="w-2.5" />
      <AudioButton onPress={onPlayNative} icon={<NativeSpeakerIcon />} />
    </MotiView>
  );
}

type ActiveRow = {
  number: number;
  step: "avatar" | "chat-indicator" | "audio-controls";
  rowsAnimated?: number[];
};

type MessageRowProps = {
  item: Message;
  index: number;
  activeRow: ActiveRow;
  playEnglishAudio: (source: AVPlaybackSource) => Promise<void>;
  playNativeAudio: (source: AVPlaybackSource) => Promise<void>;
};

function MessageRow({
  item,
  index,
  activeRow,
  playEnglishAudio,
  playNativeAudio,
}: MessageRowProps) {
  const isEven = index % 2 === 0;
  const isActive = activeRow.number === index;
  const isAnimated = activeRow.rowsAnimated?.includes(index);

  const renderContent = () => {
    if (isAnimated) {
      return (
        <View className="flex h-[72] flex-row items-end justify-end">
          {isEven && <View className="mr-4">{item.avatar}</View>}
          <AudioControls
            onPlayEnglish={() =>
              playEnglishAudio(item.englishAudioResources.source)
            }
            onPlayNative={() =>
              playNativeAudio(item.nativeAudioResources.source)
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
          return (
            <View className="flex h-[72] flex-row items-end justify-end">
              {isEven && <View className="mr-4  ">{item.avatar}</View>}
              <AudioControls
                onPlayEnglish={() =>
                  playEnglishAudio(item.englishAudioResources.source)
                }
                onPlayNative={() =>
                  playNativeAudio(item.nativeAudioResources.source)
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
      className={clsx("p-4", {
        "flex flex-row": isEven,
        "flex flex-row justify-end": !isEven,
      })}
    >
      <View className="flex h-[80px] flex-row items-center ">
        {renderContent()}
      </View>
    </View>
  );
}

function Listening() {
  const dynamicModalRef = useRef<DynamicModalRefType>(null);
  const { levels: _levels } = useLevelStore();
  const [sound, setSound] = useState<Sound>();
  const [status, setStatus] = useState<AudioPlayerStatus>({
    isLoaded: false,
    isPlaying: false,
    isBuffering: false,
    didJustFinish: false,
  });

  const { playSound: playAudio } = useSound();

  const [activeRow, setActiveRow] = useState<ActiveRow>({
    number: 0,
    step: "avatar",
    rowsAnimated: [],
  });

  const onPlaybackStatusUpdate = useCallback(
    (playbackStatus: AVPlaybackStatus) => {
      if (!playbackStatus.isLoaded) {
        if (playbackStatus.error) {
          console.log(
            `Encountered a fatal error during playback: ${playbackStatus.error}`,
          );
        }
      } else {
        setStatus(playbackStatus);
      }
    },
    [],
  );

  const playSound = useCallback(
    async (currentActiveNumber: number) => {
      try {
        if (currentActiveNumber >= DATA.length) {
          console.log("Reached the end of messages");
          return;
        }

        console.log(`Playing audio for row: ${currentActiveNumber}`);
        const currentRowAudio = DATA[currentActiveNumber];
        console.log(
          "Attempting to play audio:",
          currentRowAudio.englishAudioResources.source,
        );

        const { sound: soundResponse } = await Audio.Sound.createAsync(
          currentRowAudio.englishAudioResources.source,
          {},
          onPlaybackStatusUpdate,
        );
        if (soundResponse) {
          setSound(soundResponse);
          console.log("Sound loaded successfully");
        }
        console.log("Playing Sound");
        await soundResponse.playAsync();
      } catch (error) {
        console.error("Error in playSound:", error);
      }
    },
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
          return prev;
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

  console.log({ activeRow });

  const playEnglishAudio = async (audioSource: AVPlaybackSource) => {
    try {
      await playAudio(audioSource);
    } catch (error) {
      console.log("error in playEnglishAudio", error);
      throw error;
    }
  };

  const playNativeAudio = async (audioSource: AVPlaybackSource) => {
    try {
      await playAudio({
        uri: audioSource as unknown as string,
      });
    } catch (error) {
      console.log("error in playNativeAudio", error);
      throw error;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Sound" modalRef={dynamicModalRef} />
      <View className=" bg-[#F0F0F0]" style={styles.listContainer}>
        <FlatList
          className=""
          data={DATA}
          renderItem={({ item, index }) => (
            <MessageRow
              item={item}
              index={index}
              activeRow={activeRow}
              playEnglishAudio={playEnglishAudio}
              playNativeAudio={playNativeAudio}
            />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={ItemSeparator}
        />
        <DynamicModal ref={dynamicModalRef}>
          <View className="rounded-lg bg-white p-4">
            <Text>Letter sound activity</Text>
            <View className="flex h-[72] items-center justify-center">
              <EarIcon />
            </View>
            <Text className="mt-4">
              Start your language learning adventure. Let A, B, C, and D be the
              building blocks of your multilingual journey!
            </Text>
          </View>
        </DynamicModal>
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
    backgroundColor: "#F0F0F0",
  },
  flatListContent: {
    flexGrow: 1,
  },
});
