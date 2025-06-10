export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}
export const LOCAL_STORAGE_THEME_KEY = 'theme';
export const defaultTheme = Theme.LIGHT;

export interface ThemeContextType {
	theme?: Theme;
	setTheme?: (theme: Theme) => void;
}
export interface UseThemeResult {
	theme: Theme;
	toggleTheme: () => void;
}
