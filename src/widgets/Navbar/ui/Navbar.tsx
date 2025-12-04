import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import {useTranslation} from 'react-i18next';
import {BugButton} from 'widgets/WindowError/ui/BugButton';
import {Modal} from 'shared/ui/Modal/Modal';
import {useCallback, useState} from 'react';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.mainLinks}>
        <BugButton/>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={onToggleModal}
        >
          {t('Login')}
        </Button>
        <Modal isOpen={isAuthModal} onClose={onToggleModal}>
          {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit.')}
        </Modal>
      </div>
    </div>
  );
};
