import { createContext } from 'react';

interface ThemeContextType {
  isLight: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isLight: true,
  toggleTheme: () => {}, // default no op
});
