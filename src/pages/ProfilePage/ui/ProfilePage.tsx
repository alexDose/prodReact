import {DynamicModuleLoader} from 'shared/lib/components/dynamicModuleLoader/dynamicModuleLoader';
import {profileAction, profileReducer} from 'entities/Profile/model/slice/ProfileSlice';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {useCallback, useEffect} from 'react';
import {fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, ProfileCard} from 'entities/Profile';
import {useSelector} from 'react-redux';
import {ProfilePageHeader} from './ProfilePageHeader/ProfilePageHeader';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const form = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  const onChangeFirstName = useCallback((value?: string) => {
    dispatch(profileAction.updateProfileData({first: value}));
  }, [dispatch]);

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(profileAction.updateProfileData({lastname: value}));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileAction.updateProfileData({age: +value!}));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileAction.updateProfileData({city: value}));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={{profile: profileReducer}}>
      <ProfilePageHeader />
      <ProfileCard
        onChangeCity={onChangeCity}
        onChangeAge={onChangeAge}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
        data={form}
        isLoading={isLoading}
        error={error}/>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;