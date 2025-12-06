import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {counterReducer} from 'entities/Counter/modal/slices/CounterSlice';
import {StateSchema} from 'app/providers/StoreProvider';
import {userReducer} from 'entities/User';
import {createReducerManager} from 'app/providers/StoreProvider/config/ReducerManager';

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store =  configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export const store = createReduxStore();

export type AppDispatch = typeof store.dispatch;