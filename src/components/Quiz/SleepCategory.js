import React from 'react';

import questions from './questions';

import { CATEGORY_SLEEP } from '../../constants';

import QuizRow from './QuizRow';
import RadioButton from '../RadioButton';


class SleepCategory extends React.Component {

  state = {

  }

  handleClick = (questionType, value) => {
    this.setState({ [questionType]: value })
  }

  renderQuizRow() {

    const sleepCatQuestions = questions.filter((q) => q.questionCategory === CATEGORY_SLEEP);

    return sleepCatQuestions.map((q) => {
      return (
        <QuizRow
          key={q.name}
          question={q.question}
        >
          <RadioButton
            options={
              [
                {
                  answer: 'YES',
                  value: true
                },
                {
                  answer: 'NO',
                  value: false
                }
              ]
            }
            questionType={q.name}
            onClick={this.handleClick}
          />
        </QuizRow>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderQuizRow()}
      </div>
    );
  }
}

export default SleepCategory;