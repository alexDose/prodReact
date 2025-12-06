import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import cls from './LoginForm.module.scss';
import {Input} from 'shared/ui/Input/Input';
import {getLoginUsername} from '../../model/selectors/getLoginUsername/getLoginState';
import {getLoginPassword} from '../../model/selectors/getLoginPassword/getLoginPassword';
import {loginActions, loginReducer} from '../../model/slice/loginSlice';
import {getLoginIsLoading} from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {getLoginError} from '../../model/selectors/getLoginError/getLoginError';
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername';
import {AppDispatch} from 'app/providers/StoreProvider/config/Store';
import {Text, TextTheme} from 'shared/ui/Text/Text';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/dynamicModuleLoader/dynamicModuleLoader';

const initialReducers: ReducersList = {
  loginForm: loginReducer
};

const LoginForm = () => {
  const { t } = useTranslation();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  const dispatch = useDispatch<AppDispatch>();

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginActions.clearError());
    dispatch(loginByUsername({username, password}));
  }, [dispatch, username, password]);


  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={cls.LoginForm}>
        <Text title={t('Form for authorization')}/>
        {error && <Text text={t('You enter invalid login or password')} theme={TextTheme.ERROR}/>}
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