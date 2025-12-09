import {createAsyncThunk} from '@reduxjs/toolkit';
import {User, userActions} from 'entities/User';
import {USER_LOCALSTORAGE_KEY} from 'shared/const/localstorage';
import {ThunkConfig} from 'app/providers/StoreProvider/config/StateSchema';

interface LoginByUsernameInput {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameInput, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, {extra, dispatch, rejectWithValue}) => {
    try {
      // Проверка что api существует
      if (!extra?.api) {
        return rejectWithValue('API not configured');
      }

      const response = await extra.api.post<User>('/login', authData);

      if (!response.data) {
        console.log('Login error: no data received');
        return rejectWithValue('No data received');
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      // Проверка что navigate существует
      if (extra.navigate) {
        extra.navigate('/about');
      }

      return response.data;
    } catch(e) {
      console.log(e);
      return rejectWithValue('Login failed');
    }
  }
);
