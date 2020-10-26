import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DropdownComponent = (props) => {

  const [descriprion, setDescription] = useState('Mood Impact');
  const [style, setStyle] = useState('outline-secondary');

  return (
    <Dropdown>
      <Dropdown.Toggle
        style={{ width: '100%' }}
        variant={style}
        id="dropdown-basic"
      >
        {descriprion}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {props.options.map(option => {
          return (
            <Dropdown.Item
              key={option}
              title={option}
              onClick={() => {
                props.onImpactSelect(props.activity, option)
                setDescription(option)
                setStyle('secondary')
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