import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import questions from './questions';
import QuizRow from './QuizRow';
import RadioButton from '../RadioButton';
import SubmitButton from '../SubmitButton';

import { CATEGORY_SLEEP } from '../../constants';

class SleepCategory extends React.Component {

  state = {

  }

  handleClick = (questionType, value) => {
    this.setState({ [questionType]: value })
  }

  renderSleepCatQuestions() {

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
    });
  }

  render() {
    return (
      <div>
        {this.renderSleepCatQuestions()}
        <div className="p-3 justify-content-md-center">
          <Row>
            <Col sm={12}>
              <SubmitButton
                label={'Next Section'}
                localState={this.state}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default SleepCategory;