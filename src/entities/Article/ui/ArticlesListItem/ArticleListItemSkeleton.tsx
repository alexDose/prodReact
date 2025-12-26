import cls from './ArticlesListItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleView } from '../../model/types/article';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticlesListItemSkeletonProps {
  className?: string
  view: ArticleView
}

export const ArticlesListItemSkeleton = memo(({
  className,
  view
}: ArticlesListItemSkeletonProps) => {

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}>
        <Card>
          <div className={cls.header}>
            <Skeleton border="50%" width={30} height={30}/>
            <Skeleton width={150} height={16} className={cls.username}/>
            <Skeleton width={100} height={16} className={cls.date}/>
          </div>
          <Skeleton width="100%" height={24} className={cls.title}/>
          <Skeleton width="100%" height={250} className={cls.img}/>
          <div className={cls.textBlock}>
            <Skeleton width="100%" height={16}/>
            <Skeleton width="100%" height={16}/>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}>
      <Card>
        <div className={cls.imageWrapper}>
          <Skeleton width="100%" height={200} className={cls.img}/>
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16}/>
          <Skeleton width={50} height={16}/>
        </div>
        <Skeleton width="100%" height={16} className={cls.title}/>
      </Card>
    </div>
  );
});

ArticlesListItemSkeleton.displayName = 'ArticlesListItemSkeleton';
