import { createSelector } from '@reduxjs/toolkit';
import { getAuthUserData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/MainIcon.svg';
import AboutUsIcon from 'shared/assets/icons/AboutUsIcon.svg';
import ProfileIcon from 'shared/assets/icons/ProfileIcon.svg';
import ArticlesIcon from 'shared/assets/icons/articleIcon.svg';
import { SidebarItemType } from 'widgets/Sidebar/model/types/sidebar';

export const getSidebarItems = createSelector(
  getAuthUserData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        text: 'Main',
        Icon: MainIcon
      },
      {
        path: RoutePath.about,
        text: 'About',
        Icon: AboutUsIcon
      }
    ];
    if (userData) {
      sidebarItemsList.push({
        path: `${RoutePath.profile}/${userData.id}`,
        text: 'Profile',
        Icon: ProfileIcon,
        authOnly: true
      },
      {
        path: RoutePath.articles,
        text: 'Articles',
        Icon: ArticlesIcon,
        authOnly: true
      });
    }
    return sidebarItemsList;
  }
);