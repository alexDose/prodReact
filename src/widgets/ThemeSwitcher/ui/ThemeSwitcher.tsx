import {classNames} from 'shared/lib/classNames/classNames';
import {Theme, UseTheme} from 'app/providers/ThemeProvider';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import SwitcherIcon from 'shared/assets/icons/ThemeSwitcherIcon.svg';
import {memo} from 'react';

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcherComponent = ({className}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = UseTheme();

  return (<div>
    <Button theme={ButtonTheme.CLEAR} className={classNames('', {}, [className])} onClick={toggleTheme}>
      {theme === Theme.LIGHT
        ? <SwitcherIcon width={50} height={30} stroke={'#0cbd06'} strokeWidth={'20px'}/>
        : <SwitcherIcon width={50} height={30}/>}
    </Button>
  </div>

  );
};

export const ThemeSwitcher = memo(ThemeSwitcherComponent);