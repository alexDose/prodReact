import {classNames} from 'shared/lib/classNames/classNames';
import {UseTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar/ui';
import {Suspense, useEffect} from 'react';
import 'shared/config/i18n/i18n';
import {create} from 'apisauce';
import {useDispatch} from 'react-redux';
import {userActions} from 'entities/User';
import {useNavigate} from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const {theme} = UseTheme();

  const api = create({
    baseURL: 'https://lzone.secret-agents.ru/api/v2',
  });
  const setAuthHeaders = (accessToken: string, client: string, uid: string) => {
    api.setHeader('access-token', accessToken);
    api.setHeader('client', client);
    api.setHeader('uid', uid);
  };
  const email = 'bullet2271293@gmail.com';
  const password = 'beta1234';

  const signIn = async () => {
    const data = await api.post('/auth/sign_in', { email, password });
    console.log(data);
    return data;
  };
  const  fetchNews = async () => {
    setAuthHeaders('0YBnMvrUVlDqKOmS2w66og', 'OdhR_QI2Qpmmo8bU4ychWQ', 'bullet2271293@gmail.com');
    const data = await api.get('/news');
    console.log(data);
    return data;
  };

  useEffect(() => {
    dispatch(userActions.initAuthData());
    // fetchNews();
    // signIn();
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
