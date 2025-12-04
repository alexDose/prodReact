import {useTranslation} from 'react-i18next';
import {Counter} from 'entities/Counter';

const MainPage = () => {
  const {t} = useTranslation('main');

  return (
    <div>
      {t('Main')}
      <Counter/>
    </div>
  );
};

export default MainPage;
