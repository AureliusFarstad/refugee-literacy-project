import { create } from "zustand";

import { createSelectors } from "@/core/utils";

interface AuthState {
  status: "idle";
  hydrate: () => void;
}

const useAuthStore = create<AuthState>(() => ({
  status: "idle",
  hydrate: () => {},
}));

export const useAuth = createSelectors(useAuthStore);
