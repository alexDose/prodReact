import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Modal.module.scss';
import {FC, useCallback, useEffect, useRef, useState} from 'react';
import {Portal} from 'shared/ui/Portal/Portal';
import {UseTheme} from 'app/providers/ThemeProvider';

interface ModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = ({className, children, isOpen, onClose}) => {
  const {theme} = UseTheme();

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, ANIMATION_DELAY);
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.closing]: isClosing
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(styles.Modal, mods, [className, theme])} onClick={closeHandler}>
        <div className={styles.overlay}>
          <div className={styles.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
