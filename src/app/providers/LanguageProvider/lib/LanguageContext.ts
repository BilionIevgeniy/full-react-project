// app/providers/LanguageProvider/LanguageContext.ts
import { createContext } from 'react';

interface LanguageContextProps {
    isI18nReady: boolean;
    isLoading: boolean;
    currentLanguage: string;
    changeLanguage: (lang: string) => Promise<void>;
    availableLanguages: { code: string; name: string }[];
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
    undefined,
);
