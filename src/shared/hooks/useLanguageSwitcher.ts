// src/hooks/useLanguageSwitcher.ts
import { useCallback, useEffect, useState } from 'react';
import i18next from 'i18next';
import { initI18n } from 'shared/config/i18n/i18n';

/**
 * Хук для управления языком в приложении.
 * Обеспечивает инициализацию i18next и предоставляет функцию для смены языка.
 */
export const useLanguageSwitcher = () => {
  const [isI18nReady, setIsI18nReady] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  // Список доступных языков. Можно получить динамически, если он хранится где-то.
  const availableLanguages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'de', name: 'Deutsch' },
    // Добавь здесь другие языки, если они есть в твоей таблице Google Sheets
  ];

  useEffect(() => {
    const initialize = async () => {
      try {
        await initI18n();
        setIsI18nReady(true);
        setCurrentLanguage(i18next.language);
      } catch (error) {
        console.error('Ошибка инициализации i18next:', error);
      }
    };

    if (!isI18nReady) {
      initialize();
    }
    
    const handleLanguageChanged = (lng: string) => {
      setCurrentLanguage(lng);
    };
    i18next.on('languageChanged', handleLanguageChanged);

    return () => {
      i18next.off('languageChanged', handleLanguageChanged);
    };
  }, [isI18nReady]);

  const changeLanguage = useCallback(async (lang: string) => {
    if (!isI18nReady) {
      console.warn('i18next еще не готов к смене языка.');
      return;
    }
    try {
      await i18next.changeLanguage(lang);
      console.log(`Язык успешно изменен на ${lang}`);
    } catch (error) {
      console.error(`Ошибка при смене языка на ${lang}:`, error);
    }
  }, [isI18nReady]);

  return {
    isI18nReady,
    currentLanguage,
    changeLanguage,
    availableLanguages, // Добавили список доступных языков
  };
};