import React from 'react';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/MainIcon.svg';
import AboutUsIcon from 'shared/assets/icons/AboutUsIcon.svg';
import ProfileIcon from 'shared/assets/icons/ProfileIcon.svg';
import ArticlesIcon from 'shared/assets/icons/articleIcon.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Main Page',
    Icon: MainIcon
  },
  {
    path: RoutePath.about,
    text: 'About Page',
    Icon: AboutUsIcon
  },
  {
    path: RoutePath.profile,
    text: 'Profile Page',
    Icon: ProfileIcon,
    authOnly: true
  },
  {
    path: RoutePath.articles,
    text: 'Articles Page',
    Icon: ArticlesIcon,
    authOnly: true
  },
];