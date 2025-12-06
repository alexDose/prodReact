import {Modal} from 'shared/ui/Modal/Modal';
import {Suspense} from 'react';
import {LoginFormAsync} from '../LoginForm/LoginForm.async';
import {Loader} from 'shared/ui/Loader/Loader';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

export const LoginModal = ({ isOpen, onClose, className }: LoginModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={className}
      lazy
    >
      <Suspense fallback={<Loader/>}>
        <LoginFormAsync/>
      </Suspense>
    </Modal>
  );
};
