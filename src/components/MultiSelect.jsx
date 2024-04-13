import React from 'react';
import Select from 'react-select';

const MultiSelect = ({ multiple, labels, selected, setSelected, name, index, className }) => {

  const handleChange = (selectedOptions) => {
    let temp = {...selected};
    temp[name] = selectedOptions;
    setSelected(temp);
  };

  const options = labels.map((job) => ({
    value: job,
    label: job,
  }));

  return (
    <div className="relative w-full">
      <Select
        value={selected?.[name]}
        onChange={handleChange}
        options={options}
        isMulti={multiple? true : false}
        className={className}
        classNamePrefix="select"
        hideSelectedOptions={false}
        placeholder={null}
        menuPlacement='auto'
      />
    </div>
  );
};

export default MultiSelect;