import React from 'react';
import Button from 'react-bootstrap/Button';

const AppButton = ({
  label = " ",
  variant = 'primary',
  href = null,
  handleClick = () => null,
}) => {
  return (
    <Button
      href={href}
      variant={variant}
      onClick={() => handleClick()}
    >
      {label}
    </Button>
  );
};

export default AppButton;

