import type { AudioSource } from "expo-audio";
import { useAudioPlayer } from "expo-audio";
import { activateKeepAwakeAsync, deactivateKeepAwake } from "expo-keep-awake";
import { useEffect } from "react";

/**
 * A custom hook for playing sounds with the expo-audio library
 * Provides a simple API with isPlaying status
 */
const useSoundWithFeedback = () => {
  // Create a player instance without initial source
  const player = useAudioPlayer();

  // Get the isPlaying status directly from the player
  const isPlaying = player.playing;

  // Keep screen awake while playing
  useEffect(() => {
    if (isPlaying) {
      activateKeepAwakeAsync("sound-feedback");
    } else {
      deactivateKeepAwake("sound-feedback");
    }

    return () => {
      deactivateKeepAwake("sound-feedback");
    };
  }, [isPlaying]);

  /**
   * Plays a sound from the given source
   * @param soundSource The audio source to play
   */
  const playSound = async (soundSource: AudioSource | string) => {
    try {
      // Convert string URLs to proper source object if needed
      if (typeof soundSource === "string" && soundSource.includes("mp3")) {
        soundSource = { uri: soundSource };
      }

      // Replace current source with new one
      player.replace(soundSource as AudioSource);

      // Play the sound
      player.play();
    } catch (error) {
      console.log("error in playSound", error);
      throw error;
    }
  };

  /**
   * Pauses the currently playing sound
   */
  const pauseSound = () => {
    player.pause();
  };

  /**
   * Resumes playing the current sound
   */
  const resumeSound = () => {
    player.play();
  };

  // Cleanup on unmount (player is automatically managed by the hook)
  useEffect(() => {
    return () => {
      // Note: No need to manually call unloadAsync as with expo-av
      // The useAudioPlayer hook handles cleanup automatically
    };
  }, []);

  return {
    playSound,
    pauseSound,
    resumeSound,
    isPlaying,
  };
};

export default useSoundWithFeedback;
