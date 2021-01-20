import React from 'react';
import { connect } from 'react-redux';

import { Heading, ButtonsRow } from '../common/Layout/Layout';
import { INPUT_NUMBER, INPUT_RADIOBUTTON } from '../../constants';
import { NUTRITION_CAT_QUESTIONS, NUTRITION_CAT_KEYS, HYDRATION_CAT_QUESTIONS } from './questions';
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

      } else {
        return null;
      }
    })
  };

  renderHydrationCatQuestions() {
    return HYDRATION_CAT_QUESTIONS.map(q => {
      if (q.answerType === INPUT_NUMBER) {
        return (
          <QuizRow key={q.name} question={q.question}>
            <InputField
              type="number"
              min={0}
              max={24}
              step={1}
              value={this.props.appState[q.name]}
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
      <>
        <Heading >Quiz: Nutrition Category</Heading>
        {this.renderNutritionCatQuestions()}
        {this.renderHydrationCatQuestions()}
        <ButtonsRow>
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
        </ButtonsRow>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state.quizState.data
  }
};

export default connect(mapStateToProps, { submitAnswers })(NutritionCategory);
