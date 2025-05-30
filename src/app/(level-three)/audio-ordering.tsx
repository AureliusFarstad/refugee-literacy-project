import type { RefObject } from "react";
import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { ALPHABET_AUDIO_SOURCES } from "@/assets/alphabet/alphabet_sounds";
import {
  requireEnglishConversationAudio,
  requireNativeConversationAudio,
} from "@/assets/conversation";
import { SECTION_COLORS } from "@/constants/routes";
import { APP_COLORS } from "@/constants/routes";
import { useGuideAudio } from "@/core/hooks/useGuideAudio";
import type {
  DestinationComponentType,
  GameSet,
} from "@/ui/components/audio-multiple-choice-component";
import AudioMultipleChoice from "@/ui/components/audio-multiple-choice-component";
import GuidanceAudioHeader from "@/ui/core/headers/guidance-audio";
import { AnimatedAudioButton } from "@/ui/icons/animated-audio-button-wrapper";
import { EnglishButton } from "@/ui/icons/circular/english-button";
import { NativeButton } from "@/ui/icons/circular/native-button";
import { UserAvatar } from "@/ui/illustrations";
import { globalStyles } from "@/ui/styles";
import { HEIGHT, IS_IOS } from "@/utils/layout";

import { sectionColor } from "./_layout";

const primaryColor = SECTION_COLORS.speaking;
const secondaryColor = SECTION_COLORS.vocabulary;

const styles = StyleSheet.create({
  chatRow: {
    flexDirection: "row",
    margin: 12,
    gap: 12,
  },
  femaleChatRow: {
    justifyContent: "flex-start",
  },
  maleChatRow: {
    justifyContent: "flex-end",
  },
  avatarWrapper: {
    width: 60,
    height: 60,
  },
  speakerCard: {
    height: 120,
    width: 220,
    borderWidth: 2,
    borderRadius: 12,
    margin: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: APP_COLORS.offwhite,
  },
  femaleSpeakerCard: {
    borderColor: primaryColor.primary,
  },
  maleSpeakerCard: {
    borderColor: secondaryColor.primary,
  },
  button: {
    width: 80,
    height: 80,
  },
  activeSpeakerCard: {
    backgroundColor: primaryColor.light,
  },
  dropCircle: {
    width: 80,
    height: 80,
    marginRight: 8,
    marginBottom: 4,
    borderRadius: 40,
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: primaryColor.dark,
    backgroundColor: primaryColor.light,
  },
  overflowContainer: {
    flex: 1,
    overflow: "hidden", // Hide content that overflows
    position: "relative", // For positioning the inner container
    flexDirection: "column", // Stack children vertically
  },
  bottomAnchoredContent: {
    position: "absolute", // Position at the bottom of the container
    flexDirection: "column", // Stack children vertically
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    // No explicit height - it will grow from the bottom up
    // Content that extends beyond the parent container will be clipped
  },
});

const femaleButtonProps = {
  primaryColor: primaryColor.primary,
  secondaryColor: primaryColor.light,
  offwhiteColor: APP_COLORS.offwhite,
  offblackColor: APP_COLORS.offblack,
  backgroundColor: APP_COLORS.backgroundgrey,
};

const maleButtonProps = {
  primaryColor: secondaryColor.primary,
  secondaryColor: secondaryColor.light,
  offwhiteColor: APP_COLORS.offwhite,
  offblackColor: APP_COLORS.offblack,
  backgroundColor: APP_COLORS.backgroundgrey,
};

interface DestinationCardFactoryProps {
  gender: "female" | "male"; // Union type for strict type checking
  nativeAudioFile: string;
}

interface CompletedCardProps {
  gender: "female" | "male"; // Union type for strict type checking
  englishAudioFile: string;
  nativeAudioFile: string;
}

type DestinationFunction<T> = (
  props: T,
) => (
  isCardActive: boolean,
) => [DestinationComponentType, RefObject<View | null>, RefObject<View | null>];

const CompletedCard: React.FC<CompletedCardProps> = ({
  gender = "male", // Default parameter using destructuring
  englishAudioFile,
  nativeAudioFile,
}) => {
  return (
    <View
      style={[
        styles.chatRow,
        gender === "female" ? styles.femaleChatRow : styles.maleChatRow,
      ]}
    >
      {gender === "female" && (
        <View style={styles.avatarWrapper}>
          <UserAvatar gender="f" name="a" />
        </View>
      )}
      <View
        style={[
          styles.speakerCard,
          gender === "female"
            ? styles.femaleSpeakerCard
            : styles.maleSpeakerCard,
        ]}
      >
        <AnimatedAudioButton
          audioSource={nativeAudioFile}
          width={80}
          height={80}
        >
          <View style={styles.button}>
            <NativeButton
              {...(gender === "female" ? femaleButtonProps : maleButtonProps)}
              width={80}
              height={80}
            />
          </View>
        </AnimatedAudioButton>
        <AnimatedAudioButton
          audioSource={englishAudioFile}
          width={80}
          height={80}
        >
          <View style={styles.button}>
            <EnglishButton
              {...(gender === "female" ? femaleButtonProps : maleButtonProps)}
            />
          </View>
        </AnimatedAudioButton>
      </View>
      {gender === "male" && (
        <View style={styles.avatarWrapper}>
          <UserAvatar gender="m" name="b" />
        </View>
      )}
    </View>
  );
};

