import {

  CATEGORY_SLEEP,
  CATEGORY_NUTRITION,
  CATEGORY_ACTIVITY,
  INPUT_NUMBER,
  INPUT_RADIOBUTTON,
  INPUT_COMBINED_SELECT_NUMBER,
  INPUT_HOUR

} from '../../constants';

const questions = [
  {
    name: 'dayRate'
  },

  {
    question: 'Have you slept well?',
    name: 'sleptWell',
    questionCategory: CATEGORY_SLEEP,
    answerType: INPUT_RADIOBUTTON,
    renderSummaryHeader: function (sleptWell) {
      if (sleptWell) {
        return `You have ${sleptWell ? '' : 'not'} slept well`
      } else {
        return 'Sleep details'
      };
    },
    renderSummaryDetails: function (sleptWell) {
      return `${sleptWell ? 'well-rested' : 'not well-rested'}, `
    }
  },

  {
    question: 'What time did you go to bed?',
    name: 'wentToBed',
    questionCategory: CATEGORY_SLEEP,
    answerType: INPUT_HOUR,
    renderSummaryDetails: function (wentToBed, wokeUp) {
      function calculateSleepInterval(wentToBed, wokeUp) {
        return 8
      };
      return `${calculateSleepInterval()}H, `
    }
  },
  {
    question: 'What time did you wake up?',
    name: 'wokeUp',
    questionCategory: CATEGORY_SLEEP,
    answerType: INPUT_HOUR
  },
  {
    question: 'Have you wake up in the night?',
    name: 'sleepInterupted',
    questionCategory: CATEGORY_SLEEP,
    answerType: INPUT_RADIOBUTTON,
    renderSummaryDetails: function (sleepInterupted) {
      return `${sleepInterupted ? 'interupted' : 'uninterupted'}, `
    }
  },
  {
    question: 'Snoozing in the morning?',
    name: 'snoozing',
    questionCategory: CATEGORY_SLEEP,
    answerType: INPUT_RADIOBUTTON,
    renderSummaryDetails: function (snoozing) {
      return `${snoozing ? 'snoozing' : 'no snoozing'}, `
    }
  },
  {
    question: 'Or naps during the day?',
    name: 'dayNap',
    questionCategory: CATEGORY_SLEEP,
    answerType: INPUT_RADIOBUTTON,
    renderSummaryDetails: function (dayNap) {
      return `${dayNap ? 'day nap' : 'no day nap'}`
    }
  },
  {
    question: 'Have you eaten regularly?',
    name: 'mealRegularity',
    questionCategory: CATEGORY_NUTRITION,
    answerType: INPUT_RADIOBUTTON,
    renderSummaryHeader: function (mealRegularity, skippedMeal, junkFood) {
      return `You have ${mealRegularity && !skippedMeal && !junkFood ? '' : 'not'} nourished yourself well`
    },
    renderSummaryDetails: function (mealRegularity) {
      return `${mealRegularity ? 'regular' : 'irregular'} meals, `
    }
  },

  {
    question: 'Skipped meal?',
    name: 'skippedMeal',
    questionCategory: CATEGORY_NUTRITION,
    answerType: INPUT_RADIOBUTTON,
    renderSummaryDetails: function (skippedMeal) {
      return `${skippedMeal ? '' : 'no'} skipped meals, `
    }
  },
  {
    question: 'Junk food?',
    name: 'junkFood',
    questionCategory: CATEGORY_NUTRITION,
    answerType: INPUT_RADIOBUTTON,
    renderSummaryDetails: function (junkFood) {
      return `${junkFood ? '' : 'no'} junk food`
    }
  },
  {
    question: 'How many glasses of water have you had?',
    name: 'waterGlasses',
    questionCategory: CATEGORY_NUTRITION,
    answerType: INPUT_NUMBER,
    renderSummaryHeader: function () {
      return `Hydrated well`
    },
    renderSummaryDetails: function (waterGlasses) {
      return `${waterGlasses} glasses of water`
    }
  },
  {
    question: 'Work',
    name: 'work',
    questionCategory: CATEGORY_ACTIVITY,
    answerType: INPUT_COMBINED_SELECT_NUMBER
  },
  {
    question: 'Sport',
    name: 'sport',
    questionCategory: CATEGORY_ACTIVITY,
    answerType: INPUT_COMBINED_SELECT_NUMBER
  },
  {
    question: 'Daily tasks',
    name: 'dailyTasks',
    questionCategory: CATEGORY_ACTIVITY,
    answerType: INPUT_COMBINED_SELECT_NUMBER
  },
  {
    question: 'Friends',
    name: 'friends',
    questionCategory: CATEGORY_ACTIVITY,
    answerType: INPUT_COMBINED_SELECT_NUMBER
  },
  {
    question: 'Family',
    name: 'family',
    questionCategory: CATEGORY_ACTIVITY,
    answerType: INPUT_COMBINED_SELECT_NUMBER
  },
  {
    question: 'Reading',
    name: 'reading',
    questionCategory: CATEGORY_ACTIVITY,
    answerType: INPUT_COMBINED_SELECT_NUMBER
  },
];

export default questions;
