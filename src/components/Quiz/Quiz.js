import React, { useState } from 'react';
import SleepCategory from './SleepCategory';
import NutritionCategory from './NutritionCategory';
import ActivitiesCategory from './ActivitiesCategory';
import Container from '../common/Container/Container';


const Quiz = () => {

  const [categoryNumber, setCategoryNumber] = useState(1);

  function renderContent() {
    if (categoryNumber === 1) {
      return (
        <SleepCategory
          categoryNumber={1}
          changeCatNo={setCategoryNumber}
        />
      );
    } else if (categoryNumber === 2) {
      return (
        <NutritionCategory
          categoryNumber={2}
          changeCatNo={setCategoryNumber} />
      );
    } else if (categoryNumber === 3) {
      return (
        <ActivitiesCategory
          categoryNumber={3}
          changeCatNo={setCategoryNumber}
        />
      );
    } else if (categoryNumber > 3) {
      return (
        <Container>
          <h3>Thank you! Your answers have been submited.</h3>
          <br />
          <h4>...to review or edit your data move to the section "Day".</h4>
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
