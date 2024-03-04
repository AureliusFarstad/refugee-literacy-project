// A function with no arguments and returns a type.
type F0<RT = void> = () => RT;
// A function that takes an argument and returns a type.
type F1<T, RT = void> = (arg: T) => RT;

interface ILevel {
  id: string;
  title: string;
  sublevels: Sublevel[];
}

interface ISublevel {
  id: string;
  title: string;
  sections: Section[];
}

interface ISection {
  id: string;
  icon: string;
  title: string;
  completed: boolean;
  metadata: Metadata;
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
  type: "MATCH_THE_SOUND";
  correctAnswer: IOption;
  audio: string;
  options: IOption[];
}
