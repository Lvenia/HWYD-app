import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';

const SpinnerComponent = ({
  animation = "border",
  variant = "primary"
}) => {
  return (
    <Row className="m-3 justify-content-md-center align-items-center" >
      <Spinner animation={animation} variant={variant} />
    </Row>
  )
};

export default SpinnerComponent;