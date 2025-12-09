import {classNames} from 'shared/lib/classNames/classNames';
import {UseTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar/ui';
import {Suspense, useEffect} from 'react';
import 'shared/config/i18n/i18n';
import {useDispatch} from 'react-redux';
import {userActions} from 'entities/User';

const App = () => {
  const dispatch = useDispatch();
  const {theme} = UseTheme();

  useEffect(() => {
    console.log('test');
  }, []);
    
  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
