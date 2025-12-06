import {classNames} from 'shared/lib/classNames/classNames';
import styles from './WindowError.module.scss';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

interface WindowErrorProps {
    className?: string
}

export const WindowError = ({className}: WindowErrorProps) => {
  const {t} = useTranslation();

  const reload = () => {
    location.reload();
  };

  return (
    <div className={classNames(styles.WindowError, {}, [className])}>
      <h3>{t('Error')}</h3>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={reload}>{t('reload')}</Button>
    </div>
  );
};
