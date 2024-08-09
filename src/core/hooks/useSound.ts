import type { AVPlaybackSource } from "expo-av";
import { Audio } from "expo-av";
import type { Sound } from "expo-av/build/Audio";
import { useEffect, useState } from "react";

const useSound = () => {
  const [sound, setSound] = useState<Sound>();

  const playSound = async (soundSource: AVPlaybackSource) => {
    try {
      const { sound: soundResponse } =
        await Audio.Sound.createAsync(soundSource);
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
  return { playSound };
};

export default useSound;