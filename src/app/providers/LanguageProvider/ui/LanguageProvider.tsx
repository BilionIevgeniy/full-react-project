// src/providers/LanguageProvider/LanguageProvider.tsx
import React, { ReactNode } from 'react';
import { useLanguageSwitcher } from 'shared/hooks/useLanguageSwitcher'; // Твой хук
import { LanguageContext } from '../lib/LanguageContext';

interface LanguageProviderProps {
	children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
	const value = useLanguageSwitcher();

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
