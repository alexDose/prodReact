import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import { memo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
    className?: string
}

const SidebarComponent = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);
  
  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div data-testid='sidebar' className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}> 
      <Button
        data-testid='sidebar-toggle'
        className={styles.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        {sidebarItemsList.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher short={collapsed}/>
      </div>
    </div>
  );
};

export const Sidebar = memo(SidebarComponent);