// A function with no arguments and returns a type.
type F0<RT = void> = () => RT;
// A function that takes an argument and returns a type.
type F1<T, RT = void> = (arg: T) => RT;

interface ILevel {
  id: string;
  title: string;
  modules: ISublevel[];
}

interface ISublevel {
  id: string;
  title: string;
  sections: ISection[];
}

interface ISection {
  id: string;
  icon: string;
  title: string;
  completed: boolean;
  metadata: Metadata;
  activities: IActivity[];
}

interface Option {
  id: string;
  title: string;
}

interface IMetadata {
  description: string;
  keywords: string[];
}

type DynamicModalRefType = {
  showDynamicModal: () => void;
  hideDynamicModal: () => void;
};

interface IOption {
  id: string;
  title: string;
}

interface IActivity {
  id: string;
  numberOfTimesCorrectAnswerGiven: number;
  type: "MATCH_THE_LETTER" | "MATCH_THE_SOUND" | "MATCH_THE_NAME";
  character: string;
  correctAnswer: Option;
  audio: AVPlaybackSource;
  options: Option[];
  sound: {
    alphabeticAudioSrc: AVPlaybackSource;
    phoneticAudioSrc: AVPlaybackSource;
  };
  letter: {
    lowerCase: string;
    upperCase: string;
  };
  animatedLetters?: {
    lowerCase: string;
    upperCase: string;
  };
  letters?: string[];
  progress?: {
    lowercaseReadCount: number;
    uppercaseReadCount: number;
    phoneticSoundPlayCount: number;
    alphabeticSoundPlayCount: number;
  };
  nameAndSoundActivityProgress?: ILetterSoundAndNameProgress;
}

interface IActivityWithSoundAndName {
  id: string;
  numberOfTimesCorrectAnswerGiven: number;
  type: "MATCH_THE_LETTER" | "MATCH_THE_SOUND" | "MATCH_THE_NAME";
  correctAnswer: Option;
  audio: AVPlaybackSource;
  options: Option[];
}

interface ILesson {
  id: string;
  image: string;
  title: string;
  description: string;
  path: string;
  isFinished: boolean;
  progressBarColor: string;
}

interface ILetter {
  id: string;
  value: string;
}

interface ILetterIntroductionProgress {
  lowercaseReadCount: number;
  uppercaseReadCount: number;
  phoneticSoundPlayCount: number;
  alphabeticSoundPlayCount: number;
}

interface ILetterSoundAndNameProgress {
  uppercaseSoundCount: number;
  lowercaseSoundCount: number;
}

interface AudioPlayerStatus {
  isLoaded: boolean;
  isPlaying: boolean;
  isBuffering: boolean;
  positionMillis?: number;
  durationMillis?: number;
  didJustFinish: boolean;
}
