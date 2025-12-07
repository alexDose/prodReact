import {createAsyncThunk} from '@reduxjs/toolkit';
import {User, userActions} from 'entities/User';
import {USER_LOCALSTORAGE_KEY} from 'shared/const/localstorage';
import {ThunkConfig} from 'app/providers/StoreProvider/config/StateSchema';

interface LoginByUsernameInput {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameInput, ThunkConfig<string>>('login/loginByUsername',
  async (authData, {extra, dispatch, rejectWithValue}) => {
    try {
      const response = await extra.api.post('/login', authData);
      if (!response.data) {
        console.log(response.data.message || 'Login error');
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));
      extra.navigate('/about');
      return response.data;
    } catch(e) {
      console.log(e);
      return rejectWithValue('error');
    }
  });