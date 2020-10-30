import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import questions from './questions';
import { CATEGORY_NUTRITION, INPUT_NUMBER, INPUT_RADIOBUTTON } from '../../constants';
import QuizRow from './QuizRow';
import RadioButton from '../RadioButton';

import SubmitButton from '../SubmitButton';
import InputField from '../InputField';

class NutritionCategory extends React.Component {

  state = {}

  handleClick = (questionType, value) => {
    this.setState({ [questionType]: value })
  }

  renderNutritionCatQuestions() {
    const nutritionCatQuestions = questions.filter(q => q.questionCategory === CATEGORY_NUTRITION)

    return nutritionCatQuestions.map(q => {
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
                handleClick={this.props.moveToNextSection}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }

}

export default NutritionCategory;
