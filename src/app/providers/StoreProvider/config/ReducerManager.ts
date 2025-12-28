import {AnyAction, combineReducers, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import { MountedReducer, ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

export const createReducerManager = (
  initialReducers: ReducersMapObject<StateSchema>
): ReducerManager => {

  const reducers = {...initialReducers};
  let combinedReducer = combineReducers(reducers);
  let keysToRemove: StateSchemaKey[] = [];
  const mountedReducers: MountedReducer = {};

  return {
    getReducerMap: () => reducers,
    getMountedReducers: () => mountedReducers,
    reduce: (state: StateSchema | undefined, action: AnyAction): StateSchema => {
      if (state && keysToRemove.length > 0) {
        state = {...state};
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }
      // @ts-ignore - combineReducers type mismatch with dynamic reducers
      return combinedReducer(state, action);
    },


    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;
      mountedReducers[key] = true;
      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];
      keysToRemove.push(key);
      mountedReducers[key] = false;
      combinedReducer = combineReducers(reducers);
    }
  };
};
