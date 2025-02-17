// LetterCaseContext.tsx
import React, { createContext, useContext, useState } from "react";

interface LetterCaseContextType {
  isLowercase: boolean;
  setIsLowercase: (value: boolean) => void;
}

const LetterCaseContext = createContext<LetterCaseContextType | undefined>(
  undefined,
);

export function LetterCaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLowercase, setIsLowercase] = useState(false);

  return (
    <LetterCaseContext.Provider value={{ isLowercase, setIsLowercase }}>
      {children}
    </LetterCaseContext.Provider>
  );
}

export function useLetterCase() {
  const context = useContext(LetterCaseContext);
  if (context === undefined) {
    throw new Error("useLetterCase must be used within a LetterCaseProvider");
  }
  return context;
}
