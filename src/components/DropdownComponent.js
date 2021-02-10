import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DropdownComponent = ({
  options = [],
  value = '',
  onSelect = () => null,
  variant = 'primary',
  defaultLabel = 'Dropdown',
  style = { width: '100%', textAlign: 'center' },
}) => {
  let selectedLabel = null;

  const selectedOption = options.find((option) => option.value === value);

  selectedLabel = selectedOption ? selectedOption.label : defaultLabel;

  return (
    <Dropdown>
      <Dropdown.Toggle
        style={style}
        variant={variant}
        id="dropdown-basic"
      >
        {selectedLabel}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item
            style={style}
            key={option.value}
            onClick={() => {
              onSelect(option);
            }}
          >
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownComponent;
