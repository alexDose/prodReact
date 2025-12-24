import { DynamicModuleLoader } from 'shared/lib/components/dynamicModuleLoader/dynamicModuleLoader';
import { profileAction, profileReducer } from 'entities/Profile/model/slice/ProfileSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useCallback, useEffect } from 'react';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadOnly,
  getProfileValidateErrors,
  ProfileCard
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { t } = useTranslation('profilePage');
  const dispatch = useAppDispatch();
  const form = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readOnly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const { id } = useParams<{ id: string }>();

  const onChangeFirstName = useCallback((value?: string) => {
    dispatch(profileAction.updateProfileData({ first: value }));
  }, [dispatch]);

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(profileAction.updateProfileData({ lastname: value }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileAction.updateProfileData({ age: +value! }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileAction.updateProfileData({ city: value }));
  }, [dispatch]);

  const onChangeUserName = useCallback((value?: string) => {
    dispatch(profileAction.updateProfileData({ city: value }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileAction.updateProfileData({ city: value }));
  }, [dispatch]);

  const onChangeCurrencySelect = useCallback((currency: Currency) => {
    dispatch(profileAction.updateProfileData({ currency }));
  }, [dispatch]);

  const onChangeCountrySelect = useCallback((country: Country) => {
    dispatch(profileAction.updateProfileData({ country }));
  }, [dispatch]);

  const ValidateErrorsTranslate = {
    [ValidateProfileError.SERVER_ERROR]: t('Server Error'),
    [ValidateProfileError.NO_DATA]: t('No data'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect user data'),
    [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={{ profile: profileReducer }}>
      <ProfilePageHeader/>
      {validateErrors?.length && validateErrors.map((error) => (
        <Text key={error} theme={TextTheme.ERROR} text={ValidateErrorsTranslate[error]}/>
      ))}
      <ProfileCard
        onChangeAvatar={onChangeAvatar}
        onChangeUserName={onChangeUserName}
        onChangeCity={onChangeCity}
        onChangeAge={onChangeAge}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
        data={form}
        isLoading={isLoading}
        error={error}
        readOnly={readOnly}
        onChangeCurrencySelect={onChangeCurrencySelect}
        onChangeCountrySelect={onChangeCountrySelect}
      />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;