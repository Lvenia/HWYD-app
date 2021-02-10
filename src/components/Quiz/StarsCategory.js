import React from 'react';
import { connect } from 'react-redux';
import { Row, Heading } from '../common/Layout/Layout';

import StarComponent from './StarComponent';

import AppButton from '../AppButton';

import * as actions from '../../actions';

class StarsComponent extends React.Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    dayRate: this.props.choosenDayRate || 0,
    hoveredStarRate: 0,
    isClicked: false,
  }

  componentDidUpdate(prevProps) {
    const { choosenDayRate } = this.props;
    if (prevProps.choosenDayRate !== choosenDayRate) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ dayRate: choosenDayRate });
    }
  }

  handleHoveredStar = (rate) => this.setState({ hoveredStarRate: rate })

  renderStars() {
    const { dayRate, hoveredStarRate, isClicked } = this.state;

    const stars = [{
      rate: 1,
      description: 'tough',
    },
    {
      rate: 2,
      description: 'challenging',
    },
    {
      rate: 3,
      description: 'acceptable',
    },
    {
      rate: 4,
      description: 'pleasant',
    },
    {
      rate: 5,
      description: 'amazing',
    }];

    return stars.map((star) => (
      <StarComponent
        key={star.rate}
        description={star.description}
        starRate={star.rate}
        hoveredStarRate={hoveredStarRate || dayRate}
        handleStarHover={(rate) => this.setState({ hoveredStarRate: rate, isClicked: false })}
        handleClick={(rate) => this.setState({ dayRate: rate, isClicked: true })}
        isClicked={isClicked}
      />
    ));
  }

  render() {
    const { dayRate } = this.state;
    const { submitAnswers, moveToNextSection } = this.props;
    const payload = {
      dayRate,
    };

    return (
      <>
        <Heading>How Was Your Day?</Heading>
        <Row>{this.renderStars()}</Row>
        <Row>
          <AppButton
            variant="primary"
            label="Next Section"
            handleClick={() => {
              submitAnswers(payload);
              moveToNextSection();
            }}
          />
        </Row>
      </ >
    );
  }
}

const mapStateToProps = (state) => ({
  choosenDayRate: state.quizState.data.dayRate,
});

export default connect(mapStateToProps, {
  submitAnswers: actions.submitAnswers,
})(StarsComponent);
