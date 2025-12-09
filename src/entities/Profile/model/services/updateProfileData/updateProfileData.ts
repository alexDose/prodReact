import {createAsyncThunk} from '@reduxjs/toolkit';
import {getProfileForm, ProfileType} from '../../../../Profile';
import {ThunkConfig} from 'app/providers/StoreProvider';


export const updateProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, {extra, rejectWithValue, getState}) => {
    const formData = getProfileForm(getState());
    try {
      const response = await extra.api.put<ProfileType>('/profile', formData);
      return response.data;
    } catch(e) {
      return rejectWithValue('error');
    }
  });