import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import {useTranslation} from 'react-i18next';
import {BugButton} from 'widgets/WindowError/ui/BugButton';
import {useCallback, useState} from 'react';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {LoginModal} from 'features/AuthByUsername';

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.mainLinks}>
        <BugButton/>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={onShowModal}
        >
          {t('Login')}
        </Button>
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
      </div>
    </div>
  );
};
