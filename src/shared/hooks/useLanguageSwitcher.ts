// src/hooks/useLanguageSwitcher.ts
import { useCallback, useEffect, useState } from 'react';
import i18next from 'i18next';
import { initI18n } from 'shared/config/i18n/i18n';

export const useLanguageSwitcher = () => {
	const [isI18nReady, setIsI18nReady] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

	const availableLanguages = [
		{ code: 'en', name: 'English' },
		{ code: 'ru', name: 'Русский' },
		{ code: 'de', name: 'Deutsch' },
	];

	useEffect(() => {
		const initialize = async () => {
			try {
				await initI18n(); // Инициализируем i18next
				setIsI18nReady(true);
				setCurrentLanguage(i18next.language);
			} catch (error) {
				console.error('Ошибка инициализации i18next:', error);
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
				console.log(`Язык ${lang} уже активен.`);
				return;
			}

			setIsLoading(true);

			try {
				await i18next.changeLanguage(lang);
				console.log(`Язык успешно изменен на ${lang} (промис разрешен).`);
			} catch (error) {
				console.error(`Ошибка при смене языка на ${lang}:`, error);
			} finally {
				setIsLoading(false);
				setCurrentLanguage(lang);
			}
		},
		[isI18nReady, currentLanguage, isLoading]
	);

	return {
		isI18nReady,
		isLoading,
		currentLanguage,
		changeLanguage,
		availableLanguages,
	};
};
