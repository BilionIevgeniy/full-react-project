// src/i18n.ts
import i18next, { i18n } from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector'; // Не забудь его использовать!
import { initReactI18next } from 'react-i18next';

let instance: i18n | null = null;
let initializationPromise: Promise<any> | null = null;
const tr = 'http://localhost:3000'; // Базовый URL твоего бэкенда

export const initI18n = () => {
	if (initializationPromise) {
		return initializationPromise;
	}

	initializationPromise = i18next
		.use(Backend)
		.use(LanguageDetector) // Использование LanguageDetector для автоматического определения языка
		.use(initReactI18next)
		.init({
			backend: {
				// loadPath теперь должен указывать на твой контроллер, который принимает `ns` и `lng`
				// {{lng}} будет заменено на текущий язык
				// {{ns}} будет заменено на запрашиваемый неймспейс
				loadPath: `${tr}/translations?lang={{lng}}&ns={{ns}}`,
			},
			debug: __IS_DEV__,
			fallbackLng: 'en',
			// Список всех доступных неймспейсов
			ns: ['common'], // <--- ОЧЕНЬ ВАЖНО: Определи здесь все свои листы-неймспейсы
			defaultNS: 'common', // <--- Неймспейс по умолчанию. Если не указан, берется 'common'.
			// Если ты хочешь загружать все неймспейсы при старте:
			// load: 'all',
			// Но лучше загружать по мере необходимости (lazy loading)
			// i18next-http-backend по умолчанию будет запрашивать их по мере обращения к ним.

			interpolation: {
				escapeValue: false,
			},
			react: {
				useSuspense: false, // Оставляем false для ручного isLoading
			},
		});

	initializationPromise
		.then((result) => {
			instance = result;
		})
		.catch((error) => {
			console.error('i18next initialization error', error);
		});

	return initializationPromise;
};
