import React from 'react';
import { connect } from 'react-redux';
import { Row, Heading } from '../common/Layout/Layout';

import StarComponent from './StarComponent';

import AppButton from '../AppButton';

import { submitAnswers } from '../../actions'

class StarsComponent extends React.Component {

  componentDidUpdate(prevProps) {
    if (prevProps.choosenDayRate !== this.props.choosenDayRate) {
      this.setState({ dayRate: this.props.choosenDayRate })
    }
  }

  state = {
    dayRate: this.props.choosenDayRate || 0,
    hoveredStarRate: 0,
    isClicked: false
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
          handleStarHover={(rate) => this.setState({ hoveredStarRate: rate, isClicked: false })}
          handleClick={(rate) => this.setState({ dayRate: rate, isClicked: true })}
          isClicked={this.state.isClicked}
        />
      );
    })
  }

  render() {
    const payload = {
      dayRate: this.state.dayRate,
    };

    return (
      <>
        <Heading >How Was Your Day?</Heading>
        <Row>{this.renderStars()}</Row>
        <Row>
          <AppButton
            variant={"primary"}
            label={'Next Section'}
            handleClick={() => {
              this.props.submitAnswers(payload)
              this.props.moveToNextSection()
            }}
          />
        </Row>
      </ >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    choosenDayRate: state.quizState.data.dayRate
  }
};

export default connect(mapStateToProps, { submitAnswers })(StarsComponent);
