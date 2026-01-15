import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from 'entities/Theme/lib/useTheme';
import { useLanguageContext } from 'entities/Language';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from './providers/router';
import './styles/index.scss';

function App() {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const { isI18nReady, isLoading } = useLanguageContext();
    if (!isI18nReady || isLoading) {
        return (
            <div className="app-loading">
                {t('Идет загрузка... Пожалуйста, подождите.')}
            </div>
        );
    }
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar className="" />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
