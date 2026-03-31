import { create } from 'zustand';

interface AppState {
  language: 'en' | 'ta';
  setLanguage: (lang: 'en' | 'ta') => void;
  userSession: any | null; // Placeholder for actual user type
  setUserSession: (session: any) => void;
}

export const useAppStore = create<AppState>((set) => ({
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
  userSession: null,
  setUserSession: (session) => set({ userSession: session }),
}));
