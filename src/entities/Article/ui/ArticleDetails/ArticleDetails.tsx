import cls from './ArticleDetails.module.scss';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {memo, useEffect} from 'react';
import {fetchArticleById} from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import {useSelector} from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/getArticleDetails';
import {Skeleton} from 'shared/ui/Skeleton/Skeleton';

interface ArticleDetailsProps {
    className?: string
    id: string
}

// eslint-disable-next-line react/display-name
export const ArticleDetails =  memo(({className, id}: ArticleDetailsProps) => {
  const {t} = useTranslation('article');
  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <div>
        <Skeleton className={cls.avatar} width={200} height={200} border='50%'/>
        <Skeleton className={cls.title} width={300} height={32}/>
        <Skeleton className={cls.title} width={600} height={24}/>
        <Skeleton className={cls.skeleton} width='100%' height={200}/>
        <Skeleton className={cls.skeleton} width='100%' height={200}/>
      </div>
    );
  } else if (error) {
    content = (
      <div>{t('Article not found')}</div>
    );
  } else {
    content = (
      <div>{t('Article')}</div>
    );
  }

  return (
    <div className={classNames(cls.ArticleDetails, {}, [className])}>
      {content}
    </div>
  );
});