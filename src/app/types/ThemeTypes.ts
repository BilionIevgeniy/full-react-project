enum Theme {
    NORMAL = 'normal',
    DARK = 'dark',
}
const LOCAL_STORAGE_THEME_KEY = 'theme';
const defaultTheme = Theme.NORMAL;

interface ThemeContextType {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export {
    Theme,
    LOCAL_STORAGE_THEME_KEY,
    defaultTheme,
    ThemeContextType,
    UseThemeResult,
};
