import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import cls from './LoginForm.module.scss';
import {Input} from 'shared/ui/Input/Input';

export const LoginForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onChangeUsername = useCallback((value: string) => {
    setUsername(value);
  }, []);

  const onChangePassword = useCallback((value: string) => {
    setPassword(value);
  }, []);

  const onLoginClick = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      // await dispatch(loginByUsername({ username, password }));
    } catch (e) {
      setError(t('Failed login or password'));
    } finally {
      setIsLoading(false);
    }
  }, [t]);

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
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Login')}
      </Button>
    </div>
  );
};
