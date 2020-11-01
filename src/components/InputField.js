import React from 'react';

import Form from 'react-bootstrap/Form';

const InputField = ({ style, type, onInputChange, min, max, step }) => {

  return (
    <Form.Control
      style={style}
      type={type}
      min={min}
      max={max}
      step={step}
      onChange={(event) => { onInputChange(event.target.value) }}
    />
  );
}

export default InputField;
