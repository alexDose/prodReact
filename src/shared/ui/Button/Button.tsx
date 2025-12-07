import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';
import {ButtonHTMLAttributes, memo, ReactNode} from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: string
    disabled?: boolean
    children? : ReactNode
}

const ButtonComponent = (props: ButtonProps) => {
  const {
    className,
    children,
    theme,
    square,
    disabled,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [styles[theme]]: true,
    [styles.square]: square,
    [styles[size]]: true,
    [styles.disabled]: disabled,
  };

  return (
    <button className={classNames(styles.Button, mods, [className])}
      disabled={disabled}
      {...otherProps}>
      {children}
    </button>
  );
};


export const Button = memo(ButtonComponent);