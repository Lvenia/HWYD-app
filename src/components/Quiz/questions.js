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
    question: 'Have you slept well?',
    name: 'sleptWell',
    questionCategory: CATEGORY_SLEEP,
    answerType: INPUT_RADIOBUTTON
  },
  {
    question: 'What time did you go to bed?',
    name: 'wentToBed',
    questionCategory: CATEGORY_SLEEP,
    answerType: INPUT_HOUR
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
    answerType: INPUT_RADIOBUTTON
  },
  {
    question: 'Snoozing in the morning?',
    name: 'snoozing',
    questionCategory: CATEGORY_SLEEP,
    answerType: INPUT_RADIOBUTTON
  },
  {
    question: 'Or naps during the day?',
    name: 'dayNap',
    questionCategory: CATEGORY_SLEEP,
    answerType: INPUT_RADIOBUTTON
  },
  {
    question: 'Have you eaten regularelly?',
    name: 'mealRegularity',
    questionCategory: CATEGORY_NUTRITION,
    answerType: INPUT_RADIOBUTTON
  },
  {
    question: 'Skipped meal?',
    name: 'skippedMeal',
    questionCategory: CATEGORY_NUTRITION,
    answerType: INPUT_RADIOBUTTON
  },
  {
    question: 'Junk food?',
    name: 'junkFood',
    questionCategory: CATEGORY_NUTRITION,
    answerType: INPUT_RADIOBUTTON
  },
  {
    question: 'How many glasses of water have you had?',
    name: 'waterGlasses',
    questionCategory: CATEGORY_NUTRITION,
    answerType: INPUT_NUMBER
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
