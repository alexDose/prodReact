import cls from './ViewSelector.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleView } from 'entities/Article';
import ListIcon from 'shared/assets/icons/list-ul-alt.svg';
import TiledIcon from 'shared/assets/icons/tiled-svgrepo-com.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

interface ViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

export const ViewSelector = memo(({ className, view, onViewClick }: ViewSelectorProps) => {
  const viewType = [
    {
      view: ArticleView.SMALL,
      icon: TiledIcon
    },
    {
      view: ArticleView.BIG,
      icon: ListIcon
    }
  ];

  const onClick = (newView: ArticleView) => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.ViewSelector, {}, [className])}>
      {viewType.map(type => (
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={() => onClick(type.view)}
          key={type.view}
        >
          <Icon
            className={classNames(cls.icon, {[cls.notSelected]: type.view !== view})}
            Svg={type.icon}
          />
        </Button>
      ))}
    </div>
  );
});

ViewSelector.displayName = 'ViewSelector';
