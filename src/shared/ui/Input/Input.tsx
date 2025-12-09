import { ChangeEvent, InputHTMLAttributes, memo, SyntheticEvent, useEffect, useRef, useState } from 'react';
import cls from './Input.module.scss';
import {classNames, Mods} from 'shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    placeholder?: string;
    autofocus?: boolean;
    onChange?: (value: string) => void;
    readOnly?: boolean | undefined;
}

const InputComponent = (props: InputProps) => {
  const { className, value, onChange, type = 'text', placeholder, autofocus, readOnly, ...rest } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const isCaretVisible = isFocused && !readOnly;

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.currentTarget.value);
    setCaretPosition(e.currentTarget.selectionStart || 0);
  };

  const onSelect = (e: SyntheticEvent<HTMLInputElement>) => {
    setCaretPosition(e.currentTarget.selectionStart || 0);
  };

  const mods: Mods = {
    [cls.readOnly]: readOnly
  };
    
  useEffect(() => {
    if (autofocus) {
      const timer = setTimeout(() => {
        setIsFocused(true);
        inputRef.current?.focus();
      }, 350); // ✅ Увеличена задержка для Modal анимации

      return () => clearTimeout(timer);
    }
  }, [autofocus]);

  return (
    <div className={cls.InputWrapper}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={classNames(cls.caretWrapper, mods, [className])}>
        <input
          ref={inputRef}
          className={cls.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          readOnly={readOnly}
          {...rest}
        />
        {isCaretVisible && (
          <span
            style={{ left: `${caretPosition * 9}px` }}
            className={cls.caret}
          />
        )}
      </div>
    </div>
  );
};

export const Input = memo(InputComponent);
