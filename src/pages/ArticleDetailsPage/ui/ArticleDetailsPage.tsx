import cls from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useEffect } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamicModuleLoader/dynamicModuleLoader';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../model/selectors/comments';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
  articleDetailsComments: articleDetailsCommentsReducer
};

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
  const {t} = useTranslation('article');
  const {id} = useParams<{id: string}>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const commentsError = useSelector(getArticleCommentsError);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSentComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [id, dispatch]);

  if (!id) {
    return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      {t('Article not found')}
    </div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
        {t('Back to list')}
      </Button>
      <ArticleDetails id={id}/>
      <Text className={cls.commentTitle} title={t('Comments')}/>
      <AddCommentForm onSentComment={onSentComment} />
      <CommentList isLoading={commentsIsLoading} comments={comments}/>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);