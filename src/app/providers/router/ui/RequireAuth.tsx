import {ReactNode} from 'react';
import {useSelector} from 'react-redux';
import {getAuthUserData} from 'entities/User';
import {Navigate, useLocation} from 'react-router-dom';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';

interface Props {
    children: ReactNode;
}

export const RequireAuth = ({children}: Props) => {
  const auth = useSelector(getAuthUserData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{from: location}} replace />;
  }

  return <>
    {children}
  </>;
};