import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface AppState {
  isLoading: boolean;
  error: string | null;
  theme: Theme;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useAppStore = create<AppState, [['zustand/persist', { theme: Theme }]]>(
  persist(
    (set) => ({
      isLoading: false,
      error: null,
      theme: 'light',
      setLoading: (loading) => set({ isLoading: loading }),
      setError: (error) => set({ error }),
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
    }),
    {
      name: 'app-store',
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);
