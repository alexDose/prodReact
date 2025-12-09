import cls from './ProfileCard.module.scss';
import {useTranslation} from 'react-i18next';
import {Text} from 'shared/ui/Text/Text';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';
import {useSelector} from 'react-redux';
import {getProfileData} from 'entities/Profile/model/selectors/getProfileData';

export const ProfileCard = () => {
  const {t} = useTranslation('profilePage');
  const data = useSelector(getProfileData);

  return (
    <div className={cls.ProfileCard}>
      <div className={cls.header}>
        <Text title={t('Profile')}/>
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>{t('Edit')}</Button>
      </div>
      <div className={cls.data}>
        <Input className={cls.input} value={data?.first} placeholder={t('Your firstname')}/>
        <Input className={cls.input} value={data?.lastname} placeholder={t('Your lastname')}/>
      </div>
    </div>
  );
};
