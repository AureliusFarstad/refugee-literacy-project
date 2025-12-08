import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { zustandStorage } from "@/core/storage";
import { createSelectors } from "@/core/utils";

export const SUPPORTED_LANGUAGES = [
  { code: "fa", label: "فارسی" }, // Farsi
  { code: "fa_AF", label: "دری" }, // Dari
  { code: "ar_SY", label: "العربية السورية" }, // Syrian Arabic
  { code: "ku", label: "Kurmancî" }, // Kurmanji
  { code: "en", label: "English" },
];

// Derive the type from the array
type LanguageType = "DEFAULT" | (typeof SUPPORTED_LANGUAGES)[number]["code"];

interface UserState {
  language: LanguageType;
  levelsCompleted: string[];
  setLanguage: (language: LanguageType) => void;
  addCompletedLevel: (levelId: string) => void;
  removeCompletedLevel: (levelId: string) => void;
  resetLevels: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      language: "DEFAULT",
      levelsCompleted: [],
      setLanguage: (language) => set(() => ({ language })),
      addCompletedLevel: (levelId) =>
        set((state) => ({
          levelsCompleted: state.levelsCompleted.includes(levelId)
            ? state.levelsCompleted
            : [...state.levelsCompleted, levelId],
        })),
      removeCompletedLevel: (levelId) =>
        set((state) => ({
          levelsCompleted: state.levelsCompleted.filter((id) => id !== levelId),
        })),
      resetLevels: () => set(() => ({ levelsCompleted: [] })),
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
 * 1. const { language, setLanguage, levelsCompleted, addCompletedLevel, resetLevels } = useUser();
 * 2. setLanguage("zh");
 */
