import {ReactNode, useLayoutEffect} from 'react';
import {useStore, useDispatch} from 'react-redux';
import {ReduxStoreWithManager} from 'app/providers/StoreProvider';
import {StateSchemaKey} from 'app/providers/StoreProvider/config/StateSchema';
import {Reducer} from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

interface Props {
    children: ReactNode
    reducers: ReducersList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = ({reducers, children, removeAfterUnmount = true}: Props) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const entries = Object.entries(reducers) as [StateSchemaKey, Reducer][];

    entries.forEach(([name, reducer]) => {
      // не добавляем, если уже смонтирован
      const mountedReducers = store.reducerManager.getReducerMap();
      if (!mountedReducers[name]) {
        store.reducerManager.add(name, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        entries.forEach(([name]) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
    }, []);

  return <>{children}</>;
};
