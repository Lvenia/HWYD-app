import React from 'react';

const Icon = ({
  size,
  icon,
}) => (
  <span
    style={{
      fontSize: size,
    }}
  >
    <i className={`fa ${icon}`} />
  </span>
);

export default Icon;
