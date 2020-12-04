import React from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { SLEEP_CAT_QUESTIONS, SLEEP_CAT_KEYS } from './questions';
import QuizRow from './QuizRow';
import RadioButton from '../RadioButton';
import InputField from '../InputField';
import AppButton from '../AppButton';
import { submitAnswers } from '../../actions';

import { INPUT_RADIOBUTTON, INPUT_HOUR } from '../../constants';

class SleepCategory extends React.Component {

  state = {}

  componentDidMount() {

    const toLocalState = {}

    SLEEP_CAT_KEYS.map(k => {

      if (k in this.props.appState) {
        toLocalState[k] = this.props.appState[k]
      }
      return toLocalState;
    })

    if (Object.keys(toLocalState).length > 0) {
      this.setState(toLocalState)
    }
  }

  handleClick = (questionType, value) => {
    this.setState({ [questionType]: value })
  }

  renderSleepCatQuestions() {

    return SLEEP_CAT_QUESTIONS.map((q) => {

      if (q.answerType === INPUT_RADIOBUTTON) {
        return (
          <QuizRow
            key={q.name}
            question={q.question}
          >
            <RadioButton
              options={
                [
                  {
                    label: 'YES',
                    value: true
                  },
                  {
                    label: 'NO',
                    value: false
                  }
                ]
              }
              questionType={q.name}
              onClick={this.handleClick}
              answer={this.state[q.name]}
            />
          </QuizRow>
        );

      } else if (q.answerType === INPUT_HOUR) {
        return (
          <QuizRow
            key={q.name}
            question={q.question}
          >
            <InputField
              style={{ width: '105px' }}
              type="time"
              value={this.state[q.name]}
              onInputChange={(value) => this.setState({ [q.name]: value })}
            />
          </QuizRow>
        )
      } else {
        return null;
      }

    });
  }

  render() {
    return (
      <div>
        {this.renderSleepCatQuestions()}
        <div className="p-3 justify-content-md-center">
          <Row >
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
                label={'Next Section'}
                handleClick={() => {
                  this.props.submitAnswers(this.state)
                  this.props.moveToNextSection()
                }}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state.quizState.data
  };
};

export default connect(mapStateToProps, { submitAnswers })(SleepCategory);