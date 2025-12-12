import cls from './ArticleTextBlockComponent.module.scss';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';

interface ArticleTextBlockComponentProps {
    className?: string
}

export const ArticleTextBlockComponent = ({className}: ArticleTextBlockComponentProps) => {
  const {t} = useTranslation();

  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>

    </div>
  );
};