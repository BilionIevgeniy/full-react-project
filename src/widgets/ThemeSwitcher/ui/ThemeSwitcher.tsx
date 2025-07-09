import { useTheme } from 'app/providers/ThemeProvider';
import BlackIcon from 'shared/assets/icons/theme-dark.svg';
import WhiteIcon from 'shared/assets/icons/theme-light.svg';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

const BtnByTheme = {
    normal: WhiteIcon,
    dark: BlackIcon,
};

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();
    const Icon = BtnByTheme[theme] || WhiteIcon;

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [
                className,
                cls[theme],
            ])}
            onClick={toggleTheme}
        >
            <Icon />
        </Button>
    );
};
