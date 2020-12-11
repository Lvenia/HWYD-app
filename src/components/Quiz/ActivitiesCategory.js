import React from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import QuizCard from './QuizCard';
import { ACTIVITY_OPTIONS } from '../../constants';
import { ACTIVITY_CAT_KEYS, ACTIVITIES } from './questions';
import DropdownComponent from '../DropdownComponent';
import AppButton from '../AppButton';
import { submitAnswers } from '../../actions';

class ActivitiesCategory extends React.Component {

  state = {}

  componentDidMount() {
    const toLocalState = {}

    ACTIVITY_CAT_KEYS.map(k => {
      if (k in this.props.appState) {
        toLocalState[k] = this.props.appState[k]
      }
      return toLocalState
    })

    if (Object.keys(toLocalState).length > 0) {
      this.setState(toLocalState)
    }
  }

  handleInputChange = (activity, inputValue) => {
    this.setState({
      [activity]: {
        ...this.state[activity],
        activityTime: inputValue
      }
    })
  }

  handleSelectChange = (title, selectedOption) => {

    this.setState({
      [title]: {
        ...this.state[title],
        energyImpact: selectedOption.value
      }
    })
  }

  renderActivityCards() {

    return ACTIVITIES.map(a => {
      return (
        <QuizCard
          key={a.name}
          activityTitle={a.question}
          activity={a.name}
          value={this.state[a.name] ? this.state[a.name].activityTime : "HOURS"}
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
      );
    });
  }

  render() {
    return (
      <div>
        <div className="p-3 justify-content-md-left">
          <h4>How much time have you spent on...</h4>
        </div>
        <Row className="justify-content-md-center">
          {this.renderActivityCards()}
        </Row>
        <Col sm={12}>
          <AppButton
            variant={"light"}
            label={'Previous Section'}
            handleClick={() => {
              this.props.moveToPrevioustSection()
            }}
          />
          <AppButton
            variant={"primary"}
            label={'Submit'}
            handleClick={() => {
              this.props.submitAnswers(this.state)
              this.props.moveToNextSection()
            }}
          />
        </Col>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state.quizState.data
  };
};

export default connect(mapStateToProps, { submitAnswers })(ActivitiesCategory);