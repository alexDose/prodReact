// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getAuthUserData } from 'entities/User';
// import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
// import { Comment } from 'entities/Comment';
// import { getAddCommentFormText } from '../../selectors/addCommentFormSelectors';
// import { getArticleDetailsData } from 'entities/ArticlesPageSchema/model/selectors/getArticleDetails';
// import { addCommentFormActions } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
//
// export const sendComment = createAsyncThunk<Comment, void, ThunkConfig<string>>(
//   'addCommentForm/sentComment',
//   async (authData, thunkAPI) => {
//     const {extra, dispatch, rejectWithValue, getState} = thunkAPI;
//
//     const userData = getAuthUserData(getState());
//     const text = getAddCommentFormText(getState());
//     const article = getArticleDetailsData(getState());
//
//     if (!userData || !text || !article) {
//       return rejectWithValue('no data');
//     }
//
//     try {
//       // Проверка что api существует
//       if (!extra?.api) {
//         return rejectWithValue('API not configured');
//       }
//
//       const response = await extra.api.post<Comment>('/comments', {
//         articleId: article.id,
//         userId: userData.id,
//         text,
//       });
//
//       if (!response.data) {
//         return rejectWithValue('Error creating comment');
//       }
//
//       dispatch(addCommentFormActions.setText(''));
//
//       return response.data;
//     } catch(e) {
//       console.log(e);
//       return rejectWithValue('Error creating comment');
//     }
//   }
// );
