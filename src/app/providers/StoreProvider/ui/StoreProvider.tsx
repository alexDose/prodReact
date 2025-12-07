import {Provider} from 'react-redux';
import {createReduxStore} from 'app/providers/StoreProvider/config/Store';
import {ReactNode} from 'react';
import {useNavigate} from 'react-router-dom';
import {StateSchema} from 'app/providers/StoreProvider';
import {ReducersMapObject} from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateSchema
    asyncReducers?: ReducersMapObject<StateSchema>
}

export const StoreProvider = ({children, initialState, asyncReducers}: StoreProviderProps) => {
  const navigate = useNavigate();

  const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate);
  
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
