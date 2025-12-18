import cls from './Icon.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ComponentType, memo, SVGProps } from 'react';

interface IconProps {
  className?: string
  Svg: ComponentType<SVGProps<SVGSVGElement>>;
}

const IconComponent = ({ className, Svg }: IconProps) => {

  return (
    <Svg className={classNames(cls.Icon, {}, [className])}/>
  );
};

export const Icon = memo(IconComponent);