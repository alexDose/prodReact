import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

export const BugButton = () => {
  const [isError, setError] = useState(false);
  const {t} = useTranslation();

  useEffect(() => {
    if (isError) throw Error('error');
  }, [isError]);

  return (
    <Button theme={ButtonTheme.OUTLINE} onClick={() => setError(true)}>
      {(t('throw Error'))}
    </Button>
  );
};
