import cls from './ArticlesPage.module.scss';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {memo} from 'react';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/dynamicModuleLoader/dynamicModuleLoader';
import {articleDetailsReducer} from 'entities/Article/model/slice/articleDetailsSlice';

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
};

const ArticlesPage = ({className}: ArticlesPageProps) => {
  const {t} = useTranslation('articles');

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
        {t('Articles')}
      </div>
    </DynamicModuleLoader>

  );
};

export default memo(ArticlesPage);