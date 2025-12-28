import cls from './ArticlesPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useEffect } from 'react';
import { ArticlesList, ArticleView } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamicModuleLoader/dynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from 'pages/ArticlesPage/modal/slice/ariclesPageSlice';
import { useSelector } from 'react-redux';
import {
  articlesPageError,
  articlesPageHasMore,
  articlesPageIsLoading,
  articlesPageNum,
  articlesPageView
} from 'pages/ArticlesPage/modal/selectors/articlesPageSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ViewSelector } from 'features/ViewSelector/ui/ViewSelector';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/modal/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from 'pages/ArticlesPage/modal/services/initArticlesPage/initArticlesPage';

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
};

const ArticlesPage = ({className}: ArticlesPageProps) => {
  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(articlesPageView);
  const isLoading = useSelector(articlesPageIsLoading);
  const error = useSelector(articlesPageError);
  const dispatch = useAppDispatch();
  const page = useSelector(articlesPageNum);
  const hasMore = useSelector(articlesPageHasMore);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
        <ViewSelector view={view} onViewClick={onChangeView} />
        <ArticlesList isLoading={isLoading} view={view} articles={articles}/>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);