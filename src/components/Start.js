import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Icon from './Icon';

class Start extends React.Component {

  state = {
    rate: 0,
    description: ''
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
              this.setState({ rate: star.rate, description: star.description })
              this.props.history.push('/quiz')
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

    console.log(this.state)

    return (
      <Container>
        <Row className="m-3 justify-content-md-center" >
          <h4 >How Was Your Day?</h4>
        </Row>
        <Row className="justify-content-md-center" >
          {this.renderStars()}
        </Row>
      </Container >
    );
  }
}

export default Start;