import cls from './ProfilePageHeader.module.scss';
import {useTranslation} from 'react-i18next';
import {Text} from 'shared/ui/Text/Text';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useSelector} from 'react-redux';
import {getProfileReadOnly, updateProfileData} from 'entities/Profile';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {profileAction} from 'entities/Profile/model/slice/ProfileSlice';
import {useCallback} from 'react';

export const ProfilePageHeader = () => {
  const {t} = useTranslation('profilePage');
  const readOnly = useSelector(getProfileReadOnly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileAction.setReadOnly(false));
  }, [dispatch]);

  const onCancel = useCallback(() => {
    dispatch(profileAction.canceledEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={cls.ProfilePageHeader}>
      <Text title={t('Profile')}/>
      <div className={cls.editBtn}>
        {readOnly
          ? <Button onClick={onEdit}
            theme={ButtonTheme.OUTLINE}>
            {t('Edit')}
          </Button>
          : <>
            <Button onClick={onCancel}
              theme={ButtonTheme.OUTLINE_RED}>
              {t('Cancel')}
            </Button>
            <Button onClick={onSave}
              theme={ButtonTheme.OUTLINE}>
              {t('Save')}
            </Button>
          </>
        }
      </div>
    </div>
  );
};

