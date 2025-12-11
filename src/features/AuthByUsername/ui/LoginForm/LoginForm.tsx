import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useCallback} from 'react';
import cls from './LoginForm.module.scss';
import {Input} from 'shared/ui/Input/Input';
import {getLoginUsername} from '../../model/selectors/getLoginUsername/getLoginState';
import {getLoginPassword} from '../../model/selectors/getLoginPassword/getLoginPassword';
import {loginActions, loginReducer} from '../../model/slice/loginSlice';
import {getLoginIsLoading} from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {getLoginError} from '../../model/selectors/getLoginError/getLoginError';
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername';
import {Text, TextTheme} from 'shared/ui/Text/Text';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/dynamicModuleLoader/dynamicModuleLoader';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {useSelector} from 'react-redux';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';

const initialReducers: ReducersList = {
  loginForm: loginReducer
};

const LoginForm = () => {
  const {t} = useTranslation();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {  // ✅ Сделай async
    dispatch(loginActions.clearError());
    const result = await dispatch(loginByUsername({username, password}));

    // ✅ Навигация после успешного логина
    if (loginByUsername.fulfilled.match(result)) {
      navigate(RoutePath.main);
    }
  }, [dispatch, navigate, username, password]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={cls.LoginForm}>
        <Text title={t('Form for authorization')}/>
        {error && (
          <Text
            text={t('You enter invalid login or password')}
            theme={TextTheme.ERROR}
          />
        )}
        <Input
          autofocus
          type="text"
          placeholder={t('username')}
          value={username}
          onChange={onChangeUsername}
        />
        <Input
          type="password"
          placeholder={t('password')}
          value={password}
          onChange={onChangePassword}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Login')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default LoginForm;
