import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation();
    return <h1>{t('welcome_msg')}</h1>;
}

export default MainPage;
