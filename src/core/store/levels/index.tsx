import { createSelectors } from "@/core/utils";
import { create } from "zustand";
import { INITIAL_LEVEL_STATE } from "./constants";

interface GlobalLevelState {
  levels: ILevel[];
  updateLevels: (data: ILevel[]) => void;
}

const _useLevelStore = create<GlobalLevelState>((set, get) => ({
  levels: INITIAL_LEVEL_STATE,
  updateLevels: (data: ILevel[]) => {
    set({ levels: data });
  },
}));

export const useLevelStore = createSelectors(_useLevelStore);
