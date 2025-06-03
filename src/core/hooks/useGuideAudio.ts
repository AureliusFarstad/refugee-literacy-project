import { Audio, type AVPlaybackSource, type AVPlaybackStatus } from "expo-av";
import type { Sound } from "expo-av/build/Audio";
import { useCallback, useEffect, useRef, useState } from "react";

import type { CombinedRoutes } from "@/types/navigation-types";
import { getGuides } from "@/utils/shared";

type GuideAudioProps = {
  screenName: CombinedRoutes;
  module?: keyof GuidanceType;
};

export const useGuideAudio = ({ screenName, module }: GuideAudioProps) => {
  const soundRef = useRef<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    const soundInstanceAtEffectStart = soundRef.current;

    return () => {
      isMountedRef.current = false;
      if (soundInstanceAtEffectStart) {
        const cleanupSound = async () => {
          try {
            const status = await soundInstanceAtEffectStart.getStatusAsync();
            if (status.isLoaded) {
              await soundInstanceAtEffectStart.stopAsync();
            }
            await soundInstanceAtEffectStart.unloadAsync();
          } catch (error) {
            if (
              !(
                error instanceof Error &&
                error.message.includes("sound is not loaded")
              )
            ) {
              console.warn(
                `[useGuideAudio] Cleanup: Error stopping/unloading sound for ${screenName}:`,
                (error as Error).message,
              );
            }
          }
        };
        cleanupSound().then(() => {
          if (soundRef.current === soundInstanceAtEffectStart) {
            soundRef.current = null;
          }
        });
      }
    };
  }, [screenName]);

  const playSequentialSounds = useCallback(
    async (playbackSources: AVPlaybackSource[]) => {
      if (!isMountedRef.current) {
        return;
      }

      if (soundRef.current) {
        try {
          await soundRef.current.unloadAsync();
        } catch (e) {
          console.warn(
            "[useGuideAudio] playSequentialSounds: Error unloading existing soundRef.current",
            e,
          );
        }
        soundRef.current = null;
      }

      let currentSoundIndex = 0;
      const playNextSound = async () => {
        if (!isMountedRef.current) {
          if (soundRef.current)
            await soundRef.current.unloadAsync().catch((e) => console.warn(e));
          soundRef.current = null;
          if (isMountedRef.current) setIsPlaying(false);
          return;
        }
        if (currentSoundIndex >= playbackSources.length) {
          if (soundRef.current)
            await soundRef.current.unloadAsync().catch((e) => console.warn(e));
          soundRef.current = null;
          if (isMountedRef.current) setIsPlaying(false);
          return;
        }

        const source = playbackSources[currentSoundIndex];

        try {
          if (soundRef.current) {
            console.warn(
              "[useGuideAudio] playSequentialSounds: soundRef.current was not null before creating new sound. This should not happen if previous unload was successful.",
            );
            await soundRef.current.unloadAsync().catch((e) => console.warn(e));
            soundRef.current = null;
          }

          const { sound: newSound } = await Audio.Sound.createAsync(source, {
            shouldPlay: true,
          });
          if (!isMountedRef.current) {
            await newSound.unloadAsync();
            return;
          }
          soundRef.current = newSound;

          newSound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
            if (!isMountedRef.current && newSound === soundRef.current) {
              if (soundRef.current) {
                soundRef.current
                  .unloadAsync()
                  .catch((e) =>
                    console.warn(
                      "Error unloading sound on status update after unmount",
                      e,
                    ),
                  );
                soundRef.current = null;
              }
              return;
            }

            if (!status.isLoaded) {
              if (status.error) {
                console.error(
                  "[useGuideAudio] playSequentialSounds: Playback Error:",
                  status.error,
                );
                newSound.setOnPlaybackStatusUpdate(null);
                if (soundRef.current === newSound) soundRef.current = null;
                if (isMountedRef.current) setIsPlaying(false);
              }
              return;
            }
            if (status.didJustFinish) {
              newSound.setOnPlaybackStatusUpdate(null);
              currentSoundIndex++;
              playNextSound();
            }
          });
        } catch (error) {
          console.error(
            "[useGuideAudio] playSequentialSounds: Error creating or playing sound:",
            error,
          );
          if (soundRef.current) {
            await soundRef.current
              .unloadAsync()
              .catch((e) =>
                console.warn(
                  "Error unloading sound in playSequentialSounds catch",
                  e,
                ),
              );
            soundRef.current = null;
          }
          if (isMountedRef.current) setIsPlaying(false);
        }
      };

      playNextSound();
    },
    [],
  );

  const stopGuideAudio = useCallback(async () => {
    const soundToStop = soundRef.current;

    if (soundToStop) {
      try {
        const status = await soundToStop.getStatusAsync();
        if (status.isLoaded) {
          await soundToStop.stopAsync();
        }
        await soundToStop.unloadAsync();
      } catch (error) {
        if (
          !(
            error instanceof Error &&
            error.message.includes("sound is not loaded")
          )
        ) {
          console.error(
            "[useGuideAudio] stopGuideAudio: Error stopping/unloading sound:",
            error,
          );
        }
      } finally {
        if (soundRef.current === soundToStop) {
          soundRef.current = null;
        }
      }
    }

    if (isMountedRef.current) {
      setIsPlaying(false);
    }
  }, []);

  const playGuideAudio = useCallback(async () => {
    if (isPlaying && soundRef.current) {
      await stopGuideAudio();
    }

    if (!isMountedRef.current) {
      return;
    }

    setIsPlaying(true);

    try {
      const playbackSources = await getGuides(screenName, module);
      if (!isMountedRef.current) {
        setIsPlaying(false);
        return;
      }

      if (playbackSources.length === 0) {
        if (isMountedRef.current) setIsPlaying(false);
        return;
      }
      await playSequentialSounds(playbackSources);
    } catch (error) {
      console.error("[useGuideAudio] playGuideAudio: Error in process:", error);
      if (soundRef.current) {
        await soundRef.current
          .unloadAsync()
          .catch((e) =>
            console.warn("Error unloading in playGuideAudio catch", e),
          );
        soundRef.current = null;
      }
      if (isMountedRef.current) setIsPlaying(false);
    }
  }, [screenName, module, stopGuideAudio, playSequentialSounds, isPlaying]);

  return {
    playGuideAudio,
    stopGuideAudio,
    isPlaying,
  };
};
