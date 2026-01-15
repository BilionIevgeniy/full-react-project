import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { LangSwitcher } from 'features/LangSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar(props: NavbarProps) {
    const { className = '' } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    className={className}
                    to="/"
                    theme={AppLinkTheme.PRIMARY}
                >
                    {t('Home')}
                </AppLink>
                <AppLink
                    className={className}
                    to="/about"
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('About')}
                </AppLink>
            </div>
            <LangSwitcher className={className} />
        </div>
    );
}
