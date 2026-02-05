import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Button } from 'shared/ui';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className = '' }: SidebarProps) {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = React.useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button className={cls.button} onClick={onToggle}>
        {t('toggle_btn')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
