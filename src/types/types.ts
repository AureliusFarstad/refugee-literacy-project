import { AVPlaybackSource } from "expo-av";

export interface IActivity {
  id: string;
  numberOfTimesCorrectAnswerGiven: number;
  type: "MATCH_THE_SOUND";
  correctAnswer: IOption;
  audio: AVPlaybackSource;
  options: IOption[];
}
