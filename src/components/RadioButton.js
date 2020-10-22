import React from 'react';

const RadioButton = (props) => {

  return props.options.map(option => {
    return (
      <button
        className="justify-content-md-center mr-1"
        key={option.label}
        type='radio'
        onClick={() => props.onClick(props.questionType, option.value)}
      >
        {option.label}
      </button>
    )
  })
}

export default RadioButton;