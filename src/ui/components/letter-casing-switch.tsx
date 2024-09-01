import { Switch } from "../checkbox";

type LowerCaseSwitchProps = {
  isLowercase: boolean;
  setIsLowercase: (value: boolean) => void;
  letter: string;
  backgroundColor: string;
};

const LetterCaseSwitch = ({
  isLowercase,
  setIsLowercase,
  letter,
  backgroundColor,
}: LowerCaseSwitchProps) => {
  return (
    <Switch.Root
      checked={isLowercase}
      onChange={setIsLowercase}
      accessibilityLabel="switch"
      className="pb-2"
      backgroundColor={"white"}
    >
      <Switch.Icon
        checked={isLowercase}
        label={letter}
        backgroundColor={backgroundColor}
      />
    </Switch.Root>
  );
};

export default LetterCaseSwitch;
