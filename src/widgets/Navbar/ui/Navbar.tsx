import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import {useTranslation} from 'react-i18next';
import {BugButton} from 'widgets/WindowError/ui/BugButton';
import {useCallback, useState} from 'react';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {LoginModal} from 'features/AuthByUsername';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthUserData, userActions} from 'entities/User';

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation();
  const isAuth = useSelector(getAuthUserData);
  const dispatch = useDispatch();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  const logout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.mainLinks}>
        <BugButton/>
        {isAuth ? <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={logout}
        >
          {t('Logout')}
        </Button>
          : <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={onShowModal}
          >
            {t('Login')}
          </Button>}
        {!isAuth && <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>}
      </div>
    </div>
  );
};
