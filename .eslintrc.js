module.exports = {
	// Определяем среду, в которой будет выполняться код
	env: {
		browser: true, // Добавляет глобальные переменные браузера (window, document и т.д.)
		es2021: true, // Добавляет все глобальные переменные ECMAScript 2021
		node: true, // Добавляет глобальные переменные Node.js
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
		ecmaVersion: 12, // Версия ECMAScript
		sourceType: 'module', // Позволяет использовать импорты/экспорты
		project: './tsconfig.json', // Путь к файлу tsconfig.json для TypeScript-правил
	},
	// Плагины, которые добавляют дополнительные правила или функционал
	plugins: [
		'react',
		'@typescript-eslint',
		'prettier', // Плагин Prettier для ESLint
	],
	// Глобальные настройки для плагинов
	settings: {
		react: {
			version: 'detect', // Автоматически определять версию React
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'], // Добавляем TypeScript-расширения для импортов
			},
			typescript: {
				// Добавляем резолвер для TypeScript
				alwaysTryTypes: true,
			},
		},
	},
	// Основные правила ESLint
	rules: {
		// === Правила, связанные с форматированием, которые делегируются Prettier ===
		'prettier/prettier': ['error', { useTabs: true, tabWidth: 2 }], // Основное правило Prettier.
		// Здесь мы повторно указываем useTabs и tabWidth,
		// чтобы ESLint знал, какой стиль форматирования ожидать от Prettier.
		// Хотя Prettier берет их из .prettierrc,
		// это помогает избежать конфликтов и делает правило 'prettier/prettier' явным.
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
		'jsx-a11y/no-static-element-interactions': 'off', // Отключаем, если есть необходимость использовать click/keypress на неинтерактивных элементах
		'jsx-a11y/click-events-have-key-events': 'off', // Отключаем, если есть необходимость
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
				tabWidth: 2, // Ширина таба для расчета длины
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
	},
};
