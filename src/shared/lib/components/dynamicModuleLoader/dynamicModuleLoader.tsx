import {ReactNode, useEffect} from 'react';
import {useStore} from 'react-redux';
import {ReduxStoreWithManager} from 'app/providers/StoreProvider';
import {StateSchemaKey} from 'app/providers/StoreProvider/config/StateSchema';
import {Reducer} from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface Props {
    children: ReactNode
    reducers: ReducersList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = ({reducers, children, removeAfterUnmount}: Props) => {
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
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