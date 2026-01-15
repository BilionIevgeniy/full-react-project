import { useCallback, useEffect, useState } from 'react';
import i18next from 'i18next';
import { initI18n } from 'shared/config/i18n/i18n';

export const useLanguage = () => {
    const [isI18nReady, setIsI18nReady] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

    const availableLanguages = [
        { code: 'en', name: 'English' },
        { code: 'ru', name: 'Russian' },
        { code: 'de', name: 'Deutsch' },
    ];

    useEffect(() => {
        const initialize = async () => {
            try {
                await initI18n; // Initialize i18next
                setIsI18nReady(true);
                setCurrentLanguage(i18next.language);
            } catch (error) {
                console.error('i18next initialization error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (!isI18nReady) {
            initialize();
        }
    }, [isI18nReady]);

    const changeLanguage = useCallback(
        async (lang: string) => {
            if (currentLanguage === lang && !isLoading) {
                console.info(`Language ${lang} is already active.`);
                return;
            }

            setIsLoading(true);

            try {
                await i18next.changeLanguage(lang);
                console.info(
                    `Language successfully changed to ${lang} (promise resolved).`,
                );
            } catch (error) {
                console.error(`Error changing language to ${lang}:`, error);
            } finally {
                setIsLoading(false);
                setCurrentLanguage(lang);
            }
        },
        [currentLanguage, isLoading],
    );

    return {
        isI18nReady,
        isLoading,
        currentLanguage,
        changeLanguage,
        availableLanguages,
    };
};
