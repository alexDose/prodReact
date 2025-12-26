import cls from './ArticlesListItem.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/EyeIcon.svg';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';

interface ArticlesListItemProps {
  className?: string
  article: Article
  view: ArticleView
}

// eslint-disable-next-line react/display-name
export const ArticlesListItem = memo(({
  className,
  article,
  view
}: ArticlesListItemProps) => {
  const { t } = useTranslation();
  const [isHover, bindHover] = useHover();
  console.log(isHover);
  const navigate = useNavigate();
  const types = <Text className={cls.types} text={article.type.join(', ')}/>;
  const views = (
    <>
      <Text className={cls.views} text={String(article.views)}/>
      <Icon Svg={EyeIcon}/>
    </>
  );

  const textBlock = article.blocks.find(
    (block) => block.type === ArticleBlockType.TEXT
  ) as ArticleTextBlock;

  const onOpenArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}/${article.id}`);
  }, [article.id, navigate]);

  if (view === ArticleView.BIG) {
    return (
      <div {...bindHover} className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}>
        <Card>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar}/>
            <Text className={cls.username} text={article.user.username}/>
            <Text className={cls.date} text={article.createdAt}/>
          </div>
          <Text title={article.title} className={cls.title}/>
          {types}
          <img src={article.img} alt={article.title} className={cls.img}/>
          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={cls.textBlock }/>
          )}
          <div className={cls.footer}>
            <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
              {t('read more...')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div {...bindHover} className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}>
      <Card onClick={onOpenArticle}>
        <div className={cls.imageWrapper}>
          <img className={cls.img} src={article.img} alt={article.title}/>
          <Text className={cls.date} text={article.createdAt}/>
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text className={cls.title} text={article.title}/>
      </Card>
    </div>
  );
});