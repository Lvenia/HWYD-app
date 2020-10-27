import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import questions from './questions';
import { CATEGORY_NUTRITION } from '../../constants';
import QuizRow from './QuizRow';
import RadioButton from '../RadioButton';

import SubmitButton from '../SubmitButton';

class NutritionCategory extends React.Component {

  state = {

  }

  handleClick = (questionType, value) => {
    this.setState({ [questionType]: value })
  }



  renderNutritionCatQuestions() {
    const nutritionCatQuestions = questions.filter(q => q.questionCategory === CATEGORY_NUTRITION)

    return nutritionCatQuestions.map(q => {
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
          />
        </QuizRow>
      )
    })
  }

  render() {

    console.log(this.state)
    return (
      <div>
        {this.renderNutritionCatQuestions()}
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

export default NutritionCategory;
