import type { AVPlaybackSource } from "expo-av";
import { Audio } from "expo-av";
import type { Sound } from "expo-av/build/Audio";
import { useEffect, useState } from "react";

import { audioStoreActions } from "@/core/store/audio";

const useSound = () => {
  const [sound, setSound] = useState<Sound>();

  const playSound = async (soundSource: AVPlaybackSource | string) => {
    try {
      // Stop any currently playing audio globally
      await audioStoreActions.stopAllAudio();

      if (typeof soundSource === "string" && soundSource.includes("mp3")) {
        soundSource = { uri: soundSource };
      }
      const { sound: soundResponse } = await Audio.Sound.createAsync(
        soundSource as AVPlaybackSource,
      );
      if (soundResponse) {
        setSound(soundResponse);
      }
      await soundResponse.playAsync();

      if (soundResponse) {
        // Register with global audio store after playing to avoid race condition
        await audioStoreActions.registerSound(soundResponse);
      }
    } catch (error) {
      console.log("error in playSound", error);
      throw error;
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          try {
            sound.unloadAsync();
          } catch (e) {
            // Ignore error if sound is already unloaded
          }
        }
      : undefined;
  }, [sound]);
  return { playSound };
};

export default useSound;
