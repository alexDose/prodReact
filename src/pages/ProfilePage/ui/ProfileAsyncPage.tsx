import {lazy} from 'react';

export const ProfileAsyncPage = lazy(
  () => new Promise(res => {
  //@ts-ignore
    setTimeout(() => res(import('./ProfilePage')), 1500);
  }));
