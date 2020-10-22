import React from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from '../common/Container/Container';

import questions from './questions';
import QuizRow from './QuizRow';
import RadioButton from '../RadioButton';

import { CATEGORY_SLEEP } from '../../constants';

import { submitAnswers } from '../../actions'


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
      <Container>
        {this.renderSleepCatQuestions()}
        <div className="p-3 justify-content-md-center">
          <Row>
            <Col sm={12}>
              <button
                onClick={() => {
                  this.props.submitAnswers(this.state)
                }}
              >
                Submit
              </button>
            </Col>
          </Row>
        </div>

      </Container>
    );
  }
}

const mapDispatchToProps = {
  submitAnswers
};

export default connect(null, mapDispatchToProps)(SleepCategory);