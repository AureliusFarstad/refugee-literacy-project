import { Audio, type AVPlaybackSource, type AVPlaybackStatus } from "expo-av";
import type { Sound } from "expo-av/build/Audio";
import { useEffect, useState } from "react";

import type { CombinedRoutes } from "@/types/navigation-types";
import { getGuides } from "@/utils/shared";

type GuideAudioProps = {
  screenName: CombinedRoutes;
};

export const useGuideAudio = ({ screenName }: GuideAudioProps) => {
  const [sound, setSound] = useState<Sound>();

  const playSequentialSounds = async (playbackSources: AVPlaybackSource[]) => {
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
      const playbackSources = await getGuides(screenName);
      await playSequentialSounds(playbackSources);
    } catch (error) {
      console.log("error in playGuideAudio", error);
      throw error;
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
  };
};
