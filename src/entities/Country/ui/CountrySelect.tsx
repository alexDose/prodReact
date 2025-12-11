import {Select} from 'shared/ui/Select/Select';
import {Country} from 'entities/Country';

type Props = {
    label: string;
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readOnly?: boolean;
};

const options=[
  {value: Country.Belarus, title: Country.Belarus},
  {value: Country.Russia, title: Country.Russia},
  {value: Country.Italy, title: Country.Italy},
  {value: Country.Poland, title: Country.Poland},
  {value: Country.Portugal, title: Country.Portugal},
  {value: Country.Spanish, title: Country.Spanish},
];

export const CountrySelect = ({label, value, onChange, readOnly}: Props) => {

  const onChangeHandler = (value: string) => {
    if (onChange) {
      onChange(value as Country);
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