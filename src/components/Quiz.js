import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Quiz extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col sm={8}>
            Question................................................................
          </Col>
          <Col sm={2} >
            Value
          </Col>
          <Col sm={2}>
            Value
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Quiz;