import React from 'react';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/MainIcon.svg';
import AboutUsIcon from 'shared/assets/icons/AboutUsIcon.svg';
import ProfileIcon from 'shared/assets/icons/ProfileIcon.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Main',
    Icon: MainIcon
  },
  {
    path: RoutePath.about,
    text: 'About',
    Icon: AboutUsIcon
  },
  {
    path: RoutePath.profile,
    text: 'Profile Page',
    Icon: ProfileIcon
  },
];