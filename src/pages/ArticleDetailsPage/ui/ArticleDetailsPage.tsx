import cls from './ArticleDetailsPage.module.scss';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {memo} from 'react';

interface ArticleDetailsPageProps {
    className?: string
}

export const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
  const {t} = useTranslation('articleDetails');

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      {t('Article Details')}
    </div>
  );
};

// export default memo(ArticleDetailsPage);