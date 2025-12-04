import {configureStore} from '@reduxjs/toolkit';
import {counterReducer} from 'entities/Counter/modal/slices/CounterSlice';

export const createStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
  });
};

