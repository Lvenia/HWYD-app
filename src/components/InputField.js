import React from 'react';

import Form from 'react-bootstrap/Form';

const InputField = ({
  style = { width: '105px', fontSize: '90%' },
  type,
  onInputChange,
  min,
  max,
  step,
  value,
}) => (
  <Form.Control
    style={style}
    type={type}
    min={min}
    max={max}
    step={step}
    defaultValue={value}
    onChange={(event) => { onInputChange(event.target.value); }}
  />
);

export default InputField;
