import React from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { INPUT_NUMBER, INPUT_RADIOBUTTON } from '../../constants';
import { NUTRITION_CAT_QUESTIONS, NUTRITION_CAT_KEYS } from './questions';
import QuizRow from './QuizRow';
import RadioButton from '../RadioButton';

import AppButton from '../AppButton';
import InputField from '../InputField';

import { submitAnswers } from '../../actions';

class NutritionCategory extends React.Component {

  state = {}

  componentDidMount() {

    const toLocalState = {};

    NUTRITION_CAT_KEYS.map(k => {
      if (k in this.props.appState) {
        toLocalState[k] = this.props.appState[k]
      }
      return toLocalState;
    });

    if (Object.keys(toLocalState).length > 0) {
      this.setState(toLocalState)
    }
  }

  handleClick = (questionType, value) => {
    this.setState({ [questionType]: value })
  }

  renderNutritionCatQuestions() {
    return NUTRITION_CAT_QUESTIONS.map(q => {
      if (q.answerType === INPUT_RADIOBUTTON) {
        return (
          <QuizRow key={q.name} question={q.question}>

            <RadioButton
              options={
                [{
                  label: 'YES',
                  value: true
                },
                {
                  label: 'NO',
                  value: false
                }]
              }
              questionType={q.name}
              onClick={this.handleClick}
              answer={this.state[q.name]}
            />
          </QuizRow>
        );

      } else if (q.answerType === INPUT_NUMBER) {
        return (
          <QuizRow key={q.name} question={q.question}>
            <InputField
              style={{ width: '105px' }}
              type="number"
              min={0}
              max={24}
              step={0.5}
              value={this.state[q.name]}
              onInputChange={(value) => this.setState({ [q.name]: value })}
            />

          </QuizRow>
        );
      } else {
        return null;
      }

    })
  }

  render() {
    return (
      <div>
        {this.renderNutritionCatQuestions()}
        <div className="p-3 justify-content-md-center">
          <Row>
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
                  this.props.submitAnswers(this.state);
                  this.props.moveToNextSection();
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
  }
}

export default connect(mapStateToProps, { submitAnswers })(NutritionCategory);