const createConversationDestinationComponent: DestinationFunction<
  DestinationCardFactoryProps
> = ({
  gender = "male",
  nativeAudioFile = ALPHABET_AUDIO_SOURCES.a.sound, // Default value
}) => {
  // This returns a function that matches the original signature expected by AudioMultipleChoice
  return (
    isCardActive: boolean,
  ): [
    DestinationComponentType,
    RefObject<View | null>,
    RefObject<View | null>,
  ] => {
    const dropCircleRef = useRef<View>(null);
    const destinationContainerRef = useRef<View>(null);

    const SpeakerCard = () => (
      <View
        style={[
          styles.chatRow,
          gender === "female" ? styles.femaleChatRow : styles.maleChatRow,
        ]}
      >
        {gender === "female" && (
          <View style={styles.avatarWrapper}>
            <UserAvatar gender="f" name="a" />
          </View>
        )}
        <View
          ref={destinationContainerRef}
          style={[
            styles.speakerCard,
            gender === "female"
              ? styles.femaleSpeakerCard
              : styles.maleSpeakerCard,
            isCardActive && styles.activeSpeakerCard,
          ]}
        >
          <AnimatedAudioButton
            audioSource={nativeAudioFile}
            width={80}
            height={80}
          >
            <View style={styles.button}>
              <NativeButton
                {...(gender === "female" ? femaleButtonProps : maleButtonProps)}
                width={80}
                height={80}
              />
            </View>
          </AnimatedAudioButton>
          <View ref={dropCircleRef} style={styles.dropCircle} />
        </View>
        {gender === "male" && (
          <View style={styles.avatarWrapper}>
            <UserAvatar gender="m" name="b" />
          </View>
        )}
      </View>
    );
    // silence the error:
    return [SpeakerCard, dropCircleRef, destinationContainerRef]; //
  };
};

