import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {useTranslation} from 'react-i18next';
import cls from './SidebarItem.module.scss';
import {memo} from 'react';
import { SidebarItemType } from 'widgets/Sidebar/model/types/sidebar';

interface Props {
    item: SidebarItemType
    collapsed: boolean
}

const SidebarItemComponent = ({item, collapsed}: Props) => {
  const {path, Icon, text} = item;
  const {t} = useTranslation();

  return (
    <AppLink
      className={cls.item}
      theme={AppLinkTheme.SECONDARY}
      to={path}>
      <Icon className={cls.icon}/>
      {!collapsed && <span className={cls.link}>{t(text)}</span>}
    </AppLink>
  );
};

export const SidebarItem = memo(SidebarItemComponent);