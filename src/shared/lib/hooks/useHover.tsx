import { useState } from 'react';

interface UseHover {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

type UseHoverResult = [boolean, UseHover]

export const useHover = (): UseHoverResult => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const onMouseEnter = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  return [isHover, {onMouseEnter, onMouseLeave}];
};