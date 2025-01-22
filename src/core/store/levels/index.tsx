import { create } from "zustand";

import { createSelectors } from "@/core/utils";

import { INITIAL_LEVEL_STATE } from "./constants";

interface GlobalLevelState {
  levels: ILevel[];
  updateLevels: (data: ILevel[]) => void;
}

const levelStore = create<GlobalLevelState>((set) => ({
  levels: INITIAL_LEVEL_STATE,
  updateLevels: (data: ILevel[]) => {
    set({ levels: data });
  },
}));

export const useLevelStore = createSelectors(levelStore);
