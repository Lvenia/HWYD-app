import React from 'react';
import Button from 'react-bootstrap/Button';

const AppButton = ({
  label = ' ',
  variant = 'primary',
  href = null,
  style = {},
  handleClick = () => null,
}) => (
  <Button
    href={href}
    variant={variant}
    style={style}
    onClick={() => handleClick()}
  >
    {label}
  </Button>
);

export default AppButton;
