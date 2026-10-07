import { create } from 'zustand';

export type ThemePreference = 'system' | 'light' | 'dark';

interface UiState {
  themePreference: ThemePreference;
  setThemePreference: (value: ThemePreference) => void;
}

export const useUiStore = create<UiState>((set) => ({
  themePreference: 'system',
  setThemePreference: (themePreference) => set({ themePreference }),
}));
