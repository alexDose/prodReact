import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {counterReducer} from 'entities/Counter/modal/slices/CounterSlice';
import {StateSchema} from 'app/providers/StoreProvider';
import {userReducer} from 'entities/User';
import {createReducerManager} from 'app/providers/StoreProvider/config/ReducerManager';
import {$api} from 'shared/api/$api';
import {NavigateOptions, To} from 'react-router-dom';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
        }
      }
    })
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

const defaultStore = createReduxStore();
export type AppDispatch = typeof defaultStore.dispatch;
