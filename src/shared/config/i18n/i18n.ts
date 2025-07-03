import i18next, { i18n } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

let instance: i18n | null = null;
let initializationPromise: Promise<any> | null = null;
const tr = 'http://localhost:3000';
export const initI18n = () => {
	if (initializationPromise) {
		return initializationPromise;
	}
	// console.log('Initializing i18next...', process.env.TRANSLATIONS_API_URL);

	initializationPromise = i18next
		.use(Backend)
		.use(LanguageDetector)
		.use(initReactI18next)
		.init({
			backend: {
				loadPath: `${tr}/translations?lang={{lng}}`,
			},
			debug: __IS_DEV__,
			fallbackLng: 'en',
			interpolation: {
				escapeValue: false,
			},
			react: {
				useSuspense: false,
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

export const getTranslationFunction = async () => {
	if (!initializationPromise) {
		throw new Error('i18next in not initialized');
	}

	await initializationPromise;
	if (!instance) {
		throw new Error('i18next was not initialized due to error');
	}
	return instance;
};
