import { use, createContext } from 'react';

export const ThemeContext = createContext();

export const useThemeContext = () => {
  const context = use(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
