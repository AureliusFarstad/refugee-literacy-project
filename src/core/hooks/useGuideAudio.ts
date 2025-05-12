import { Audio, type AVPlaybackSource, type AVPlaybackStatus } from "expo-av";
import type { Sound } from "expo-av/build/Audio";
import { useEffect, useState } from "react";

import type { CombinedRoutes } from "@/types/navigation-types";
import { getGuides } from "@/utils/shared";

type GuideAudioProps = {
  screenName: CombinedRoutes;
  module?: keyof GuidanceType;
};

export const useGuideAudio = ({ screenName, module }: GuideAudioProps) => {
  const [sound, setSound] = useState<Sound>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playSequentialSounds = async (playbackSources: AVPlaybackSource[]) => {
    setIsPlaying(true);

    for (const source of playbackSources) {
      try {
        if (sound) {
          await sound.unloadAsync();
        }

        const { sound: newSound } = await Audio.Sound.createAsync(source, {
          shouldPlay: true,
        });
        setSound(newSound);

        await new Promise<void>((resolve) => {
          const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
            if (status.isLoaded && status.didJustFinish) {
              newSound.unloadAsync().then(() => resolve());
            }
          };
          newSound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
        });
      } catch (error) {
        console.error("Error playing sound:", error);
      }
    }

    setSound(undefined);
  };

  const playGuideAudio = async () => {
    try {
      const playbackSources = await getGuides(screenName, module);
      await playSequentialSounds(playbackSources);
      setIsPlaying(false);
    } catch (error) {
      console.log("error in playGuideAudio", error);
      setIsPlaying(false);
      throw error;
    }
  };

  const stopGuideAudio = async () => {
    if (sound) {
      try {
        await sound.stopAsync();
        await sound.unloadAsync();
        setSound(undefined);
      } catch (error) {
        console.error("Error stopping sound:", error);
      }
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound, screenName]);

  return {
    playGuideAudio,
    stopGuideAudio,
    isPlaying,
  };
};
