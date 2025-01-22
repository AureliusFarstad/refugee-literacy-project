import type { AVPlaybackSource } from "expo-av";
import { Audio } from "expo-av";
import type { Sound } from "expo-av/build/Audio";
import { useEffect, useState } from "react";

const useSound = () => {
  const [sound, setSound] = useState<Sound>();

  const playSound = async (soundSource: AVPlaybackSource | string) => {
    try {
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
  return { playSound };
};

export default useSound;
