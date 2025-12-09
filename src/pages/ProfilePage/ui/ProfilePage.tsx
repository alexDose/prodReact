import {useTranslation} from 'react-i18next';
import {DynamicModuleLoader} from 'shared/lib/components/dynamicModuleLoader/dynamicModuleLoader';
import {profileReducer} from 'entities/Profile/model/slice/ProfileSlice';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {useEffect} from 'react';
import {fetchProfileData, ProfileCard} from 'entities/Profile';

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={{profile: profileReducer}}>
      <ProfileCard/>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;