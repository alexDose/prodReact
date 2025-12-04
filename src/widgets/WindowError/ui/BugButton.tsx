import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

export const BugButton = () => {
  const [isError, setError] = useState(false);
  const {t} = useTranslation();

  useEffect(() => {
    if (isError) throw Error('error');
  }, [isError]);

  return (
    <button onClick={() => setError(true)}>
      {(t('throw Error'))}
    </button>
  );
};
