import clsx from "clsx";
import type { AVPlaybackSource } from "expo-av";
import { Audio } from "expo-av";
import type { Sound } from "expo-av/build/Audio";
import React, { useEffect, useRef, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Line } from "react-native-svg";

import { APP_COLORS } from "@/constants/routes";
import { MS_300 } from "@/constants/timing";
import { useGuideAudio } from "@/core/hooks/useGuideAudio";
import { useLevelStore } from "@/core/store/levels";
import { Pressable, SafeAreaView, Text, View } from "@/ui";
import AnimatedLetterComponent from "@/ui/components/home/animated-letter-component";
import GuidanceAudioHeader from "@/ui/core/headers/guidance-audio";
import { EarButton } from "@/ui/icons/circular/ear-button";
import { NameButton } from "@/ui/icons/circular/name-button";
import { PencilButton } from "@/ui/icons/circular/pencil-button";
import { HEIGHT, IS_IOS, WIDTH } from "@/utils/layout";

type AnimatedLetterComponentRef = {
  animateLowercase: () => void;
  animateUppercase: () => void;
};

const PageLinesSVG = () => {
  return (
    <View className="overflow-hidden">
      <Svg
        width={WIDTH - 16}
        height="320"
        viewBox={`0 0 ${WIDTH - 16} 143`}
        fill="none"
      >
        <Line
          x1="-9.00391"
          y1="141.295"
          x2={WIDTH - 16}
          y2="141.295"
          stroke="#E4E4E7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="8 8"
        />
        <Line
          x1="-10.0039"
          y1="96.8115"
          x2={WIDTH - 16}
          y2="96.8115"
          stroke="#E4E4E7"
          strokeWidth="2"
        />
        <Line
          x1="-9.00391"
          y1="46.3955"
          x2={WIDTH - 16}
          y2="46.3955"
          stroke="#E4E4E7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="8 8"
        />
        <Line
          x1="-10.0039"
          y1="1.91113"
          x2={WIDTH - 16}
          y2="1.91113"
          stroke="#E4E4E7"
          strokeWidth="2"
        />
      </Svg>
    </View>
  );
};

