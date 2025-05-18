import type { AVPlaybackSource } from "expo-av";
import { Audio } from "expo-av";
import type { Sound } from "expo-av/build/Audio";
import { useCallback, useRef } from "react";

const useSound = () => {
  const soundRef = useRef<Sound | null>(null);
  const isPlayingRef = useRef(false);

  const stopSound = useCallback(async () => {
    if (soundRef.current) {
      try {
        await soundRef.current.stopAsync();
        await soundRef.current.unloadAsync();
        soundRef.current = null;
        isPlayingRef.current = false;
      } catch (error) {
        console.log("Error stopping sound:", error);
      }
    }
  }, []);

  const pauseSound = useCallback(async () => {
    if (soundRef.current && isPlayingRef.current) {
      try {
        await soundRef.current.pauseAsync();
        isPlayingRef.current = false;
      } catch (error) {
        console.log("Error pausing sound:", error);
      }
    }
  }, []);

  const resumeSound = useCallback(async () => {
    if (soundRef.current && !isPlayingRef.current) {
      try {
        await soundRef.current.playAsync();
        isPlayingRef.current = true;
      } catch (error) {
        console.log("Error resuming sound:", error);
      }
    }
  }, []);

  const playSound = useCallback(
    async (soundSource: AVPlaybackSource | string) => {
      try {
        // Stop any currently playing sound
        await stopSound();

        // Handle string paths (for require() imports)
        let source = soundSource;
        if (typeof soundSource === "string" && soundSource.includes("mp3")) {
          source = { uri: soundSource };
        }

        // Create and play new sound
        const { sound: soundResponse } = await Audio.Sound.createAsync(
          source as AVPlaybackSource,
          { shouldPlay: true, isLooping: false },
        );

        if (soundResponse) {
          soundRef.current = soundResponse;
          isPlayingRef.current = true;

          // Set up status update listener
          soundResponse.setOnPlaybackStatusUpdate((status) => {
            if (status.isLoaded && status.didJustFinish) {
              isPlayingRef.current = false;
            }
          });

          // Return the sound object so caller can control it if needed
          return soundResponse;
        }
      } catch (error) {
        console.log("Error in playSound:", error);
        throw error;
      }
    },
    [stopSound],
  );

  // Cleanup function to stop and unload sound
  const cleanup = useCallback(async () => {
    await stopSound();
  }, [stopSound]);

  return {
    playSound,
    stopSound,
    pauseSound,
    resumeSound,
    cleanup,
    get isPlaying() {
      return isPlayingRef.current;
    },
    get currentSound() {
      return soundRef.current;
    },
  };
};

export default useSound;
