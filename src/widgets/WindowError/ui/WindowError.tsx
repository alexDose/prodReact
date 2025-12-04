import {classNames} from 'shared/lib/classNames/classNames';
import styles from './WindowError.module.scss';
import {useTranslation} from 'react-i18next';

interface WindowErrorProps {
    className?: string
}

export const WindowError = ({className}: WindowErrorProps) => {
  const reload = () => {
    location.reload();
  };
  const {t} = useTranslation();

  return (
    <div className={classNames(styles.WindowError, {}, [className])}>
      <h3>{t('Error')}</h3>
      <button onClick={reload}>{t('reload')}</button>
    </div>
  );
};
