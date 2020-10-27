import React from 'react';

const Icon = (props) => {
  return (
    <span style={{
      fontSize: props.size
    }}>
      <i className={`fa ${props.icon}`} />
    </span>
  )
};

export default Icon;