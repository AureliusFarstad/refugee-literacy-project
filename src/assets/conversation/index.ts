import { useUser } from "@/core/store/user";

import {
  AUDIO_SOURCES_BY_LANGUAGE,
  ENGLISH_CONVERSATION_AUDIO,
} from "./audio-sources";

export type IConversation_Audio_Source = {
  [key: string]: {
    female: string;
    male: string;
  };
};

type Gender = "female" | "male";

export const requireEnglishConversationAudio = (
  part: string,
  gender: Gender,
): string => {
  const audio = ENGLISH_CONVERSATION_AUDIO[part]?.[gender];
  if (!audio) {
    throw new Error(
      `English audio file not found for word: ${part}, ${gender}`,
    );
  }
  return audio;
};

export const requireNativeConversationAudio = (
  part: string,
  gender: Gender,
): string => {
  const { language } = useUser.getState();

  const audioSource =
    AUDIO_SOURCES_BY_LANGUAGE[
      language as keyof typeof AUDIO_SOURCES_BY_LANGUAGE
    ];

  const audio = audioSource[part]?.[gender];
  if (!audio) {
    // Fallback to English if native language doesn't have the word
    return requireEnglishConversationAudio(part, gender);
  }
  return audio;
};