const LetterIntroduction = () => {
  const { levels, updateLevels } = useLevelStore();
  const [sound, setSound] = useState<Sound>();

  const insets = useSafeAreaInsets();

  const [isAnimating, setIsAnimating] = useState(false);
  const onAnimationStart = () => {
    setIsAnimating(true);
  };

  const { playGuideAudio, isPlaying } = useGuideAudio({
    screenName: "letter-introduction",
  });

  // const [isUpdatingSession, setIsUpdatingSession] = useState(false);
  // const [tappedAnswer, setTappedAnswer] = useState<IOption>();

  const [activeActivity, setActiveActivity] = useState(
    levels[0].modules[0].sections[0].activities[0],
  );

  const animatedLetterRef = useRef<AnimatedLetterComponentRef | null>(null);

  const activitiesInCurrentSection =
    levels[0].modules[0].sections[0].activities;

  const playSound = async (playbackSource: AVPlaybackSource) => {
    try {
      const { sound: soundResponse } =
        await Audio.Sound.createAsync(playbackSource);
      if (soundResponse) {
        setSound(soundResponse);
      }
      await soundResponse.playAsync();
    } catch (error) {
      console.log("error in playSound", error);
      throw error;
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound, activeActivity]);

  const incrementProgress = (
    type:
      | "PHONETIC_SOUND"
      | "ALPHABETIC_SOUND"
      | "UPPERCASE_LETTER"
      | "LOWERCASE_LETTER",
  ) => {
    const _updatedLevels = levels.map((level: ILevel) => {
      if (level.id !== levels[0].id) return level;

      const _updatedModules = level.modules.map((sublevel) => {
        if (sublevel.id !== levels[0].modules[0].id) return sublevel;

        const _updatedSections = sublevel.sections.map((section: ISection) => {
          if (section.id !== levels[0].modules[0].sections[0].id)
            return section;

          const _updatedActivities = section.activities.map(
            (activity: IActivity) => {
              if (activity.id !== activeActivity.id) return activity;
              const updatedProgress = {
                ...activity.progress,
              } as ILetterIntroductionProgress;
              if (type === "ALPHABETIC_SOUND") {
                updatedProgress.alphabeticSoundPlayCount += 1;
              } else if (type === "PHONETIC_SOUND") {
                updatedProgress.phoneticSoundPlayCount += 1;
              } else if (type === "UPPERCASE_LETTER") {
                updatedProgress.uppercaseReadCount += 1;
              } else if (type === "LOWERCASE_LETTER") {
                updatedProgress.lowercaseReadCount += 1;
              }
              return {
                ...activity,
                progress: {
                  ...updatedProgress,
                },
              };
            },
          );

          return {
            ...section,
            activities: _updatedActivities,
          };
        });

        return {
          ...sublevel,
          sections: _updatedSections,
        };
      });

      return {
        ...level,
        modules: _updatedModules,
      };
    });
    updateLevels(_updatedLevels);

    setTimeout(() => {
      const updatedActiveActivity =
        levels[0].modules[0].sections[0].activities.find(
          (activity) => activity.id === activeActivity.id,
        );
      if (updatedActiveActivity) {
        setActiveActivity(updatedActiveActivity);
      }
    }, MS_300);
  };

  const onAnimationComplete = (letter: string) => {
    setIsAnimating(false);
    if (letter === activeActivity.letter.upperCase) {
      incrementProgress("UPPERCASE_LETTER");
    } else if (letter === activeActivity.letter.lowerCase) {
      incrementProgress("LOWERCASE_LETTER");
      console.log("animation completed");
    }
  };

  useEffect(() => {
    const isCompleted = activitiesInCurrentSection.every((activity) => {
      if (!activity.progress) return false;
      return Object.values(activity.progress).every((count) => count >= 1);
    });
    if (isCompleted) {
      Alert.alert("Done");
    }
  }, [activitiesInCurrentSection, levels]);

  return (
    <SafeAreaView className="bg-[#FAFAFA]">
      <GuidanceAudioHeader
        title="Sound"
        isPlaying={isPlaying}
        onPressGuide={playGuideAudio}
        showLetterCaseSwitch={false}
      />
      <View
        className="flex flex-col justify-between"
        style={{
          height:
            HEIGHT - (insets.bottom + insets.top + 90 + (IS_IOS ? 96 : 112)),
          backgroundColor: APP_COLORS.backgroundgrey,
        }}
      >
        <View>
          <View className=" border-yellow-500 ">
            <View className="mx-4  overflow-hidden rounded-xl border-2 border-purple-500 bg-white ">
              <View className="mt-4 flex items-center justify-center ">
                <View className="flex flex-row rounded-full p-4">
                  <TouchableOpacity
                    onPress={async () => {
                      try {
                        await playSound(
                          activeActivity.sound.alphabeticAudioSrc,
                        );
                        incrementProgress("ALPHABETIC_SOUND");
                      } catch (error) {}
                    }}
                    className="mr-4 flex size-[80] items-center justify-center rounded-full bg-colors-purple-500"
                  >
                    <NameButton
                      backgroundColor="#C385F8"
                      offblackColor="#000000"
                      offwhiteColor="#FFFFFF"
                      primaryColor="#C385F8"
                      secondaryColor="#FFFFFF"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={async () => {
                      try {
                        await playSound(activeActivity.sound.phoneticAudioSrc);
                        incrementProgress("PHONETIC_SOUND");
                      } catch (error) {}
                    }}
                    className=" flex size-[80] items-center justify-center rounded-full bg-colors-purple-500"
                  >
                    <EarButton
                      backgroundColor="#C385F8"
                      offblackColor="#000000"
                      offwhiteColor="#FFFFFF"
                      primaryColor="#C385F8"
                      secondaryColor="#FFFFFF"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <PageLinesSVG />
              <AnimatedLetterComponent
                ref={animatedLetterRef}
                name={activeActivity.letter.lowerCase}
                key={activeActivity.letter.lowerCase}
                onAnimationComplete={onAnimationComplete}
                onAnimationStart={onAnimationStart}
                isAnimating={isAnimating}
              />
              <View className="mb-8 flex flex-row items-center justify-evenly">
                <TouchableOpacity
                  onPress={() => {
                    animatedLetterRef?.current?.animateLowercase();
                  }}
                >
                  <PencilButton
                    backgroundColor="#C385F8"
                    offblackColor="#000000"
                    offwhiteColor="#FFFFFF"
                    primaryColor="#C385F8"
                    secondaryColor="#FFFFFF"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    animatedLetterRef?.current?.animateUppercase();
                  }}
                >
                  <PencilButton
                    backgroundColor="#C385F8"
                    offblackColor="#000000"
                    offwhiteColor="#FFFFFF"
                    primaryColor="#C385F8"
                    secondaryColor="#FFFFFF"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View className="flex w-full flex-col justify-between">
          <View className="flex w-full flex-row items-center justify-around px-[10px]">
            {activitiesInCurrentSection.map((activity, index) => (
              <Pressable
                className={clsx("flex size-[60] justify-center  rounded-md  ", {
                  "bg-colors-gray-300": activity.id !== activeActivity.id,
                  "bg-colors-purple-500": activity.id === activeActivity.id,
                  "bg-gray-200": isAnimating,
                })}
                onPress={() => {
                  /**
                   * update current activity
                   */
                  setActiveActivity(activity);
                }}
                key={index}
                disabled={isAnimating}
              >
                <View className="flex flex-row  items-center justify-center ">
                  <Text className="text-3xl font-medium">
                    {activity.letter.upperCase}
                  </Text>
                  <Text className=" ml-0.5 text-3xl font-medium">
                    {activity.letter.lowerCase}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LetterIntroduction;
