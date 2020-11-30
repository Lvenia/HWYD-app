import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { submitQuiz, getTodaysAnswers } from '../../actions'

import SleepCategory from './SleepCategory';
import NutritionCategory from './NutritionCategory';
import ActivitiesCategory from './ActivitiesCategory';
import Container from '../common/Container/Container';
import StarsCategory from './StarsCategory';
import Row from 'react-bootstrap/Row';
import AppButton from '../AppButton';

import {
  STARS_CATEGORY_NUMBER,
  SLEEP_CATEGORY_NUMBER,
  NUTRITION_CATEGORY_NUMBER,
  ACTIVITY_CATEGORY_NUMBER,
  QUIZ_COMPLETED,
} from '../../constants';


const Quiz = ({ getAnswers, submitQuiz, history }) => {

  useEffect(() => {
    getAnswers();
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  const [categoryNumber, setCategoryNumber] = useState(STARS_CATEGORY_NUMBER);

  function renderContent() {
    if (categoryNumber === STARS_CATEGORY_NUMBER) {
      return (
        <StarsCategory
          moveToNextSection={() => setCategoryNumber(SLEEP_CATEGORY_NUMBER)}
        />
      );
    }
    else if (categoryNumber === SLEEP_CATEGORY_NUMBER) {
      return (
        <SleepCategory
          moveToNextSection={() => setCategoryNumber(NUTRITION_CATEGORY_NUMBER)}
          moveToPrevioustSection={() => setCategoryNumber(STARS_CATEGORY_NUMBER)}
        />
      );

    } else if (categoryNumber === NUTRITION_CATEGORY_NUMBER) {
      return (
        <NutritionCategory
          moveToNextSection={() => setCategoryNumber(ACTIVITY_CATEGORY_NUMBER)}
          moveToPrevioustSection={() => setCategoryNumber(SLEEP_CATEGORY_NUMBER)}
        />
      );

    } else if (categoryNumber === ACTIVITY_CATEGORY_NUMBER) {
      return (
        <ActivitiesCategory
          moveToNextSection={() => setCategoryNumber(QUIZ_COMPLETED)}
          moveToPrevioustSection={() => setCategoryNumber(NUTRITION_CATEGORY_NUMBER)}
        />
      );
    } else if (categoryNumber === QUIZ_COMPLETED) {

      return (
        <Container>
          <Row className="m-3 justify-content-md-center" >
            <h3>You did great!</h3>
          </Row>

          <Row className="justify-content-md-center" >
            <AppButton
              variant="light"
              label="Go back to edit / rewiev answers"
              handleClick={() => setCategoryNumber(ACTIVITY_CATEGORY_NUMBER)}
            />
            <AppButton
              variant="outline-primary"
              label="Finish quiz and send answers"
              handleClick={() => {
                submitQuiz()
                history.push('/day')
              }}
            />
          </Row>
        </Container>
      );
    }
  }

  return (
    <Container>
      {renderContent(categoryNumber)}
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    appSate: state.quizState.data
  };
};

export default connect(mapStateToProps, { submitQuiz, getAnswers: getTodaysAnswers })(Quiz);
