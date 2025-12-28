import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { articlesPageLimit } from 'pages/ArticlesPage/modal/selectors/articlesPageSelectors';

interface Props {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<Article[], Props, ThunkConfig<string>>(
  'articlePage/fetchArticlesList',
  async ({page = 1}, thunkAPI) => {
    const {extra, rejectWithValue, getState} = thunkAPI;
    const limit = articlesPageLimit(getState());

    try {
      const response = await extra.api.get<Article[] >('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
        }
      });
      return response.data;
    } catch(e) {
      return rejectWithValue('error');
    }
  });