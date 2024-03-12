import { AVPlaybackSource } from "expo-av";

export interface IActivity {
  id: string;
  numberOfTimesCorrectAnswerGiven: number;
  type: "MATCH_THE_SOUND";
  correctAnswer: IOption;
  audio: AVPlaybackSource;
  options: IOption[];
}

export interface ILetterIntroductionActivity {
  id: string;
  numberOfTimesCorrectAnswerGiven: number;
  type: "LETTER_INTRODUCTION";
  character: string;
  letter: {
    lowerCase: "s";
    upperCase: "S";
  };
  sound: {
    letterSoundSrc: AVPlaybackSource;
    phoneticSoundSrc: AVPlaybackSource;
  };
}
