import { Modal } from 'shared/ui/Modal/Modal';
import {LoginForm} from 'features/AuthByUsername/ui/LoginForm/LoginForm';

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
      <LoginForm />
    </Modal>
  );
};
