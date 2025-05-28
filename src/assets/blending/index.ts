import { useUser } from '@/core/store/user';



// Types
export type IBlending_Word_List = {
  [key: string]: string[];
};

// Word Lists
export const BLENDING_WORD_LIST_BY_LEVEL: IBlending_Word_List = {
  LEVEL_1: ["tin", "pin", "pan", "ant", "in", "tap"],
  LEVEL_2: ["sit"],
};

// Extract all valid words from all levels automatically
export type AllValidWords =
  (typeof BLENDING_WORD_LIST_BY_LEVEL)[keyof typeof BLENDING_WORD_LIST_BY_LEVEL][number];

// Audio source type for blending words where keys are from list above.
export type IBlending_Audio_Source = Partial<
  Record<AllValidWords, { file: string }>
>;

// Image sources with the same type safety
export type IBlending_Image_Source = Partial<
  Record<AllValidWords, { file: any }>
>;

// Utils
import { 
  AUDIO_SOURCES_BY_LANGUAGE, 
  ENGLISH_BLENDING_AUDIO
} from './audio-sources';
import { BLENDING_IMAGE_SOURCES } from "./image-sources";

// Helper function to get all words from a specific level
export const getWordsForLevel = (
  level: keyof typeof BLENDING_WORD_LIST_BY_LEVEL,
) => {
  return BLENDING_WORD_LIST_BY_LEVEL[level];
};

// These functions guarantee the file exists (no casting needed!)
// REPLACE:export const requireAudioForWord = (word: AllValidWords): string => {
// ALWAYS returns English audio
export const requireEnglishAudioForWord = (word: AllValidWords): string => {
  const audio = ENGLISH_BLENDING_AUDIO[word]?.file;
  if (!audio) {
    throw new Error(`English audio file not found for word: ${word}`);
  }
  return audio as string;
};

export const requireNativeAudioForWord = (word: AllValidWords): string => {
  // Get current language from store - getState() is performant and doesn't cause re-renders
  const { language } = useUser.getState();
  
  const audioSource = AUDIO_SOURCES_BY_LANGUAGE[language as keyof typeof AUDIO_SOURCES_BY_LANGUAGE];
  
  const audio = audioSource[word]?.file;
  if (!audio) {
    // Fallback to English if native language doesn't have the word
    return requireEnglishAudioForWord(word);
  }
  return audio as string;
};

export const requireImageForWord = (word: AllValidWords): any => {
  const image = BLENDING_IMAGE_SOURCES[word]?.file;
  if (!image) {
    throw new Error(`Image file not found for word: ${word}`);
  }
  return image; // Safe since we checked
};


// TODO: Make work for all languages...
// // Helper function to check if image exists for a word
// export const hasImageForWord = (
//   word: AllValidWords,
// ): word is keyof typeof BLENDING_IMAGE_SOURCES => {
//   return word in BLENDING_IMAGE_SOURCES;
// };

// // Helper function to check if audio exists for a word
// export const hasAudioForWord = (
//   word: AllValidWords,
// ): word is keyof typeof BLENDING_AUDIO_SOURCES => {
//   return word in BLENDING_AUDIO_SOURCES;
// };

// // Get words that are missing audio or image (useful for development)
// export const getIncompleteWords = () => {
//   const allWords = Object.values(BLENDING_WORD_LIST_BY_LEVEL).flat();
//   return {
//     missingAudio: allWords.filter(
//       (word) => !hasAudioForWord(word as AllValidWords),
//     ),
//     missingImage: allWords.filter(
//       (word) => !hasImageForWord(word as AllValidWords),
//     ),
//   };
// };
