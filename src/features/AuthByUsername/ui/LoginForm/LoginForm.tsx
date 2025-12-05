import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import cls from './LoginForm.module.scss';
import {Input} from 'shared/ui/Input/Input';
import {getLoginState} from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import {loginActions} from '../../model/slice/loginSlice';
import {getIsLoading} from 'features/AuthByUsername/model/selectors/getIsLoading/getIsLoading';
import {getError} from 'features/AuthByUsername/model/selectors/getError/getError';
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername';
import {AppDispatch} from 'app/providers/StoreProvider/config/Store';

export const LoginForm = () => {
  const { t } = useTranslation();
  const {username, password} = useSelector(getLoginState);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch<AppDispatch>();

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({username, password}));
  }, [dispatch, username, password]);

  return (
    <div className={cls.LoginForm}>
      {error && <p className={cls.error}>{error}</p>}
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
  );
};
