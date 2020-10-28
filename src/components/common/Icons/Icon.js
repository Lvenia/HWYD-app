import React from 'react';

const Icon = ({
  size,
  icon
}) => {

  return (
    <span
      style={{
        fontSize: size
      }}>
      <i className={`fa ${icon}`} />
    </span>
  );
};

export default Icon;
