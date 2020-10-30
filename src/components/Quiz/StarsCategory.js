import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import StarComponent from './StarComponent';

import SubmitButton from '../SubmitButton';

class StarsComponent extends React.Component {

  state = {
    dayRate: this.props.choosenDayRate || 0,
    hoveredStarRate: 0
  }

  handleHoveredStar = (rate) => this.setState({ hoveredStarRate: rate })

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
        <StarComponent
          key={star.rate}
          description={star.description}
          starRate={star.rate}
          hoveredStarRate={this.state.hoveredStarRate || this.state.dayRate}
          handleStarHover={(rate) => this.setState({ hoveredStarRate: rate })}
          handleClick={(rate) => this.setState({ dayRate: rate })}
        />
      );
    })
  }

  render() {
    const payload = {
      dayRate: this.state.dayRate,
    };

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
            label={'Next Section'}
            localState={payload}
            handleClick={this.props.moveToNextSection}
          />
        </Col>
      </Container >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    choosenDayRate: state.quizSate.dayRate
  }
}

export default connect(mapStateToProps)(StarsComponent);

