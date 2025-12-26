import cls from './Card.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string
  children: ReactNode
}

// eslint-disable-next-line react/display-name
export const Card = memo(({ className, children, ...props }: CardProps) => {

  return (
    <div
      className={classNames(cls.Card, {}, [className])}
      {...props}
    >
      {children}
    </div>
  );
});