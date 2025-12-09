import {ReactNode, useEffect} from 'react';
import {useStore} from 'react-redux';
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

export const DynamicModuleLoader = ({reducers, children, removeAfterUnmount}: Props) => {
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const entries = Object.entries(reducers) as [StateSchemaKey, Reducer][];

    entries.forEach(([name, reducer]) => {
      store.reducerManager.add(name, reducer);
    });

    return () => {
      if (removeAfterUnmount) {
        entries.forEach(([name]) => {
          store.reducerManager.remove(name);
        });
      }
    };
    //eslint-disable-next-line
    }, []);

  return <>
    {children}
  </>;
};
