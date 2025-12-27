import {lazy} from 'react';

export const ArticlesAsyncPage = lazy(() => (
  new Promise(res => {
    //@ts-ignore
    setTimeout(() => res(import('./ArticlesPage')), 400);
  })
));