const Screen = () => {
  const insets = useSafeAreaInsets();

  // Convert dialogueCounter to state so it persists between renders
  const [dialogueCounter, setDialogueCounter] = useState(0);

  const onCorrectAnswer = () => {
    setDialogueCounter((prevCounter) => prevCounter + 1);
  };

  // Helper function to render the appropriate content based on dialogueCounter
  const renderContent = () => {
    switch (dialogueCounter) {
      case 0:
        const FirstConversationDestinationComponent =
          createConversationDestinationComponent({
            gender: "female",
            nativeAudioFile: requireNativeConversationAudio("part1", "female"),
          });
        const firstGameSet: GameSet = {
          correctAnswerId: "part1",
          options: [
            {
              id: "part1",
              audioFile: requireEnglishConversationAudio("part1", "female"),
            },
            {
              id: "part4",
              audioFile: requireEnglishConversationAudio("part4", "female"),
            },
            {
              id: "part3",
              audioFile: requireEnglishConversationAudio("part3", "female"),
            },
          ],
        };
        return (
          <AudioMultipleChoice
            useDestinationComponent={FirstConversationDestinationComponent}
            gameSet={firstGameSet}
            onCorrectAnswer={onCorrectAnswer}
            sectionColorTheme={sectionColor}
          />
        );
      case 1:
        const SecondConversationDestinationComponent =
          createConversationDestinationComponent({
            gender: "male",
            nativeAudioFile: requireNativeConversationAudio("part2", "male"),
          });
        const secondGameSet: GameSet = {
          correctAnswerId: "part2",
          options: [
            {
              id: "part2",
              audioFile: requireEnglishConversationAudio("part2", "male"),
            },
            {
              id: "part1",
              audioFile: requireEnglishConversationAudio("part1", "male"),
            },
            {
              id: "part4",
              audioFile: requireEnglishConversationAudio("part4", "male"),
            },
          ],
        };
        return (
          <View style={{ flex: 1 }}>
            <CompletedCard
              gender="female"
              englishAudioFile={requireEnglishConversationAudio(
                "part1",
                "female",
              )}
              nativeAudioFile={requireNativeConversationAudio(
                "part1",
                "female",
              )}
            />
            <AudioMultipleChoice
              useDestinationComponent={SecondConversationDestinationComponent}
              gameSet={secondGameSet}
              onCorrectAnswer={onCorrectAnswer}
              sectionColorTheme={sectionColor}
            />
          </View>
        );
      case 2:
        const ThirdConversationDestinationComponent =
          createConversationDestinationComponent({
            gender: "female",
            nativeAudioFile: requireNativeConversationAudio("part3", "female"),
          });
        const thirdGameSet: GameSet = {
          correctAnswerId: "part3",
          options: [
            {
              id: "part3",
              audioFile: requireEnglishConversationAudio("part3", "female"),
            },
            {
              id: "part1",
              audioFile: requireEnglishConversationAudio("part1", "female"),
            },
            {
              id: "part4",
              audioFile: requireEnglishConversationAudio("part4", "female"),
            },
          ],
        };
        return (
          <View style={{ flex: 1 }}>
            <CompletedCard
              gender="female"
              englishAudioFile={requireEnglishConversationAudio(
                "part1",
                "female",
              )}
              nativeAudioFile={requireNativeConversationAudio(
                "part1",
                "female",
              )}
            />
            <CompletedCard
              gender="male"
              englishAudioFile={requireEnglishConversationAudio(
                "part2",
                "male",
              )}
              nativeAudioFile={requireNativeConversationAudio("part2", "male")}
            />
            <AudioMultipleChoice
              useDestinationComponent={ThirdConversationDestinationComponent}
              gameSet={thirdGameSet}
              onCorrectAnswer={onCorrectAnswer}
              sectionColorTheme={sectionColor}
            />
          </View>
        );
      case 3:
        const FourthConversationDestinationComponent =
          createConversationDestinationComponent({
            gender: "male",
            nativeAudioFile: requireNativeConversationAudio("part4", "male"),
          });
        const forthGameSet: GameSet = {
          correctAnswerId: "part4",
          options: [
            {
              id: "part4",
              audioFile: requireEnglishConversationAudio("part4", "male"),
            },
            {
              id: "part1",
              audioFile: requireEnglishConversationAudio("part1", "male"),
            },
            {
              id: "part3",
              audioFile: requireEnglishConversationAudio("part3", "male"),
            },
          ],
        };
        return (
          <View style={{ flex: 1 }}>
            <CompletedCard
              gender="female"
              englishAudioFile={requireEnglishConversationAudio(
                "part1",
                "female",
              )}
              nativeAudioFile={requireNativeConversationAudio(
                "part1",
                "female",
              )}
            />
            <CompletedCard
              gender="male"
              englishAudioFile={requireEnglishConversationAudio(
                "part2",
                "male",
              )}
              nativeAudioFile={requireNativeConversationAudio("part2", "male")}
            />
            <CompletedCard
              gender="female"
              englishAudioFile={requireEnglishConversationAudio(
                "part3",
                "female",
              )}
              nativeAudioFile={requireNativeConversationAudio(
                "part3",
                "female",
              )}
            />
            <AudioMultipleChoice
              useDestinationComponent={FourthConversationDestinationComponent}
              gameSet={forthGameSet}
              onCorrectAnswer={onCorrectAnswer}
              sectionColorTheme={sectionColor}
            />
          </View>
        );
      default:
        return (
          // TODO: Scrollable view
          <View style={{ flex: 1 }}>
            <CompletedCard
              gender="female"
              englishAudioFile={requireEnglishConversationAudio(
                "part1",
                "female",
              )}
              nativeAudioFile={requireNativeConversationAudio(
                "part1",
                "female",
              )}
            />
            <CompletedCard
              gender="male"
              englishAudioFile={requireEnglishConversationAudio(
                "part2",
                "male",
              )}
              nativeAudioFile={requireNativeConversationAudio("part2", "male")}
            />
            <CompletedCard
              gender="female"
              englishAudioFile={requireEnglishConversationAudio(
                "part3",
                "female",
              )}
              nativeAudioFile={requireNativeConversationAudio(
                "part3",
                "female",
              )}
            />
            <CompletedCard
              gender="male"
              englishAudioFile={requireEnglishConversationAudio(
                "part4",
                "male",
              )}
              nativeAudioFile={requireNativeConversationAudio("part4", "male")}
            />
          </View>
        );
    }
  };

  const { playGuideAudio, isPlaying: isPlayingGuidanceAudio } = useGuideAudio({
    screenName: "audio-ordering",
    module: "conversation-module",
  });

  // TODO: Maybe use some of these styles
  // <SafeAreaView>
  //   <View className="flex h-full items-center ">
  //     <View className="flex w-full flex-1 flex-col   ">
  //       <DragDrop activeActivity={activeActivity} />

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <View
        style={{
          height: HEIGHT - (insets.bottom + insets.top + (IS_IOS ? 96 : 112)),
          flex: 1,
          backgroundColor: APP_COLORS.backgroundgrey,
        }}
      >
        <GuidanceAudioHeader
          title="Sound"
          isPlaying={isPlayingGuidanceAudio}
          onPressGuide={playGuideAudio}
          showLetterCaseSwitch={false}
        />
        <View style={styles.overflowContainer}>
          {/* Bottom-anchored content that can overflow at the top */}
          <View style={styles.bottomAnchoredContent}>{renderContent()}</View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Screen;
