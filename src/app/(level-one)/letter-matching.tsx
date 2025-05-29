import clsx from "clsx";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Alert, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Svg, { Path as SvgPath } from "react-native-svg";

import { useGuideAudio } from "@/core/hooks/useGuideAudio";
import { useLevelStore } from "@/core/store/levels";
import { Text, TouchableOpacity } from "@/ui";
import GuidanceAudioHeader from "@/ui/core/headers/guidance-audio";
import { globalStyles } from "@/ui/styles";
import { shuffleLetters } from "@/utils/level-one";

type Path = {
  pathString: string;
  startingPoint: { x1: number; y1: number };
  endingPoint: { x2: number; y2: number };
};

interface ILetter {
  id: string;
  value: string;
}

const LetterTapMatching = () => {
  const { levels, updateLevels } = useLevelStore();
  const activeActivity = useRef(levels[0].modules[0].sections[4].activities[0]);

  const insets = useSafeAreaInsets();

  const { playGuideAudio, isPlaying: isPlayingGuidanceAudio } = useGuideAudio({
    screenName: "letter-matching",
    module: "alphabet-module",
  });

  const [leftLetters, setLeftLetters] = useState<ILetter[]>([]);
  const [rightLetters, setRightLetters] = useState<ILetter[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<ILetter | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [incorrectMatch, setIncorrectMatch] = useState<{
    left: string | null;
    right: string | null;
  }>({
    left: null,
    right: null,
  });
  const [paths, setPaths] = useState<Path[]>([]);

  // @ts-ignore
  const tappedPath = useRef<Path>();
  // @ts-ignore
  const layoutValuesRef = useRef<
    {
      x: number;
      y: number;
      id: string;
      value: string;
      pageX: number;
      pageY: number;
    }[]
  >();

  const initializeGame = useCallback(() => {
    const letters = shuffleLetters(activeActivity.current.letters ?? []);
    const left = letters.map((value, index) => ({
      id: `left-${index}`,
      value,
    }));
    const right = shuffle(
      letters.map((value, index) => ({
        id: `right-${index}`,
        value: value.toUpperCase(),
      })),
    );
    setLeftLetters(left);
    setRightLetters(right);
    setSelectedLeft(null);
    setMatchedPairs([]);
    setPaths([]);
  }, []);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const shuffle = (array: ILetter[]): ILetter[] => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const handleLeftLetterPress = (letter: ILetter) => {
    if (!matchedPairs.includes(letter.value)) {
      setSelectedLeft(letter);
    }
  };

  const handleRightLetterPress = (letter: ILetter) => {
    if (selectedLeft && selectedLeft.value.toUpperCase() === letter.value) {
      setMatchedPairs([...matchedPairs, selectedLeft.value]);
      if (tappedPath?.current) {
        const updatedPaths = [...paths, tappedPath.current];
        setPaths(updatedPaths);
      }
      // @ts-ignore
      tappedPath.current = undefined;
      setSelectedLeft(null);

      // Check if all pairs are matched
      if (matchedPairs.length + 1 === leftLetters.length) {
        Alert.alert("Level", "Completed");
        const updatedLevels = levels.map((level: ILevel) => {
          if (level.id !== levels[0].id) return level;

          const _updatedModules = level.modules.map((sublevel) => {
            if (sublevel.id !== levels[0].modules[0].id) return sublevel;

            const _updatedSections = sublevel.sections.map(
              (section: ISection) => {
                if (section.id !== levels[0].modules[0].sections[4].id)
                  return section;

                const _updatedActivities = section.activities.map(
                  (activity: IActivity) => {
                    if (activity.id !== activeActivity.current.id)
                      return activity;

                    return {
                      ...activity,
                      numberOfTimesCorrectAnswerGiven:
                        activity.numberOfTimesCorrectAnswerGiven + 1,
                    };
                  },
                );

                return {
                  ...section,
                  activities: _updatedActivities,
                };
              },
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
        updateLevels(updatedLevels);
      }
    } else {
      // Handle incorrect match - flash red for 400ms
      if (selectedLeft) {
        setIncorrectMatch({
          left: selectedLeft.id,
          right: letter.id,
        });
        setTimeout(() => {
          setIncorrectMatch({
            left: null,
            right: null,
          });
        }, 500);
      }
      setSelectedLeft(null);
    }
  };

  useEffect(() => {
    if (matchedPairs.length === activeActivity.current.letters?.length) {
      Alert.alert("Level", "Completed", [{ text: "Done" }]);
    }
  }, [matchedPairs, initializeGame]);

  const renderLetters = (
    letters: ILetter[],
    onPress: (letter: ILetter) => void,
    isRight: boolean,
  ) => (
    <View className="items-center">
      {letters.map((letter) => {
        return (
          <View key={letter.id} className="items-center">
            <TouchableOpacity
              className={clsx(
                "my-[14px] size-[64px] items-center justify-center rounded-[10px] ",
                {
                  "bg-[#62CC82]": matchedPairs.includes(
                    letter.value.toLowerCase(),
                  ),
                  "bg-[#FF5A5F]":
                    incorrectMatch.left === letter.id ||
                    incorrectMatch.right === letter.id,
                  "bg-[#7471F0]":
                    selectedLeft?.id === letter.id &&
                    incorrectMatch.left !== letter.id &&
                    incorrectMatch.right !== letter.id,
                  "bg-[#C385F8]":
                    !matchedPairs.includes(letter.value.toLowerCase()) &&
                    selectedLeft?.id !== letter.id &&
                    incorrectMatch.left !== letter.id &&
                    incorrectMatch.right !== letter.id,
                },
              )}
              onPress={() => {
                const letterMetaInformation = layoutValuesRef.current?.find(
                  (item) => item.value === letter.value,
                );
                if (!letterMetaInformation) return;

                const offset = insets.top + 16; // Fixed offset calculation

                if (!isRight) {
                  tappedPath.current = {
                    pathString: "",
                    startingPoint: {
                      x1: Math.floor(letterMetaInformation.pageX) - 90,
                      y1: Math.floor(letterMetaInformation.pageY) - offset,
                    },
                    endingPoint: {
                      x2: 0,
                      y2: 0,
                    },
                  };
                } else {
                  if (!tappedPath.current) return;

                  tappedPath.current = {
                    pathString: `M${tappedPath.current.startingPoint.x1},${
                      tappedPath.current.startingPoint.y1
                    } L${letterMetaInformation.pageX - 90},${
                      letterMetaInformation.pageY - offset
                    }`,
                    startingPoint: tappedPath.current?.startingPoint as {
                      x1: number;
                      y1: number;
                    },
                    endingPoint: {
                      x2: Math.floor(letterMetaInformation.pageX) - 90,
                      y2: Math.floor(letterMetaInformation.pageY) - offset,
                    },
                  };
                }
                onPress(letter);
              }}
            >
              <Text className="text-2xl font-bold text-white">
                {letter.value}
              </Text>
              <View
                className={clsx("absolute size-4 rounded-full border-2", {
                  "right-24": isRight,
                  "left-24": !isRight,
                  "bg-[#8AC65B] border-[#8AC65B]": matchedPairs.includes(
                    letter.value.toLowerCase(),
                  ),
                  "bg-[#FF0000] border-[#FF0000]":
                    incorrectMatch.left === letter.id ||
                    incorrectMatch.right === letter.id,
                  "bg-[#7471F0] border-[#7471F0]":
                    selectedLeft?.id === letter.id &&
                    incorrectMatch.left !== letter.id &&
                    incorrectMatch.right !== letter.id,
                  "border-colors-purple-500":
                    !matchedPairs.includes(letter.value.toLowerCase()) &&
                    selectedLeft?.id !== letter.id &&
                    incorrectMatch.left !== letter.id &&
                    incorrectMatch.right !== letter.id,
                })}
                onLayout={(e) => {
                  e.target.measure((x, y, width, height, pageX, pageY) => {
                    if (layoutValuesRef.current) {
                      layoutValuesRef.current = [
                        ...layoutValuesRef.current,
                        {
                          x: Math.floor(-x + pageX),
                          y: Math.floor(y + pageY),
                          id: letter.id,
                          value: letter.value,
                          pageX: Math.floor(pageX),
                          pageY: Math.floor(pageY),
                        },
                      ];
                    } else {
                      layoutValuesRef.current = [
                        {
                          id: letter.id,
                          x: Math.floor(-x + pageX),
                          y: Math.floor(y + pageY),
                          value: letter.value,
                          pageX: Math.floor(pageX),
                          pageY: Math.floor(pageY),
                        },
                      ];
                    }
                  });
                }}
              />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <GuidanceAudioHeader
        title="Sound"
        isPlaying={isPlayingGuidanceAudio}
        onPressGuide={playGuideAudio}
        showLetterCaseSwitch={false}
      />
      <View className="relative flex flex-row justify-between bg-[#F2EFF0] px-10">
        {renderLetters(leftLetters, handleLeftLetterPress, false)}
        <View className="z-10 flex-1">
          <Svg height="100%" width="100%">
            {paths.map((p, index) => (
              <React.Fragment key={index}>
                <SvgPath
                  d={p.pathString}
                  stroke="#8AC65B"
                  strokeWidth="2"
                  fill="none"
                />
              </React.Fragment>
            ))}
          </Svg>
        </View>
        {renderLetters(rightLetters, handleRightLetterPress, true)}
      </View>
    </SafeAreaView>
  );
};

export default LetterTapMatching;
