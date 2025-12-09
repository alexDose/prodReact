import cls from './ProfileCard.module.scss';
import {useTranslation} from 'react-i18next';
import {Text, TextAlign, TextTheme} from 'shared/ui/Text/Text';
import {Input} from 'shared/ui/Input/Input';
import {getProfileReadOnly, ProfileType} from 'entities/Profile';
import {Loader} from 'shared/ui/Loader/Loader';
import {classNames} from 'shared/lib/classNames/classNames';
import {useSelector} from 'react-redux';

interface IProps {
    className?: string
    data?: ProfileType
    isLoading?: boolean
    error?: string
    onChangeFirstName: (value?: string) => void
    onChangeLastName: (value?: string) => void
    onChangeAge: (value?: string) => void
    onChangeCity: (value?: string) => void
}

export const ProfileCard = ({
  data,
  isLoading,
  error,
  className,
  onChangeFirstName,
  onChangeLastName,
  onChangeAge,
  onChangeCity
}: IProps) => {
  const {t} = useTranslation('profilePage');
  const readOnly = useSelector(getProfileReadOnly);

  if (isLoading) {
    return <div className={classNames(cls.ProfileCard, {[cls.loading]: true}, [className])}>
      <Loader />
    </div>;
  }

  if (error) {
    return (
      <Text align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
        title={t('Error')}
        text={t('Try reloading the page')} />
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div>
        <Input readOnly={readOnly}
          className={cls.input}
          value={data?.first}
          onChange={onChangeFirstName}
          placeholder={t('Your firstname')}/>
        <Input readOnly={readOnly}
          className={cls.input}
          value={data?.lastname}
          onChange={onChangeLastName}
          placeholder={t('Your lastname')}/>
        <Input readOnly={readOnly}
          className={cls.input}
          value={data?.age?.toString()}
          onChange={onChangeAge}
          placeholder={t('Your age')}/>
        <Input readOnly={readOnly}
          className={cls.input}
          value={data?.city}
          onChange={onChangeCity}
          placeholder={t('Your city')}/>
      </div>
    </div>
  );
};
