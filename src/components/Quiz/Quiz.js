import React, { useState } from 'react';
import SleepCategory from './SleepCategory';
import NutritionCategory from './NutritionCategory';
import ActivitiesCategory from './ActivitiesCategory';
import Container from '../common/Container/Container';
import StarsCategory from './StarsCategory';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppButton from '../AppButton';

import {
  STARS_CATEGORY_NUMBER,
  SLEEP_CATEGORY_NUMBER,
  NUTRITION_CATEGORY_NUMBER,
  ACTIVITY_CATEGORY_NUMBER,
  QUIZ_COMPLETED,
} from '../../constants';


const Quiz = () => {

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
          <h3>Thank you! Your answers have been submited.</h3>
          <br />
          <h4>...to review or edit your data click "Go Back".</h4>
          <Row >
            <Col sm={12}>
              <AppButton
                variant={"light"}
                label={'Go Back'}
                handleClick={() => setCategoryNumber(ACTIVITY_CATEGORY_NUMBER)}
              />
            </Col>
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

export default Quiz;
