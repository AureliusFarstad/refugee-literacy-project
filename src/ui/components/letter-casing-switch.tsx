import { Switch } from "../checkbox";

type LowerCaseSwitchProps = {
  isLowercase: boolean;
  setIsLowercase: (value: boolean) => void;
  letter: string;
};

const LetterCaseSwitch = ({
  isLowercase,
  setIsLowercase,
  letter,
}: LowerCaseSwitchProps) => {
  return (
    <Switch.Root
      checked={isLowercase}
      onChange={setIsLowercase}
      accessibilityLabel="switch"
      className="pb-2"
    >
      <Switch.Icon checked={isLowercase} label={letter} />
    </Switch.Root>
  );
};

export default LetterCaseSwitch;
