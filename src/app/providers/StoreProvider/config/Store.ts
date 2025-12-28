import { configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter/modal/slices/CounterSlice';
import { StateSchema } from 'app/providers/StoreProvider';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/ReducerManager';
import { $api } from 'shared/api/$api';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<StateSchema>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          // navigate,
        }
      }
    })
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
