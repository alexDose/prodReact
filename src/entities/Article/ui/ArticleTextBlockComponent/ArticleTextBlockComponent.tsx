import cls from './ArticleTextBlockComponent.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleTextBlock } from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = ({ className, block }: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {block.title && (
        <Text className={cls.title} title={t(`${block.title}`)}/>
      )}
      {block.paragraphs.map((paragraph) => (
        <Text className={cls.paragraph} key={paragraph} text={t(`${paragraph}`)}/>
      ))}
    </div>
  );
};