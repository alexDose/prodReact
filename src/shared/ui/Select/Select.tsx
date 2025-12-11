import cls from './Select.module.scss';
import {ChangeEvent} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';

interface OptionType {
    value: string;
    title: string;
}

interface Props {
    className?: string;
    label: string;
    options: OptionType[];
    value?: string
    onChange: (value: string) => void;
    readOnly?: boolean;
}

export const Select = ({className, label, options, value, onChange, readOnly}: Props) => {

  const optionsList = options.map(option => (
    <option className={cls.option} key={option.value} value={option.value}>{option.title}</option>
  ));

  const onChangeHandler =(e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.currentTarget.value);
    }
  };

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      {label && <span className={cls.label}>{`${label} >`}</span>}
      <select
        className={cls.select}
        disabled={readOnly}
        value={value}
        onChange={onChangeHandler}>
        {optionsList}
      </select>
    </div>
  );
};