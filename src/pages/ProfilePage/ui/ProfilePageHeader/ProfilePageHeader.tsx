import cls from './ProfilePageHeader.module.scss';
import {useTranslation} from 'react-i18next';
import {Text} from 'shared/ui/Text/Text';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useSelector} from 'react-redux';
import { getProfileData, getProfileReadOnly, updateProfileData } from 'entities/Profile';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {profileAction} from 'entities/Profile/model/slice/ProfileSlice';
import {useCallback} from 'react';
import { getAuthUserData } from 'entities/User';

export const ProfilePageHeader = () => {
  const {t} = useTranslation('profilePage');
  const readOnly = useSelector(getProfileReadOnly);
  const dispatch = useAppDispatch();
  const userData = useSelector(getAuthUserData);
  const profileData = useSelector(getProfileData);
  const canEdit = userData?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileAction.setReadOnly(false));
  }, [dispatch]);

  const onCancel = useCallback(() => {
    dispatch(profileAction.canceledEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    if (!profileData?.id) {
      return;
    }
    dispatch(updateProfileData(profileData?.id));
  }, [dispatch, profileData?.id]);

  return (
    <div className={cls.ProfilePageHeader}>
      <Text title={t('Profile')}/>
      <div className={cls.editBtn}>
        {readOnly
          ? canEdit && <Button onClick={onEdit}
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

