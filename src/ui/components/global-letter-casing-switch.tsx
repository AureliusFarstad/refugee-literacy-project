// LetterCaseSwitch.tsx
import { useLetterCase } from "@/ui/core/headers/letter-case-context";

import { Switch } from "../checkbox";

const LetterCaseSwitch = () => {
  const { isLowercase, setIsLowercase } = useLetterCase();

  return (
    <Switch.Root
      checked={isLowercase}
      onChange={setIsLowercase}
      accessibilityLabel="switch"
      className="pb-2"
      backgroundColor="#FAFAFA"
    >
      <Switch.Icon
        checked={isLowercase}
        label={"a"}
        backgroundColor="#FAFAFA"
      />
    </Switch.Root>
  );
};

export default LetterCaseSwitch;
