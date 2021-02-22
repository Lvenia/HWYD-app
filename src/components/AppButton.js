import React from 'react';
import Button from 'react-bootstrap/Button';

const AppButton = ({
  shouldBeDisabled = false,
  label = ' ',
  variant = 'primary',
  href = null,
  style = {},
  handleClick = () => null,
}) => (
  <Button
    disabled={shouldBeDisabled}
    href={href}
    variant={variant}
    style={style}
    onClick={() => handleClick()}
  >
    {label}
  </Button>
);

export default AppButton;
