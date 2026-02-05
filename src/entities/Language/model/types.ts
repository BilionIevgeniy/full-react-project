export interface LanguageContextProps {
  isI18nReady: boolean;
  isLoading: boolean;
  currentLanguage: string;
  changeLanguage: (lang: string) => Promise<void>;
  availableLanguages: { code: string; name: string }[];
}
