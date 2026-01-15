import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation('aboutPage');
    return <div>{t('welcome_msg')}</div>;
}

export default AboutPage;
