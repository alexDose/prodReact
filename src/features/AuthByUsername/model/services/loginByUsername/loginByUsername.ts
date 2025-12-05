import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {User} from 'entities/User';

interface LoginByUsernameInput {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameInput, { rejectValue: string }>('login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData);

      if (!response.data) {
        console.log(response.data.message || 'Login error');
      }

      return response.data;
    } catch(e) {
      console.log(e);
      return thunkAPI.rejectWithValue('error');
    }
  });