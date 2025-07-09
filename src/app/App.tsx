import { useTheme } from 'app/providers/ThemeProvider';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useLanguageContext } from './providers/LanguageProvider';
import { AppRouter } from './providers/router';
import './styles/index.scss';

function App() {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const { isI18nReady, isLoading } = useLanguageContext();
    if (!isI18nReady || isLoading) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    fontSize: '24px',
                    color: '#333',
                }}
            >
                {t('Идет загрузка... Пожалуйста, подождите.')}
            </div>
        );
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
}

export default App;
