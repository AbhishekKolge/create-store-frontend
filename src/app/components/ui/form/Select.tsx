import Select from 'react-select';

const options = [
  {
    value: 1,
    label: "Mens's Clothing",
  },
  {
    value: 2,
    label: "Women's Clothing",
  },
  {
    value: 3,
    label: 'Electronics',
  },
  {
    value: 4,
    label: 'Grocery',
  },
];

const CustomSelect = ({ id }: { id: string }) => {
  return (
    <Select
      instanceId={id}
      placeholder='Services'
      className='select'
      options={options}
    />
  );
};

export default CustomSelect;
