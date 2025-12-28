import cls from './Page.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, MutableRefObject, ReactNode, useRef } from 'react';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll';

interface PageProps {
  className?: string
  children?: ReactNode
  onScrollEnd?: () => void
}

// eslint-disable-next-line react/display-name
export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfinityScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd
  });

  return (
    <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
      {children}
      <div ref={triggerRef}></div>
    </section>
  );
});