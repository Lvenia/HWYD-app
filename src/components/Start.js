import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Icon from './Icon';
import SubmitButton from './SubmitButton';

class Start extends React.Component {

  state = {
    dayRate: 0,
    dayDescription: ''
  }

  renderStars() {

    const stars = [{
      rate: 1,
      description: 'tough'
    },
    {
      rate: 2,
      description: 'challenging'
    },
    {
      rate: 3,
      description: 'acceptable'
    },
    {
      rate: 4,
      description: 'pleasant'
    },
    {
      rate: 5,
      description: 'amazing'
    }];

    return stars.map(star => {
      return (
        <Col key={star.rate}>
          <div style={{ textAlign: "center" }}
            onClick={() => {
              this.setState({ dayRate: star.rate, dayDescription: star.description })
            }}
          >
            <Icon
              size={50}
              icon="fa-star-o"
            />

            <p>{star.description}</p>
          </div>
        </Col>
      )
    })
  }
  render() {
    return (
      <Container>
        <Row className="m-3 justify-content-md-center" >
          <h4 >How Was Your Day?</h4>
        </Row>
        <Row className="justify-content-md-center" >
          {this.renderStars()}
        </Row>
        <Col xs={12}>
          <SubmitButton
            label={'Start Quiz'}
            localState={this.state}
          />
        </Col>
      </Container >
    );
  }
}

export default Start;