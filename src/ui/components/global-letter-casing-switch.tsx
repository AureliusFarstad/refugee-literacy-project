// LetterCaseSwitch.tsx
import { Switch } from "../checkbox"
import { useLetterCase } from '@/ui/core/headers/letter-case-context'

const LetterCaseSwitch = () => {
  const { isLowercase, setIsLowercase } = useLetterCase()

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
  )
}

export default LetterCaseSwitch