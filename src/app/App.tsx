import { useTheme } from 'app/providers/ThemeProvider';
import { Suspense } from 'react';
import { initI18n } from 'shared/config/i18n/i18n';
import { useLanguageSwitcher } from 'shared/hooks/useLanguageSwitcher';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

initI18n();
const App = () => {
	const { theme } = useTheme();
	const { isI18nReady } = useLanguageSwitcher();
	if (!isI18nReady) {
		return <div>Загрузка переводов...</div>; // Или спиннер, пока i18next не готов
	}
	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<Navbar />
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
