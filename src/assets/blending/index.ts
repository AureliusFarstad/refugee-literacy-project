// ===== index.ts =====
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

// Re-export sources
export { BLENDING_AUDIO_SOURCES } from "./audio-sources";
export { BLENDING_IMAGE_SOURCES } from "./image-sources";

// Utils
import { BLENDING_AUDIO_SOURCES } from "./audio-sources";
import { BLENDING_IMAGE_SOURCES } from "./image-sources";

// Helper function to get all words from a specific level
export const getWordsForLevel = (
  level: keyof typeof BLENDING_WORD_LIST_BY_LEVEL,
) => {
  return BLENDING_WORD_LIST_BY_LEVEL[level];
};

// Type-safe function to get audio for a word
export const getAudioForWord = (word: AllValidWords) => {
  return BLENDING_AUDIO_SOURCES[word]?.file;
};

// Type-safe function to get image for a word
export const getImageForWord = (word: AllValidWords) => {
  return BLENDING_IMAGE_SOURCES[word];
};

// These functions guarantee the file exists (no casting needed!)
export const requireAudioForWord = (word: AllValidWords): string => {
  const audio = BLENDING_AUDIO_SOURCES[word]?.file;
  if (!audio) {
    throw new Error(`Audio file not found for word: ${word}`);
  }
  return audio as string; // Safe cast since we checked
};

export const requireImageForWord = (word: AllValidWords): any => {
  const image = BLENDING_IMAGE_SOURCES[word]?.file;
  if (!image) {
    throw new Error(`Image file not found for word: ${word}`);
  }
  return image; // Safe since we checked
};

// Helper function to check if image exists for a word
export const hasImageForWord = (
  word: AllValidWords,
): word is keyof typeof BLENDING_IMAGE_SOURCES => {
  return word in BLENDING_IMAGE_SOURCES;
};

// Helper function to check if audio exists for a word
export const hasAudioForWord = (
  word: AllValidWords,
): word is keyof typeof BLENDING_AUDIO_SOURCES => {
  return word in BLENDING_AUDIO_SOURCES;
};

// Get words that are missing audio or image (useful for development)
export const getIncompleteWords = () => {
  const allWords = Object.values(BLENDING_WORD_LIST_BY_LEVEL).flat();
  return {
    missingAudio: allWords.filter(
      (word) => !hasAudioForWord(word as AllValidWords),
    ),
    missingImage: allWords.filter(
      (word) => !hasImageForWord(word as AllValidWords),
    ),
  };
};
