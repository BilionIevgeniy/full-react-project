import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from 'entities/Theme/lib/useTheme';
import { useLanguageContext } from 'entities/Language';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import { Loader } from 'shared/ui';

function App() {
  const { theme } = useTheme();
  const { isI18nReady, isLoading } = useLanguageContext();
  if (!isI18nReady || isLoading) {
    return <Loader />;
  }
  return (
    <Suspense fallback={<Loader />}>
      <div className={classNames('app', {}, [theme])}>
        <Navbar className="" />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
