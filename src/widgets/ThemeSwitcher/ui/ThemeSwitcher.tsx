import {classNames} from "shared/lib/classNames/classNames";
import styles from './ThemeSwitcher.module.scss'
import {Theme, UseTheme} from "app/providers/ThemeProvider";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = UseTheme()

    return (<div>
            <Button theme={ThemeButton.CLEAR} className={classNames(styles.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
                {theme === Theme.LIGHT ? 'LIGHT' : 'DARK'}
            </Button>
        </div>

    );
};
