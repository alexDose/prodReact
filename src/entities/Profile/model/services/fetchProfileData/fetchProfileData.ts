import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider/config/StateSchema';
import {ProfileType} from '../../types/profile';

export const fetchProfileData = createAsyncThunk<ProfileType, string, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (userId, {extra, rejectWithValue}) => {
    try {
      const response = await extra.api.get<ProfileType>(`/profile/${userId}`);
      return response.data;
    } catch(e) {
      return rejectWithValue('error');
    }
  });