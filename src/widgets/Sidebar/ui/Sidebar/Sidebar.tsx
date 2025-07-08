import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export function Sidebar({ className }: SidebarProps) {
	const [collapsed, setCollapsed] = React.useState(false);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<button onClick={onToggle}>toggle</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
			</div>
		</div>
	);
}
