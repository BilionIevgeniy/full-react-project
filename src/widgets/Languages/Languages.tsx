// src/components/Languages.tsx
import React from 'react';
import { useTranslation } from 'react-i18next'; // Если используешь useTranslation
import { useLanguageSwitcher } from 'shared/hooks/useLanguageSwitcher';

/**
 * Компонент для выбора языка с помощью выпадающего списка (select).
 */
export const Languages: React.FC = () => {
	const { t } = useTranslation(); // Для получения функции перевода (например, для метки селекта)
	const { isI18nReady, currentLanguage, changeLanguage, availableLanguages } = useLanguageSwitcher();

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const newLang = event.target.value;
		changeLanguage(newLang);
	};

	if (!isI18nReady) {
		// Можно отобразить что-то другое, пока i18next загружается
		return (
			<select disabled>
				<option>Загрузка...</option>
			</select>
		);
	}

	return (
		<div>
			{/* Опционально: метка для селекта, можно перевести через t() */}
			<label htmlFor="language-select">{t('select_language_label', 'Выбрать язык:')}</label>
			<select id="language-select" value={currentLanguage} onChange={handleChange}>
				{availableLanguages.map((lang: { code: string; name: string }) => (
					<option key={lang.code} value={lang.code}>
						{lang.name}
					</option>
				))}
			</select>
		</div>
	);
};
