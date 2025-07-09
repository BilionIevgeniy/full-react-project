module.exports = {
	// Определяем среду, в которой будет выполняться код
	env: {
		browser: true, // Добавляет глобальные переменные браузера (window, document и т.д.)
		es2021: true, // Добавляет все глобальные переменные ECMAScript 2021
		jest: true, // Добавляет глобальные переменные Jest для тестирования
	},
	// Конфигурации, которые расширяют набор правил
	extends: [
		'eslint:recommended', // Базовые рекомендуемые правила ESLint
		'plugin:react/recommended', // Рекомендуемые правила для React
		'plugin:react-hooks/recommended', // Рекомендуемые правила для React Hooks
		'plugin:@typescript-eslint/recommended', // Рекомендуемые правила для TypeScript от ESLint
		'airbnb', // Популярный набор правил Airbnb для JS
		'airbnb-typescript', // Airbnb правила для TypeScript
		'plugin:prettier/recommended', // Важно: Отключает конфликтующие правила ESLint и включает правило prettier/prettier
	],
	// Парсер, который ESLint будет использовать для анализа кода
	parser: '@typescript-eslint/parser', // Используем парсер TypeScript
	// Настройки парсера
	parserOptions: {
		ecmaFeatures: {
			jsx: true, // Разрешаем парсеру понимать JSX
		},
		ecmaVersion: 'latest', // Версия ECMAScript
		sourceType: 'module', // Позволяет использовать импорты/экспорты
		project: './tsconfig.json', // Путь к файлу tsconfig.json для TypeScript-правил
		tsconfigRootDir: __dirname,
	},
	// Плагины, которые добавляют дополнительные правила или функционал
	plugins: [
		'react',
		'@typescript-eslint',
		'i18next', // Плагин для работы с i18next
		'prettier', // Плагин Prettier для ESLint
	],
	settings: {
		react: {
			version: 'detect', // Автоматически определять версию React
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true, // Всегда пытаться разрешать типы из TypeScript
				project: './tsconfig.json',
			},
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	rules: {
		'@typescript-eslint/naming-convention': 'off',
		// === Правила, связанные с форматированием, которые делегируются Prettier ===
		// Делегируем все правила форматирования Prettier.
		// Prettier будет автоматически использовать конфигурацию из файла .prettierrc.json
		'prettier/prettier': 'error',
		indent: 'off', // Отключаем стандартное правило indent ESLint, т.к. его обрабатывает Prettier
		'react/jsx-indent': 'off', // Отключаем, т.к. Prettier управляет этим
		'react/jsx-indent-props': 'off', // Отключаем, т.к. Prettier управляет этим
		'linebreak-style': 'off', // Prettier также управляет переносами строк

		// === Общие правила, которые ты часто настраиваешь ===
		'no-console': ['warn', { allow: ['warn', 'error', 'info'] }], // Разрешить warn, error, info
		'import/prefer-default-export': 'off', // Не требовать дефолтный экспорт
		'no-underscore-dangle': 'off', // Разрешить висячие подчеркивания (например, _id)
		'react/jsx-props-no-spreading': 'off', // Разрешить использование spread-оператора для props
		'react/require-default-props': 'off', // Не требовать defaultProps для необязательных пропсов (для TS это менее актуально)
		// 'jsx-a11y/no-static-element-interactions': 'off', // Отключаем, если есть необходимость использовать click/keypress на неинтерактивных элементах
		// 'jsx-a11y/click-events-have-key-events': 'off', // Отключаем, если есть необходимость
		'react/react-in-jsx-scope': 'off', // Отключаем для React 17+ (новый JSX Transform)
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }], // Разрешить JSX в .ts и .tsx файлах
		'import/extensions': [
			// Разрешить импорт без указания расширений для определенных типов файлов
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'max-len': [
			// Максимальная длина строки
			'warn',
			{
				code: 120, // Максимальная длина кода
				tabWidth: 2, // Ширина таба для расчета длины. Должна совпадать с .prettierrc.json
				comments: 120, // Максимальная длина комментариев
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
		'max-classes-per-file': ['error', 3], // Максимальное количество классов в файле (можно настроить по своему усмотрению)

		// === TypeScript-специфичные правила ===
		'@typescript-eslint/explicit-module-boundary-types': 'off', // Не требовать явные типы возвращаемого значения для экспортируемых функций
		'@typescript-eslint/no-explicit-any': 'warn', // Предупреждать об использовании 'any'
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Предупреждать о неиспользуемых переменных (игнорировать те, что начинаются с _)
		// Airbnb правило, которое конфликтует с TypeScript и должно быть отключено
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'], // Используем версию no-shadow от TypeScript ESLint

		// === Правила, которые можно отключить при использовании TypeScript ===
		// Отключаем, так как TypeScript обеспечивает проверку типов
		'react/prop-types': 'off',
		'react/button-has-type': 'off',

		// === Правило для определения компонентов ===
		// Разрешаем использовать как function declaration, так и стрелочные функции для компонентов
		'react/function-component-definition': ['error', { namedComponents: ['function-declaration', 'arrow-function'] }],

		// === Правило для import/no-extraneous-dependencies ===
		'import/no-extraneous-dependencies': [
			'error',
			{
				// Разрешаем импорт devDependencies в файлах, которые не идут в прод сборку
				devDependencies: [
					'./webpack.config.ts', // Разрешаем для корневого конфига Webpack
					'**/.storybook/**', // Разрешаем для конфигов Storybook
					'**/config/**', // все файлы в папке config (webpack, jest, storybook)
					'**/*.test.{ts,tsx}', // все тестовые файлы
					'**/*.stories.{ts,tsx}', // все файлы сториз для storybook
				],
			},
		],
		'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['to', 'target', 'path'] }],
	},
	globals: {
		__IS_DEV__: true,
	},
	overrides: [
		{
			// Отключаем правила, требующие информации о типах, для конфигурационных файлов
			files: ['./.eslintrc.js', './webpack.config.ts', './config/**/*.ts'],
			rules: {
				'i18next/no-literal-string': 'off',
			},
		},
	],
};
