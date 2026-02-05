import { createContext } from 'react';
import { defaultTheme, ThemeContextType } from './types';

export const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  setTheme: () => {},
});
