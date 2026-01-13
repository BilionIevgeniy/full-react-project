import { createContext } from 'react';
import { defaultTheme, ThemeContextType } from '../../../types/ThemeTypes';

export const ThemeContext = createContext<ThemeContextType>({
    theme: defaultTheme,
    setTheme: () => {},
});
