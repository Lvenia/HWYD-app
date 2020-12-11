import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DropdownComponent = ({
  options = [],
  value = "",
  onSelect = () => null,
  variant = "primary",
  defaultLabel = "Dropdown"
}) => {

  let selectedLabel = null;

  const selectedOption = options.find(option => {
    return option.value === value
  });

  selectedLabel = selectedOption ? selectedOption.label : defaultLabel;

  return (
    <Dropdown>
      <Dropdown.Toggle
        style={{ width: '100%' }}
        variant={variant}
        id="dropdown-basic"
      >
        {selectedLabel}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map(option => {
          return (
            <Dropdown.Item
              style={{ width: '100%' }}
              key={option.value}
              onClick={() => {
                onSelect(option)
              }}
            >
              {option.label}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownComponent;