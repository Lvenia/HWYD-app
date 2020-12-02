import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DropdownComponent = (props) => {

  let selectedLabel = null;

  const selectedOption = props.options.find(option => {
    return option.value === props.value
  });
  
  selectedLabel = selectedOption ? selectedOption.label : 'Impression';

  return (
    <Dropdown>
      <Dropdown.Toggle
        style={{ width: '100%' }}
        variant={!props.value ? 'outline-secondary' : 'secondary'}
        id="dropdown-basic"
      >
        {selectedLabel}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {props.options.map(option => {
          return (
            <Dropdown.Item
              key={option.value}
              onClick={() => {
                props.onImpactSelect(props.activity, option)
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