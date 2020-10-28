import React from 'react';

const Icon = ({
  size,
  icon,
  handleMouseEnter,
  handleMouseLeave,
  highlight
}) => {

  return (
    <span
      style={{
        fontSize: size
      }}>
      <i
        className={highlight ? `fa ${icon}` : `fa ${icon}-o`}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      />
    </span>
  );
};

export default Icon;
