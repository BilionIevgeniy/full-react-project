import React, { FC } from 'react';
import {
  defaultTheme,
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
  ThemeContextType,
} from 'entities/Theme/';

export const ThemeProvider: FC = ({ children }) => {
  const storedTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || defaultTheme;
  const [theme, setTheme] = React.useState(storedTheme);
  const initialValue: ThemeContextType = React.useMemo(
    () => ({ theme, setTheme }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={initialValue}>
      {children}
    </ThemeContext.Provider>
  );
};
