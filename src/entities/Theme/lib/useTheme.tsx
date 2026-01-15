import { ThemeContext } from 'entities/Theme/model/ThemeContext';
import { useContext } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContextType,
    UseThemeResult,
} from '../model/types';

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.NORMAL : Theme.DARK;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        setTheme(newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
};
