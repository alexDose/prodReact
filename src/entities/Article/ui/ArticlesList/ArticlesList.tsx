import cls from './ArticlesList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Article, ArticleView } from '../../model/types/article';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';
import { ArticlesListItemSkeleton } from 'entities/Article/ui/ArticlesListItem/ArticleListItemSkeleton';

interface ArticlesListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

// eslint-disable-next-line react/display-name
export const ArticlesList = memo(({
  className,
  articles,
  view = ArticleView.SMALL,
  isLoading
}: ArticlesListProps) => {

  const renderArticle = (article: Article) => {
    return (
      <ArticlesListItem key={article.id} className={cls.card} article={article} view={view}/>
    );
  };

  return (
    <div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null
      }
      {isLoading && new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((_, index) => (
          <ArticlesListItemSkeleton
            key={index}
            className={cls.card}
            view={view}
          />
        ))}
    </div>
  );
});