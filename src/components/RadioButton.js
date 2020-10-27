import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const RadioButton = (props) => {
  return props.options.map(option => {
    return (
      <Button
        className="justify-content-md-center mr-1"
        key={option.label}
        type='radio'
        onClick={() => {
          props.onClick(props.questionType, option.value)
        }}
      >
        {option.label}
      </Button>
    )
  })
}

export default RadioButton;