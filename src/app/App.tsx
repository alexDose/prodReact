import {classNames} from 'shared/lib/classNames/classNames';
import {UseTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar/ui';
import {Suspense, useEffect} from 'react';
import 'shared/config/i18n/i18n';
import {useDispatch, useSelector} from 'react-redux';
import {getUserInit, userActions} from 'entities/User';
import {Loader} from 'shared/ui/Loader/Loader';

const App = () => {
  const _init = useSelector(getUserInit);
  const dispatch = useDispatch();
  const {theme} = UseTheme();
    
  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  if (!_init) {
    return <Loader/>;
  }

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar/>
        <div className='container'>
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
