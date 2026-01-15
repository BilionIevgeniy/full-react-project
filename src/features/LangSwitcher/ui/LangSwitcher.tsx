import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguageContext } from 'entities/Language';
import { classNames } from 'shared/lib/classNames';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}
export function LangSwitcher({ className = '' }: LangSwitcherProps) {
    const { t } = useTranslation();
    const { currentLanguage, changeLanguage, availableLanguages } =
        useLanguageContext();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = event.target.value;
        changeLanguage(newLang);
    };

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <label htmlFor="language-select">
                {t('select_language_label')}
            </label>
            <select
                id="language-select"
                value={currentLanguage}
                onChange={handleChange}
            >
                {availableLanguages.map(
                    (lang: { code: string; name: string }) => (
                        <option key={lang.code} value={lang.code}>
                            {lang.name}
                        </option>
                    ),
                )}
            </select>
        </div>
    );
}
