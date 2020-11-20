import React from 'react';
import Button from 'react-bootstrap/Button';

const AppButton = ({
  label = '',
  variant = 'primary',
  handleClick = () => null
}) => {
  return (
    <Button
      variant={variant}
      onClick={() => handleClick()}
    >
      {label}
    </Button>
  );
};

export default AppButton;

