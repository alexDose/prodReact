import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment>();

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);

const initialState: ArticleDetailsCommentsSchema = commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
  error: undefined,
  isLoading: false,
  ids: [],
  entities: {}
});

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const {reducer: articleDetailsCommentsReducer} = articleDetailsCommentsSlice;