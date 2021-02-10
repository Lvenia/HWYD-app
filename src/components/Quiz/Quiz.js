import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import SleepCategory from './SleepCategory';
import NutritionCategory from './NutritionCategory';
import ActivitiesCategory from './ActivitiesCategory';
import StarsCategory from './StarsCategory';
import AppButton from '../AppButton';
import { Container, Heading, ButtonsRow } from '../common/Layout/Layout';

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
    if (categoryNumber === SLEEP_CATEGORY_NUMBER) {
      return (
        <SleepCategory
          moveToNextSection={() => setCategoryNumber(NUTRITION_CATEGORY_NUMBER)}
          moveToPrevioustSection={() => setCategoryNumber(STARS_CATEGORY_NUMBER)}
        />
      );
    }
    if (categoryNumber === NUTRITION_CATEGORY_NUMBER) {
      return (
        <NutritionCategory
          moveToNextSection={() => setCategoryNumber(ACTIVITY_CATEGORY_NUMBER)}
          moveToPrevioustSection={() => setCategoryNumber(SLEEP_CATEGORY_NUMBER)}
        />
      );
    }
    if (categoryNumber === ACTIVITY_CATEGORY_NUMBER) {
      return (
        <ActivitiesCategory
          moveToNextSection={() => setCategoryNumber(QUIZ_COMPLETED)}
          moveToPrevioustSection={() => setCategoryNumber(NUTRITION_CATEGORY_NUMBER)}
        />
      );
    }
    if (categoryNumber === QUIZ_COMPLETED) {
      return (
        <>
          <Heading>You did great!</Heading>
          <ButtonsRow>
            <AppButton
              variant="light"
              label="Go back to edit / rewiev answers"
              handleClick={() => setCategoryNumber(ACTIVITY_CATEGORY_NUMBER)}
            />
            <AppButton
              variant="outline-primary"
              label="Finish quiz and send answers"
              handleClick={async () => {
                await submitQuiz();
                history.push('/day');
              }}
            />
          </ButtonsRow>
        </>
      );
    }
  }

  return (
    <Container>
      {renderContent(categoryNumber)}
    </Container>
  );
};

const mapDispatchToProps = {
  submitQuiz: actions.submitQuiz,
  getAnswers: actions.getTodaysAnswers,
};

export default connect(null, mapDispatchToProps)(withRouter(Quiz));
