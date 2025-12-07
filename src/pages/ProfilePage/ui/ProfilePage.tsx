import {useTranslation} from 'react-i18next';
import {DynamicModuleLoader} from 'shared/lib/components/dynamicModuleLoader/dynamicModuleLoader';
import {profileReducer} from 'entities/Profile/model/slice/ProfileSlice';

const ProfilePage = () => {
  const {t} = useTranslation('profilePage');
    
  return (
    <DynamicModuleLoader removeAfterUnmount reducers={{profile: profileReducer}}>
      <div>
        {t('Profile Page')}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;