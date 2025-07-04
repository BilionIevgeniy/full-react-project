node=17.4.0
Internationalization (i18n) - Quick Start
	This project uses Google Sheets, a NestJS backend, and i18next for translations.

	*Google Sheets: Manage translations in a central Google Spreadsheet. 
		Each sheet name acts as a namespace (e.g., common, auth). Columns must be key, en, ru, etc.

	*Backend (NestJS): Serves translations from Google Sheets. 
		Ensure GOOGLE_SPREADSHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, 
		and GOOGLE_PRIVATE_KEY are set in .env. Endpoint: /translations?lang={{lng}}&ns={{ns}}.

	*Frontend (React):

		*Setup: List all your Google Sheet names (namespaces) in ns array in src/i18n.ts.

		*Access: Use useTranslation('your_namespace') to get t() function (e.g., t('button_save')). 
			Use useTranslation() for defaultNS.

		*Switch Language: Utilize the useLanguageContext() hook from providers/LanguageProvider 
			and call changeLanguage('new_lang_code'). A loading indicator will appear during fetching.