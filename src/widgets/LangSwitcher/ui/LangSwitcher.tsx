import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {memo} from 'react';

interface LangSwitcherProps {
    className?: string
    short: boolean
}

const LangSwitcherComponent = ({className, short}: LangSwitcherProps) => {
  const {t, i18n} = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (

    <Button
      className={classNames('lang', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}>
      {t(short ? 'ShortLanguage' : 'Language')}
    </Button>
  );
};

export const LangSwitcher = memo(LangSwitcherComponent);