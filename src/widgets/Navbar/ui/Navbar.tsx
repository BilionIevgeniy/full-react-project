import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink to="/" theme={AppLinkTheme.PRIMARY}>
					Home
				</AppLink>
				<AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
					About
				</AppLink>
			</div>
			<LangSwitcher />
		</div>
	);
};
