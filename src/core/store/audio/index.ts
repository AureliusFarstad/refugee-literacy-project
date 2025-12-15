import type { Sound } from "expo-av/build/Audio";
import { create } from "zustand";

import { createSelectors } from "@/core/utils";

interface AudioState {
    currentSound: Sound | null;
    isPlaying: boolean;
    stopAllAudio: () => Promise<void>;
    registerSound: (sound: Sound) => Promise<void>;
    clearCurrentSound: () => void;
}

const useAudioStoreBase = create<AudioState>()((set, get) => ({
    currentSound: null,
    isPlaying: false,

    stopAllAudio: async () => {
        const { currentSound } = get();
        if (currentSound) {
            try {
                const status = await currentSound.getStatusAsync();
                if (status.isLoaded) {
                    await currentSound.stopAsync();
                    await currentSound.unloadAsync();
                }
            } catch (error) {
                console.warn("[AudioStore] Error stopping audio:", error);
            }
            set({ currentSound: null, isPlaying: false });
        }
    },

    registerSound: async (sound: Sound) => {
        // register the new sound - caller is responsible for stopping previous audio first
        set({ currentSound: sound, isPlaying: true });
    },

    clearCurrentSound: () => {
        set({ currentSound: null, isPlaying: false });
    },
}));

export const useAudioStore = createSelectors(useAudioStoreBase);


export const audioStoreActions = {
    stopAllAudio: () => useAudioStoreBase.getState().stopAllAudio(),
    registerSound: (sound: Sound) =>
        useAudioStoreBase.getState().registerSound(sound),
    clearCurrentSound: () => useAudioStoreBase.getState().clearCurrentSound(),
};
