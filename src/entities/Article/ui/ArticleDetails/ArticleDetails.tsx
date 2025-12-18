import cls from './ArticleDetails.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { memo, useCallback, useEffect } from 'react';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/getArticleDetails';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/EyeIcon.svg';
import Calendar from 'shared/assets/icons/Calendar.svg';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';
import { ArticleCodeBlockComponent } from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
    className?: string
    id: string
}

// eslint-disable-next-line react/display-name
export const ArticleDetails =  memo(({className, id}: ArticleDetailsProps) => {
  const {t} = useTranslation('article');
  const dispatch = useAppDispatch();

  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block}/>;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block}/>;
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block}/>;
    default:
      return null;
    }
  }, []);

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
        <Text title={t(`${error}`)}/>
      </>
    );
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar className={cls.avatar} size={200} src={article?.img}/>
        </div>
        <Text size={TextSize.L} title={article?.title} text={article?.subtitle}/>
        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon}/>
          <Text text={String(article?.views)}/>
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={Calendar}/>
          <Text text={article?.createdAt}/>
        </div>
        {article?.blocks.map(renderBlock)}
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