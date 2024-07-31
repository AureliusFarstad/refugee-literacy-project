import {
  LessonFiveIllustration,
  LessonFourIllustration,
  LessonOneTeacherTipIcon,
  LessonThreeIcon,
  SatpinIcon,
} from "../icons";

export type IllustrationName =
  | "lesson-one-icon"
  | "satpin-icon"
  | "lesson-three-icon"
  | "lesson-four-illustration"
  | "lesson-five-illustration";

type IllustrationsType = {
  [K in IllustrationName]: JSX.Element;
};

const Illustrations: IllustrationsType = {
  "lesson-one-icon": <LessonOneTeacherTipIcon />,
  "satpin-icon": <SatpinIcon />,
  "lesson-three-icon": <LessonThreeIcon />,
  "lesson-four-illustration": <LessonFourIllustration />,
  "lesson-five-illustration": <LessonFiveIllustration />,
};

export type IllustrationProps = {
  name: keyof typeof Illustrations;
};

const Illustration = ({ name }: IllustrationProps) => {
  return Illustrations[name];
};

export default Illustration;
