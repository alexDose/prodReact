import {Provider} from 'react-redux';
import {createStore} from 'app/providers/StoreProvider/config/Store';
import {ReactNode} from 'react';

interface StoreProviderProps {
    children?: ReactNode
}

export const StoreProvider = ({children}: StoreProviderProps) => {
  const store = createStore();

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
