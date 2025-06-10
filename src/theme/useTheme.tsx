import {useContext} from 'react';
import {ThemeContext} from './ThemeContext';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContextType, UseThemeResult} from './types';

export const useTheme = (): UseThemeResult => {
	const {theme, setTheme} = useContext<ThemeContextType>(ThemeContext);

	const toggleTheme = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
		setTheme(newTheme);
	};

	return {
		theme,
		toggleTheme,
	};
};
