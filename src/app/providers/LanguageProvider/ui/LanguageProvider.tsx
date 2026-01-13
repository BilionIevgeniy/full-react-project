import React, { ReactNode } from 'react';
import { useLanguageSwitcher } from 'features/LangSwitcher/lib/useLanguageSwitcher';
import { LanguageContext } from '../lib/LanguageContext';

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
    children,
}) => {
    const value = useLanguageSwitcher();

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
