import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class QuizRow extends React.Component {

  render() {
    return (
      <div className="m-3 justify-content-md-center">
        <Row className="justify-content-md-center">
          <Col sm={6}>
            <h4>{this.props.question}</h4>
          </Col>
          <Col sm={2}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
}

export default QuizRow;