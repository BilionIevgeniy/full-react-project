import { createContext } from 'react';
import { LanguageContextProps } from './types';

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined,
);
