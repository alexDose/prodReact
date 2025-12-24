import {createAsyncThunk} from '@reduxjs/toolkit';
import {getProfileForm, ProfileType, ValidateProfileData} from '../../../../Profile';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {ValidateProfileError} from 'entities/Profile/model/types/profile';


export const updateProfileData = createAsyncThunk<ProfileType, string, ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (profileId, {extra, rejectWithValue, getState}) => {
    const formData = getProfileForm(getState());
    const errors = ValidateProfileData(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.put<ProfileType>(`/profile/${profileId}`, formData);
      return response.data;
    } catch(e) {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR ]);
    }
  });