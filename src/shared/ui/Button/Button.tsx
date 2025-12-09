import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';
import {ButtonHTMLAttributes, memo, ReactNode} from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline-red',
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
    size?: ButtonSize  // Changed from string to ButtonSize
    disabled?: boolean
    children?: ReactNode
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

  const mods: Record<string, boolean | undefined> = {
    [styles[theme ?? '']]: Boolean(theme),  // Handle undefined theme
    [styles.square]: square,
    [styles[size]]: true,
    [styles.disabled]: disabled,
  };
  
  // Filter out undefined values before passing to classNames
  const filteredMods = Object.fromEntries(
    Object.entries(mods).filter(([_, value]) => value !== undefined)
  ) as Record<string, boolean>;

  return (
    <button
      className={classNames(styles.Button, filteredMods, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export const Button = memo(ButtonComponent);
