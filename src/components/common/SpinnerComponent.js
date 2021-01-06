import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Container, Row } from './Layout/Layout';

const SpinnerComponent = ({
  animation = "border",
  variant = "primary"
}) => {
  return (
    <Container>
      <Row>
        <Spinner animation={animation} variant={variant} />
      </Row>
    </Container>
  )
};

export default SpinnerComponent;