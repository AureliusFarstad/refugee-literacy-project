import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { zustandStorage } from "@/core/storage";
import { createSelectors } from "@/core/utils";

// TODO: add more languages
type LanguageType = "en" | "zh" | "ja" | "ko";

interface UserState {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      language: "en",
      setLanguage: (language) => set(() => ({ language })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);

export const useUser = createSelectors(useUserStore);

/**
 * Usage:
 * 1. const { language, setLanguage } = useUser();
 * 2. setLanguage("zh");
 */
