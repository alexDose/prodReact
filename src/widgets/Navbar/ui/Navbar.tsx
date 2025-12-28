import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import {useTranslation} from 'react-i18next';
import {BugButton} from 'widgets/WindowError/ui/BugButton';
import {memo, useCallback, useState} from 'react';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {LoginModal} from 'features/AuthByUsername';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthUserData, userActions} from 'entities/User';
import {useNavigate} from 'react-router-dom';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';

interface NavbarProps {
    className?: string
}

const NavbarComponent = ({className}: NavbarProps) => {
  const {t} = useTranslation();
  const isAuth = useSelector(getAuthUserData);
  const dispatch = useDispatch();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const navigate = useNavigate();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const logout = useCallback(() => {
    dispatch(userActions.logout());
    navigate(RoutePath.main);
  }, [dispatch, navigate]);

  return (
    <header className={classNames(styles.Navbar, {}, [className])}>
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
    </header>
  );
};

export const Navbar = memo(NavbarComponent);