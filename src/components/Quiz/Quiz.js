import React from 'react';
import SleepCategory from './SleepCategory';
import NutritionCategory from './NutritionCategory';
import Container from '../common/Container/Container'

const Quiz = () => {
  return (
    <Container>
      <SleepCategory />
      <NutritionCategory />
    </Container>
  );
}

export default Quiz;
