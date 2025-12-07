import cls from './Text.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {memo} from 'react';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface Props {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
}

const TextComponent = (props: Props) => {
  const {
    title,
    text,
    className,
    theme = TextTheme.PRIMARY,
  } = props;

  return (
    <div className={classNames(cls.Text, {[cls[theme]]: true}, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};

export const Text = memo(TextComponent);