import React from 'react';

const RadioButton = ({
  options,
  name,
  onChange,
}) => {
  return (
    <div>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => {
            onChange(name, option.value);
          }}
          className="m-2"
        >
          {option.label}
        </button>
      ))}

    </div>
  )
};

export default RadioButton;