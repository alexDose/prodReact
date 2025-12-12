import cls from './ArticleDetailsPage.module.scss';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {memo} from 'react';
import {ArticleDetails} from 'entities/Article';
import {useParams} from 'react-router-dom';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/dynamicModuleLoader/dynamicModuleLoader';
import {articleDetailsReducer} from 'entities/Article/model/slice/articleDetailsSlice';

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
};

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
  const {t} = useTranslation('article');
  const {id} = useParams<{id: string}>();

  if (!id) {
    return <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      {t('Article not found')}
    </div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ArticleDetails id={id}/>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);