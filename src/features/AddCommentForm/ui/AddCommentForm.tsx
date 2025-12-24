import cls from './AddCommentForm.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  getAddCommentFormError,
  getAddCommentFormIsLoading,
  getAddCommentFormText
} from 'features/AddCommentForm/model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../model/slice/addCommentFormSlice';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamicModuleLoader/dynamicModuleLoader';
import { Loader } from 'shared/ui/Loader/Loader';

export interface AddCommentFormProps {
  className?: string
  onSentComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
};

// eslint-disable-next-line react/display-name
const AddCommentForm = memo(({ className, onSentComment }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const isLoading = useSelector(getAddCommentFormIsLoading);

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSentComment(text || '');
    onCommentTextChange('');
  }, [onSentComment, text, onCommentTextChange]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          onChange={onCommentTextChange}
          value={text}
          placeholder={t('Enter comment text')}/>
        <Button className={cls.btnAdd} theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>
          {isLoading
            ? <Loader/>
            : t('Add')
          }
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;