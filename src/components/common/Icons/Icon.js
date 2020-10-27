import React from 'react';

const Icon = ({ size, icon, onMouseEnter, onMouseLeave }) => {

  return (
    <span
      style={{
        fontSize: size
      }}>
      <i
        className={`fa ${icon}`}
        onMouseEnter={() => onMouseEnter()}
        onMouseLeave={() => onMouseLeave()}
      />
    </span>
  );
};

export default Icon;