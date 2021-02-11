/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { Heading, ButtonsRow } from '../common/Layout/Layout';

import QuizCard from './QuizCard';
import { ACTIVITY_OPTIONS } from '../../constants';
import { ACTIVITY_CAT_KEYS, ACTIVITIES } from './questions';
import DropdownComponent from '../DropdownComponent';
import AppButton from '../AppButton';
import * as actions from '../../actions';

class ActivitiesCategory extends React.Component {
  state = {}

  componentDidMount() {
    const toLocalState = {};
    const { appState } = this.props;

    ACTIVITY_CAT_KEYS.map((k) => {
      if (k in appState) {
        toLocalState[k] = appState[k];
      }
      return toLocalState;
    });

    if (Object.keys(toLocalState).length > 0) {
      this.setState(toLocalState);
    }
  }

  handleInputChange = (activity, inputValue) => {
    const { activity: activityData } = this.state;
    this.setState({
      [activity]: {
        ...activityData,
        activityTime: inputValue,
      },
    });
  }

  handleSelectChange = (title, selectedOption) => {
    const { title: selectedTitle } = this.state;
    this.setState({
      [title]: {
        ...selectedTitle,
        energyImpact: selectedOption.value,
      },
    });
  }

  renderActivityCards() {
    return ACTIVITIES.map((a) => (
      <QuizCard
        key={a.name}
        activityTitle={a.question}
        activity={a.name}
        value={this.state[a.name] ? this.state[a.name].activityTime : 'HOURS'}
        onInputChange={this.handleInputChange}
      >
        <DropdownComponent
          options={ACTIVITY_OPTIONS}
          onSelect={(option) => this.handleSelectChange(a.name, option)}
          value={this.state[a.name] ? this.state[a.name].energyImpact : null}
          variant={(this.state[a.name] && this.state[a.name].energyImpact) ? 'secondary' : 'outline-secondary'}
          defaultLabel="Impression"
        />
      </QuizCard>
    ));
  }

  render() {
    const { submitAnswers, moveToPrevioustSection, moveToNextSection } = this.props;
    return (
      <>
        <Heading>Quiz: How much time have you spent on...</Heading>
        <div
          style={{
            justifyContent: 'space-evenly',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          {this.renderActivityCards()}
        </div>
        <ButtonsRow>
          <AppButton
            variant="light"
            label="Previous Section"
            handleClick={() => {
              moveToPrevioustSection();
            }}
          />
          <AppButton
            variant="primary"
            label="Submit"
            handleClick={() => {
              submitAnswers(this.state);
              moveToNextSection();
            }}
          />
        </ButtonsRow>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  appState: state.quizState.data,
});

export default connect(mapStateToProps, {
  submitAnswers: actions.submitAnswers,
})(ActivitiesCategory);
