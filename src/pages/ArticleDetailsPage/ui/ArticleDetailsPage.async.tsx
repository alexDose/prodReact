import {lazy} from 'react';

export const ArticleDetailsAsyncPage = lazy(
  () => new Promise(res => {
    //@ts-ignore
    setTimeout(() => res(import('./ArticleDetailsPage')), 400);
  }));

