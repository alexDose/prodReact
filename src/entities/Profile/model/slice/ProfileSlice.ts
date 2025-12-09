import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchProfileData, ProfileSchema, ProfileType, updateProfileData} from '../../../Profile';

const initialState: ProfileSchema = {
  data: {} as ProfileType,
  form: {} as ProfileType,
  isLoading: false,
  error: undefined ,
  readOnly: true
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readOnly = action.payload;
    },
    updateProfileData: (state, action: PayloadAction<ProfileType>) => {
      state.form = {
        ...state.form,
        ...action.payload
      };
    },
    canceledEdit: (state) => {
      state.readOnly = true;
      state.form = state.data;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<ProfileType>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form  = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<ProfileType>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form  = action.payload;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

// Action creators are generated for each case reducer function
export const { actions: profileAction } = profileSlice;
export const { reducer: profileReducer } = profileSlice;