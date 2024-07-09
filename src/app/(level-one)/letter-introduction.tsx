import clsx from "clsx";
import type { AVPlaybackSource } from "expo-av";
import { Audio } from "expo-av";
import type { Sound } from "expo-av/build/Audio";
import React, { useEffect, useRef, useState } from "react";
import { Alert } from "react-native";
import Svg, { Line } from "react-native-svg";

import { useLevelStore } from "@/core/store/levels";
import { Pressable, SafeAreaView, Text, View } from "@/ui";
import AnimatedLetterComponent from "@/ui/components/home/animated-letter-component";
import Header from "@/ui/core/headers";
import { DynamicModal } from "@/ui/core/modal/dynamic-modal";
import {
  CustomPencilIcon,
  EarIcon,
  LettersNameIcon,
  SimplePencilIcon,
  TeacherIcon,
} from "@/ui/icons";
import { WIDTH } from "@/utils/layout";

type AnimatedLetterComponentRef = {
  animateLowercase: () => void;
  animateUppercase: () => void;
};

const PageLinesSVG = () => {
  return (
    <Svg
      width={WIDTH - 16}
      height="143"
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
  );
};

const LetterIntroduction = () => {
  const dynamicModalRef = useRef<DynamicModalRefType>(null);

  const { levels, updateLevels } = useLevelStore();
  const [sound, setSound] = useState<Sound>();

  const [tappedButton, setTappedAction] = useState<
    "uppercase" | "lowercase" | null
  >(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // const [isUpdatingSession, setIsUpdatingSession] = useState(false);
  // const [tappedAnswer, setTappedAnswer] = useState<IOption>();

  const [activeActivity, setActiveActivity] = useState(
    levels[0].modules[0].sections[0].activities[0]
  );

  const animatedLetterRef = useRef<AnimatedLetterComponentRef | null>(null);

  const activitiesInCurrentSection =
    levels[0].modules[0].sections[0].activities;

  const playSound = async (playbackSource: AVPlaybackSource) => {
    try {
      const { sound: soundResponse } = await Audio.Sound.createAsync(
        playbackSource
      );
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

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    return () => {};
  }, []);

  const incrementProgress = (
    type:
      | "PHONETIC_SOUND"
      | "ALPHABETIC_SOUND"
      | "UPPERCASE_LETTER"
      | "LOWERCASE_LETTER"
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
            }
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
          (activity) => activity.id === activeActivity.id
        );
      if (updatedActiveActivity) {
        setActiveActivity(updatedActiveActivity);
      }
    }, 1000);
  };

  const onAnimationComplete = (letter: string) => {
    if (letter === activeActivity.letter.upperCase) {
      incrementProgress("UPPERCASE_LETTER");
    } else if (letter === activeActivity.letter.lowerCase) {
      incrementProgress("LOWERCASE_LETTER");
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
    <SafeAreaView className="flex-1">
      <Header title="Introduction" modalRef={dynamicModalRef} />
      <View>
        <View className="flex items-center justify-center">
          <View className="flex flex-row rounded-full bg-colors-purple-200 p-4">
            <Pressable
              onPress={async () => {
                try {
                  await playSound(activeActivity.sound.phoneticAudioSrc);
                  incrementProgress("PHONETIC_SOUND");
                } catch (error) {}
              }}
              className="mr-5 flex size-[80] items-center justify-center rounded-full bg-colors-purple-500"
            >
              <EarIcon />
            </Pressable>
            <Pressable
              onPress={async () => {
                try {
                  await playSound(activeActivity.sound.alphabeticAudioSrc);
                  incrementProgress("ALPHABETIC_SOUND");
                } catch (error) {}
              }}
              className="flex size-[80] items-center justify-center rounded-full bg-colors-purple-500"
            >
              <LettersNameIcon />
            </Pressable>
          </View>
        </View>
        <View className="mx-4 mt-5 overflow-hidden  border-yellow-500">
          <PageLinesSVG />
          <AnimatedLetterComponent
            ref={animatedLetterRef}
            name={activeActivity.letter.lowerCase}
            key={activeActivity.letter.lowerCase}
            onAnimationComplete={onAnimationComplete}
          />
        </View>
      </View>
      <View className="my-10 flex flex-row items-center justify-evenly">
        <Pressable
          onPress={() => {
            setTappedAction("uppercase");
            animatedLetterRef?.current?.animateLowercase();
            timeoutRef.current = setTimeout(() => {
              setTappedAction(null);
            }, 2000);
          }}
        >
          <CustomPencilIcon
            size={56}
            border={tappedButton === "uppercase" ? true : false}
          />
        </Pressable>
        <SimplePencilIcon width={60} height={60} />
        <Pressable
          onPress={() => {
            setTappedAction("lowercase");
            animatedLetterRef?.current?.animateUppercase();
            timeoutRef.current = setTimeout(() => {
              setTappedAction(null);
            }, 2000);
          }}
        >
          <CustomPencilIcon
            size={44}
            border={tappedButton === "lowercase" ? true : false}
          />
        </Pressable>
      </View>
      <View className="flex flex-row justify-between">
        <View className="mt-20 flex w-full flex-row items-center justify-around px-[10px]">
          {activitiesInCurrentSection.map((activity, index) => (
            <Pressable
              className={clsx(
                "flex size-[60] items-center justify-center rounded-md ",
                {
                  "bg-colors-gray-300": activity.id !== activeActivity.id,
                  "bg-colors-purple-500": activity.id === activeActivity.id,
                }
              )}
              onPress={() => {
                /**
                 * update current activity
                 */
                setActiveActivity(activity);
              }}
              key={index}
            >
              <Text className="text-[24px] text-white">
                {activity.letter.upperCase}
                {activity.letter.lowerCase}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <DynamicModal ref={dynamicModalRef}>
        <View className="rounded-lg bg-white p-4">
          <Text>Letter introduction activity</Text>
          <View className="flex h-20 items-center justify-center">
            <TeacherIcon />
          </View>
          <Text className="mt-4">
            Start your language learning adventure. Let A, B, C, and D be the
            building blocks of your multilingual journey!
          </Text>
        </View>
      </DynamicModal>
    </SafeAreaView>
  );
};

export default LetterIntroduction;
