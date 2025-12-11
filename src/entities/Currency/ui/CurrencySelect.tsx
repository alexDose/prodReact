import {Select} from 'shared/ui/Select/Select';
import {Currency} from 'entities/Currency';

type Props = {
    label: string;
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readOnly?: boolean;
};

const options=[
  {value: Currency.RUB, title: Currency.RUB},
  {value: Currency.EUR, title: Currency.EUR},
  {value: Currency.USD, title: Currency.USD},
];

export const CurrencySelect = ({label, value, onChange, readOnly}: Props) => {

  const onChangeHandler = (value: string) => {
    if (onChange) {
      onChange(value as Currency);
    }
  };

  return (
    <Select
      label={label}
      readOnly={readOnly}
      options={options}
      value={value}
      onChange={onChangeHandler}/>
  );
};