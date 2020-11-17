import {

  CATEGORY_SLEEP,
  CATEGORY_NUTRITION,
  CATEGORY_ACTIVITY,
  INPUT_NUMBER,
  INPUT_RADIOBUTTON,
  INPUT_COMBINED_SELECT_NUMBER,
  INPUT_HOUR,
  SUMMARY_SLEEP,
  SUMMARY_NUTRITION,
  SUMMARY_HYDRATION

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
    summaryCardCategory: SUMMARY_SLEEP,
    renderSummaryDetails: function (sleptWell) {
      return `${sleptWell ? 'well-rested' : 'not well-rested'}`
    }
  },

  {
    question: 'What time did you go to bed?',
    name: 'wentToBed',
    questionCategory: CATEGORY_SLEEP,
    answerType: INPUT_HOUR,
    summaryCardCategory: SUMMARY_SLEEP,
    
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
    summaryCardCategory: SUMMARY_SLEEP,
    renderSummaryDetails: function (sleepInterupted) {
      return `${sleepInterupted ? 'interupted' : 'uninterupted'}`
    }
  },
  {
    question: 'Snoozing in the morning?',
    name: 'snoozing',
    questionCategory: CATEGORY_SLEEP,
    answerType: INPUT_RADIOBUTTON,
    summaryCardCategory: SUMMARY_SLEEP,
    renderSummaryDetails: function (snoozing) {
      return `${snoozing ? 'snoozing' : 'no snoozing'}`
    }
  },
  {
    question: 'Or naps during the day?',
    name: 'dayNap',
    questionCategory: CATEGORY_SLEEP,
    answerType: INPUT_RADIOBUTTON,
    summaryCardCategory: SUMMARY_SLEEP,
    renderSummaryDetails: function (dayNap) {
      return `${dayNap ? 'day nap' : 'no day naps'}`
    }
  },
  {
    question: 'Have you eaten regularly?',
    name: 'mealRegularity',
    questionCategory: CATEGORY_NUTRITION,
    answerType: INPUT_RADIOBUTTON,
    summaryCardCategory: SUMMARY_NUTRITION,
    renderSummaryDetails: function (mealRegularity) {
      return `${mealRegularity ? 'regular' : 'irregular'} meals`
    }
  },

  {
    question: 'Skipped meal?',
    name: 'skippedMeal',
    questionCategory: CATEGORY_NUTRITION,
    answerType: INPUT_RADIOBUTTON,
    summaryCardCategory: SUMMARY_NUTRITION,
    renderSummaryDetails: function (skippedMeal) {
      return `${skippedMeal ? '' : 'no'} skipped meals`
    }
  },
  {
    question: 'Junk food?',
    name: 'junkFood',
    questionCategory: CATEGORY_NUTRITION,
    answerType: INPUT_RADIOBUTTON,
    summaryCardCategory: SUMMARY_NUTRITION,
    renderSummaryDetails: function (junkFood) {
      return `${junkFood ? 'some' : 'no'} junk food`
    }
  },
  {
    question: 'How many glasses of water have you had?',
    name: 'waterGlasses',
    questionCategory: CATEGORY_NUTRITION,
    answerType: INPUT_NUMBER,
    summaryCardCategory: SUMMARY_HYDRATION,
    renderSummaryDetails: function (waterGlasses) {
      if (waterGlasses) {
        return `${waterGlasses} glasses of water`
      } else {
        return null
      }

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
