import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DropdownComponent = (props) => {

  return (
    <Dropdown>
      <Dropdown.Toggle
        style={{ width: '100%' }}
        variant={!props.selectedOption ? 'outline-secondary' : 'secondary'}
        id="dropdown-basic"
      >
        {props.selectedOption || 'Mood Impact'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {props.options.map(option => {
          return (
            <Dropdown.Item
              key={option}
              title={option}
              onClick={() => {
                props.onImpactSelect(props.activity, option)
              }}
            >
              {option}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownComponent;