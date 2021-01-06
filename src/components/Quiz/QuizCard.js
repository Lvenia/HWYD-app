import React from 'react';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const QuizCard = (props) => {
  return (
    <Card style={{ width: '200px', margin: '10px' }}>
      <Card.Body>
        <Card.Title>
          {props.activityTitle}
        </Card.Title>
          <Form.Control
            style={{ border: "solid 1px gray", textAlign: "center" }}
            min="0"
            max="24"
            step="0.5"
            size="md"
            type="number"
            placeholder={props.value}
            onChange={(event) => { props.onInputChange(props.activity, event.target.value) }}
          />
          {props.children}
      </Card.Body>
    </Card>
  );
};

export default QuizCard;