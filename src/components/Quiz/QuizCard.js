import React from 'react';

import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const QuizCard = () => {
  return (
    <Card style={{ width: '14rem', margin: '1%' }}>
      <Card.Body>
        <Col xs={12}>
          <Row className="justify-content-md-center">
            <Card.Title>ACTIVITY NAME</Card.Title>
          </Row>

          <Row className="justify-content-md-center">
            <Col xs={12}>

              <Form.Control size="md" type="number" placeholder="HOURS" />

              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  MOOD IMPACT
               </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">uplifting</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">neutral</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">discouraging</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>

        </Col>

      </Card.Body>
    </Card>
  )
};

export default QuizCard