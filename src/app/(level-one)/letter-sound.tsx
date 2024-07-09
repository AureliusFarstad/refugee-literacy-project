import clsx from "clsx";
import { Audio } from "expo-av";
import type { Sound } from "expo-av/build/Audio";
import { router, usePathname } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { useLevelStore } from "@/core/store/levels";
import { Pressable, SafeAreaView, Text, View } from "@/ui";
import { Switch } from "@/ui/checkbox";
import Header from "@/ui/core/headers";
import { DynamicModal } from "@/ui/core/modal/dynamic-modal";
import { EarIcon } from "@/ui/icons";
import { getOptionsToRender } from "@/utils/level-one";

type LowerCaseSwitchProps = {
  isLowercase: boolean;
  setIsLowercase: (value: boolean) => void;
};

const LowercaseSwitch = ({
  isLowercase,
  setIsLowercase,
}: LowerCaseSwitchProps) => {
  return (
    <Switch.Root
      checked={isLowercase}
      onChange={setIsLowercase}
      accessibilityLabel="switch"
      className="pb-2"
    >
      <Switch.Icon checked={isLowercase} />
      <Switch.Label text="" />
    </Switch.Root>
  );
};

const LetterSound = () => {
  const dynamicModalRef = useRef<DynamicModalRefType>(null);
  const { levels, updateLevels } = useLevelStore();
  const [sound, setSound] = useState<Sound>();
  const [isUpdatingSession, setIsUpdatingSession] = useState(false);
  const [tappedAnswer, setTappedAnswer] = useState<IOption>();

  const [isLowercase, setIsLowercase] = useState(false);

  const pathname = usePathname();

  const [activeActivity, setActiveActivity] = useState<IActivity>(
    levels[0].modules[0].sections[2].activities[0]
  );

  const optionsToRender = useMemo(
    () =>
      getOptionsToRender(activeActivity.options, activeActivity.correctAnswer),
    [activeActivity]
  );

  /**
   * 1. 6 letters, S,A,T,P,I,N
   * 2. Save the progress
   * 3. One by one do the mapping, show 3 of the rest of the five (have the option to show rest of 25 apart from the correct one)
   * 4. Correct answer, show success
   * 5. Wrong answer, show try again
   * 6. Level completion UI
   *
   */

  const playSound = async () => {
    try {
      const { sound: soundResponse } = await Audio.Sound.createAsync(
        activeActivity.audio
      );
      if (soundResponse) {
        setSound(soundResponse);
      }
      console.log("Playing Sound");
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
  }, [sound]);

  const initNextActivity = () => {
    const currentIndex = levels[0].modules[0].sections[2].activities.findIndex(
      (activity: IActivity) => activity.id === activeActivity.id
    );
    let _nextActivity: IActivity;
    if (
      currentIndex === -1 ||
      currentIndex === levels[0].modules[0].sections[2].activities.length - 1
    ) {
      // If current element is not found or is the last element, return the first element
      _nextActivity = levels[0].modules[0].sections[2].activities[0];
    } else {
      // Return the next element in the array
      _nextActivity =
        levels[0].modules[0].sections[2].activities[currentIndex + 1];
    }

    if (_nextActivity) {
      setActiveActivity(_nextActivity);
    }
  };

  useEffect(() => {
    if (pathname !== "/letter-sound") {
      return;
    }
    /**
     * Check if each activity have been answered correctly twice if so means level completed
     */
    const activitiesInCurrentSection =
      levels[0].modules[0].sections[2].activities;
    const isCompleted = activitiesInCurrentSection.every((activity) => {
      if (!activity.nameAndSoundActivityProgress) return false;
      return Object.values(activity.nameAndSoundActivityProgress).every(
        (count) => count >= 1
      );
    });

    if (isCompleted) {
      console.log("done");
    }
  }, [levels, activeActivity, pathname]);

  return (
    <SafeAreaView>
      <Header title="Sound" modalRef={dynamicModalRef} />
      <View className="mt-5 px-5">
        <LowercaseSwitch
          isLowercase={isLowercase}
          setIsLowercase={setIsLowercase}
        />
      </View>

      <View className="flex items-center p-4">
        <Pressable
          onPress={playSound}
          className="flex size-[110] items-center justify-center rounded-full bg-colors-purple-500"
        >
          <EarIcon />
        </Pressable>
        <View className="flex w-full flex-1 flex-row">
          {optionsToRender.map((option, index) => (
            <Pressable
              key={option.id}
              onPress={() => {
                setTappedAnswer(option);
                if (option.id === activeActivity.correctAnswer.id) {
                  const _updatedLevels = levels.map((level: ILevel) => {
                    if (level.id !== levels[0].id) return level;

                    const _updatedModules = level.modules.map((sublevel) => {
                      if (sublevel.id !== levels[0].modules[0].id)
                        return sublevel;

                      const _updatedSections = sublevel.sections.map(
                        (section: ISection) => {
                          if (
                            section.id !== levels[0].modules[0].sections[2].id
                          )
                            return section;

                          const _updatedActivities = section.activities.map(
                            (activity: IActivity) => {
                              if (activity.id !== activeActivity.id)
                                return activity;

                              const updatedProgress = {
                                ...activity.nameAndSoundActivityProgress,
                              } as ILetterSoundAndNameProgress;

                              if (isLowercase && updatedProgress) {
                                updatedProgress.lowercaseSoundCount += 1;
                              } else if (!isLowercase && updatedProgress) {
                                updatedProgress.uppercaseSoundCount += 1;
                              }

                              return {
                                ...activity,
                                nameAndSoundActivityProgress: {
                                  ...updatedProgress,
                                },
                              };
                            }
                          );

                          return {
                            ...section,
                            activities: _updatedActivities,
                          };
                        }
                      );

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

                  setIsUpdatingSession(true);
                  router.push({
                    pathname: "/modal",
                    params: { correctOption: option.title },
                  });
                  setTimeout(() => {
                    setIsUpdatingSession(false);
                    updateLevels(_updatedLevels);
                    setTappedAnswer(undefined);
                    initNextActivity();
                    router.back();
                  }, 1000);
                } else {
                  setIsUpdatingSession(true);
                  setTimeout(() => {
                    setIsUpdatingSession(false);
                    setTappedAnswer(undefined);
                    initNextActivity();
                  }, 1000);
                  console.log(activeActivity);
                  console.log({ tappedAnswer });
                  console.log(option.id, activeActivity.correctAnswer.id);
                  console.log("wrong answer");
                }
              }}
              className={clsx(
                "absolute flex size-24 items-center justify-center rounded-full bg-colors-purple-200",
                {
                  "left-10 top-40": index === 0,
                  "left-36 top-72": index === 1,
                  "right-0 top-40": index === 2,
                  " bg-red-500 text-white":
                    isUpdatingSession &&
                    option.id === tappedAnswer?.id &&
                    activeActivity.correctAnswer.id !== tappedAnswer.id,
                  "bg-green-500":
                    isUpdatingSession &&
                    option.id === tappedAnswer?.id &&
                    activeActivity.correctAnswer.id === tappedAnswer.id,
                }
              )}
            >
              <Text
                className={clsx("text-4xl font-bold text-colors-purple-500", {
                  "text-white":
                    (isUpdatingSession &&
                      option.id === tappedAnswer?.id &&
                      activeActivity.correctAnswer.id === tappedAnswer.id) ||
                    (isUpdatingSession &&
                      option.id === tappedAnswer?.id &&
                      activeActivity.correctAnswer.id !== tappedAnswer.id),
                })}
              >
                {isLowercase
                  ? option.title.toLowerCase()
                  : option.title.toUpperCase()}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <DynamicModal ref={dynamicModalRef}>
        <View className="rounded-lg bg-white p-4">
          <Text>Letter sound activity</Text>
          <View className="flex h-20 items-center justify-center">
            <EarIcon />
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

export default LetterSound;
