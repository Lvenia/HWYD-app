import React from 'react';
import Button from 'react-bootstrap/Button';

const RadioButton = (props) => props.options.map((option) => (
  <Button
    key={option.label}
    type="radio"
    onClick={() => {
      props.onClick(props.questionType, option.value);
    }}
    variant={props.answer === option.value ? 'light active' : 'light'}
  >
    {option.label}
  </Button>
));

export default RadioButton;
