import Select from 'react-select';
import Image from 'next/image';
import styles from './CountryCodeSelect.module.css';
import { SelectProps } from './FormTypes';

const SelectOption: React.ComponentType<SelectProps> = (props) => {
  const { src, value } = props;
  return (
    <span className={styles.optionContainer}>
      <Image
        className={styles.optionImage}
        src={src}
        alt='flag'
        width={20}
        height={20}
      />
      {value}
    </span>
  );
};

const options = [
  {
    value: 91,
    label: <SelectOption src='/assets/images/india.png' value='+91' />,
  },
];

const CountryCodeSelect = ({ id }: { id: string }) => {
  return <Select instanceId={id} defaultValue={options[0]} options={options} />;
};

export default CountryCodeSelect;
