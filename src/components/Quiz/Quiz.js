import React from 'react';
import SleepCategory from './SleepCategory';
import NutritionCategory from './NutritionCategory';
import ActivitiesCategory from './ActivitiesCategory';
import Container from '../common/Container/Container';

const Quiz = () => {
  return (
    <Container>
      <SleepCategory />
      <NutritionCategory />
      <ActivitiesCategory />
    </Container>
  );
}

export default Quiz;
