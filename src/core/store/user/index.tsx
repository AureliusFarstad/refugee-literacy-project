import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { zustandStorage } from "@/core/storage";
import { createSelectors } from "@/core/utils";

export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fa", label: "فارسی" }, // Farsi
  { code: "fa_AF", label: "دری" }, // Dari
  { code: "ku", label: "Kurmancî" }, // Kurmanji
  { code: "ar_SY", label: "العربية السورية" }, // Syrian Arabic
];

// Derive the type from the array
type LanguageType = "DEFAULT" | (typeof SUPPORTED_LANGUAGES)[number]["code"];

interface UserState {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      language: "DEFAULT",
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
