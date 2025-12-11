import {CSSProperties, useMemo} from 'react';
import {classNames, Mods} from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface Props {
    className?: string;
    src?: string;
    size?: number | undefined;
    alt?: string;
}
export const Avatar = ({className, src, size = 100, alt = 'image'}: Props) => {
  const mods: Mods = {};

  const style = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <img src={src} style={style} className={classNames(cls.Avatar, mods, [className])} alt={alt} />
  );
};