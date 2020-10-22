import React from 'react';

const RadioButton = (props) => {

  return props.options.map(option => {
    return (
      <button
        className="justify-content-md-center mr-1"
        key={option.answer}
        type='radio'
        onClick={() => props.onClick(props.questionType, option.value)}
      >
        {option.answer}
      </button>
    )
  })
}

export default RadioButton;