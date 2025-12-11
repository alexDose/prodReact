import cls from './ProfileCard.module.scss';
import {useTranslation} from 'react-i18next';
import {Text, TextAlign, TextTheme} from 'shared/ui/Text/Text';
import {Input} from 'shared/ui/Input/Input';
import {ProfileType} from 'entities/Profile';
import {Loader} from 'shared/ui/Loader/Loader';
import {classNames, Mods} from 'shared/lib/classNames/classNames';
import {Avatar} from 'shared/ui/Avatar/Avatar';
import {Currency} from 'entities/Currency/model/types/currency';
import {CurrencySelect} from 'entities/Currency';
import {CountrySelect} from 'entities/Country/ui/CountrySelect';
import {Country} from 'entities/Country';

interface Props {
    className?: string
    data?: ProfileType
    isLoading?: boolean
    error?: string
    readOnly?: boolean
    onChangeFirstName?: (value?: string) => void
    onChangeLastName?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeUserName?: (value?: string) => void
    onChangeCurrencySelect?: (currency: Currency) => void
    onChangeCountrySelect?: (country: Country) => void
}

export const ProfileCard = ({
  data,
  isLoading,
  error,
  className,
  readOnly,
  onChangeFirstName,
  onChangeLastName,
  onChangeAge,
  onChangeCity,
  onChangeAvatar,
  onChangeUserName,
  onChangeCurrencySelect,
  onChangeCountrySelect
}: Props) => {
  const {t} = useTranslation('profilePage');

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

  const mods: Mods = {
    [cls.editing]: !readOnly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div>
        {data?.avatar && <div className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} alt='avatar' />
        </div>}
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
        <Input readOnly={readOnly}
          className={cls.input}
          value={data?.username}
          onChange={onChangeUserName}
          placeholder={t('Your username')}/>
        <Input readOnly={readOnly}
          className={cls.input}
          value={data?.avatar}
          onChange={onChangeAvatar}
          placeholder={t('Your avatar')}/>
        <CurrencySelect
          label='Change Currency'
          className={cls.input}
          readOnly={readOnly}
          value={data?.currency}
          onChange={onChangeCurrencySelect}/>
        <CountrySelect
          label='Change Country'
          className={cls.input}
          readOnly={readOnly}
          value={data?.country}
          onChange={onChangeCountrySelect}/>
      </div>
    </div>
  );
};
