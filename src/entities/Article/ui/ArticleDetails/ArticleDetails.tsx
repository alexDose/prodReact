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
import {Avatar} from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/EyeIcon.svg';
import Calendar from 'shared/assets/icons/Calendar.svg';
import {Text} from 'shared/ui/Text/Text';

interface ArticleDetailsProps {
    className?: string
    id: string
}

// eslint-disable-next-line react/display-name
export const ArticleDetails =  memo(({className, id}: ArticleDetailsProps) => {
  const {t} = useTranslation('article');
  const dispatch = useAppDispatch();

  const article = useSelector(getArticleDetailsData);
  console.log(article);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border='50%'/>
        <Skeleton className={cls.title} width={300} height={32}/>
        <Skeleton className={cls.title} width={600} height={24}/>
        <Skeleton className={cls.skeleton} width='100%' height={200}/>
        <Skeleton className={cls.skeleton} width='100%' height={200}/>
      </>
    );
  } else if (error) {
    content = (
      <>
        <Text title={error}/>
      </>
    );
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar className={cls.avatar} size={200} src={article?.img}/>
        </div>
        <Text title={article?.title} text={article?.subtitle}/>
        <div className={cls.articleInfo}>
          <EyeIcon/>
          <Text text={String(article?.views)}/>
        </div>
        <div className={cls.articleInfo}>
          <Calendar/>
          <Text text={article?.createdAt}/>
        </div>
      </>
    );
  }

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);
  
  return (
    <div className={classNames(cls.ArticleDetails, {}, [className])}>
      {content}
    </div>
  );
});