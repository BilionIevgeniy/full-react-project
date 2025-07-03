import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
	const { t } = useTranslation();
	return <h1>{t('welcome_msg')}</h1>;
};

export default MainPage;
