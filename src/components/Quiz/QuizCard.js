import React from 'react';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const QuizCard = (props) => {

  return (
    <Card style={{ width: '14rem', margin: '1%' }}>
      <Card.Body>

        <Col xs={12}>
          <Row className="justify-content-md-center">
            <Card.Title>{props.activityTitle}</Card.Title>
          </Row>

          <Row className="justify-content-md-center">
            <Col xs={12} >
              <Form.Control
                style={{ border: 'solid 1px gray' }}
                min="0"
                max="24"
                step="0.5"
                size="md"
                type="number"
                placeholder={props.value}
                onChange={(event) => { props.onInputChange(props.activity, event.target.value) }}
              />
              {props.children}
            </Col>
          </Row>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default QuizCard;