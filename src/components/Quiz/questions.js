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
  SUMMARY_HYDRATION,
} from '../../constants';

const questions = [
  {
    name: 'dayRate',
  },

  {
    question: 'Have you slept well?',
    name: 'sleptWell',
    questionCategory: CATEGORY_SLEEP,
    answerType: INPUT_RADIOBUTTON,
    summaryCardCategory: SUMMARY_SLEEP,
    renderSummaryDetails(sleptWell) {
      return `${sleptWell ? 'well-rested' : 'not well-rested'}`;
    },
    grantPoints(sleptWell) {
      if (typeof sleptWell !== 'boolean') {
        return 0;
      }
      return sleptWell ? 10 : -10;
    },
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
    answerType: INPUT_HOUR,
  },
  {
    question: 'Have you wake up in the night?',
    name: 'sleepInterupted',
    questionCategory: CATEGORY_SLEEP,
    answerType: INPUT_RADIOBUTTON,
    summaryCardCategory: SUMMARY_SLEEP,
    renderSummaryDetails(sleepInterupted) {
      return `${sleepInterupted ? 'interupted' : 'uninterupted'}`;
    },
    grantPoints(sleepInterupted) {
      if (typeof sleepInterupted !== 'boolean') {
        return 0;
      }
      return sleepInterupted ? -10 : 10;
    },
  },
  {
    question: 'Snoozing in the morning?',
    name: 'snoozing',
    questionCategory: CATEGORY_SLEEP,
    answerType: INPUT_RADIOBUTTON,
    summaryCardCategory: SUMMARY_SLEEP,
    renderSummaryDetails(snoozing) {
      return `${snoozing ? 'snoozing' : 'no snoozing'}`;
    },
    grantPoints(snoozing) {
      if (typeof snoozing !== 'boolean') {
        return 0;
      }
      return snoozing ? -10 : 10;
    },
  },
  {
    question: 'Or naps during the day?',
    name: 'dayNap',
    questionCategory: CATEGORY_SLEEP,
    answerType: INPUT_RADIOBUTTON,
    summaryCardCategory: SUMMARY_SLEEP,
    renderSummaryDetails(dayNap) {
      return `${dayNap ? 'day nap' : 'no day naps'}`;
    },
  },
  {
    question: 'Have you eaten regularly?',
    name: 'mealRegularity',
    questionCategory: CATEGORY_NUTRITION,
    answerType: INPUT_RADIOBUTTON,
    summaryCardCategory: SUMMARY_NUTRITION,
    renderSummaryDetails(mealRegularity) {
      return `${mealRegularity ? 'regular' : 'irregular'} meals`;
    },
    grantPoints(mealRegularity) {
      if (typeof mealRegularity !== 'boolean') {
        return 0;
      }
      return mealRegularity ? 10 : -10;
    },
  },

  {
    question: 'Skipped meal?',
    name: 'skippedMeal',
    questionCategory: CATEGORY_NUTRITION,
    answerType: INPUT_RADIOBUTTON,
    summaryCardCategory: SUMMARY_NUTRITION,
    renderSummaryDetails(skippedMeal) {
      return `${skippedMeal ? '' : 'no'} skipped meals`;
    },
    grantPoints(skippedMeal) {
      if (typeof skippedMeal !== 'boolean') {
        return 0;
      }
      return skippedMeal ? -10 : 10;
    },
  },
  {
    question: 'Junk food?',
    name: 'junkFood',
    questionCategory: CATEGORY_NUTRITION,
    answerType: INPUT_RADIOBUTTON,
    summaryCardCategory: SUMMARY_NUTRITION,
    renderSummaryDetails(junkFood) {
      return `${junkFood ? 'some' : 'no'} junk food`;
    },
    grantPoints(junkFood) {
      if (typeof junkFood !== 'boolean') {
        return 0;
      }
      return junkFood ? -10 : 10;
    },
  },
  {
    question: 'How many glasses of water have you had?',
    name: 'waterGlasses',
    questionCategory: CATEGORY_NUTRITION,
    answerType: INPUT_NUMBER,
    summaryCardCategory: SUMMARY_HYDRATION,
    renderSummaryDetails(waterGlasses) {
      if (waterGlasses > 1) {
        return `${waterGlasses} glasses of water`;
      }
      return `${waterGlasses} glass of water`;
    },
    grantPoints(waterGlasses) {
      if (typeof waterGlasses !== 'number' || waterGlasses < 0) {
        return 0;
      }

      if (waterGlasses < 0) {
        return 0;
      }

      if (waterGlasses === 0) {
        return -30;
      }

      if (waterGlasses <= 3) {
        return 10;
      }

      if (waterGlasses > 3 && waterGlasses < 6) {
        return 20;
      }

      return 30;
    },
  },
  {
    question: 'Work',
    name: 'work',
    questionCategory: CATEGORY_ACTIVITY,
    answerType: INPUT_COMBINED_SELECT_NUMBER,
  },
  {
    question: 'Sport',
    name: 'sport',
    questionCategory: CATEGORY_ACTIVITY,
    answerType: INPUT_COMBINED_SELECT_NUMBER,
  },
  {
    question: 'Daily tasks',
    name: 'dailyTasks',
    questionCategory: CATEGORY_ACTIVITY,
    answerType: INPUT_COMBINED_SELECT_NUMBER,
  },
  {
    question: 'Friends',
    name: 'friends',
    questionCategory: CATEGORY_ACTIVITY,
    answerType: INPUT_COMBINED_SELECT_NUMBER,
  },
  {
    question: 'Family',
    name: 'family',
    questionCategory: CATEGORY_ACTIVITY,
    answerType: INPUT_COMBINED_SELECT_NUMBER,
  },
  {
    question: 'Reading',
    name: 'reading',
    questionCategory: CATEGORY_ACTIVITY,
    answerType: INPUT_COMBINED_SELECT_NUMBER,
  },
];

export default questions;

export const ACTIVITIES = questions.filter((q) => q.questionCategory === CATEGORY_ACTIVITY);

export const NUTRITION_CAT_QUESTIONS = questions.filter(
  (q) => q.summaryCardCategory === SUMMARY_NUTRITION,
);
export const HYDRATION_CAT_QUESTIONS = questions.filter(
  (q) => q.summaryCardCategory === SUMMARY_HYDRATION,
);
export const SLEEP_CAT_QUESTIONS = questions.filter(
  (q) => q.questionCategory === CATEGORY_SLEEP,
);

export const ACTIVITY_CAT_KEYS = ACTIVITIES.map((a) => a.name);
export const NUTRITION_CAT_KEYS = NUTRITION_CAT_QUESTIONS.map((k) => k.name);
export const HYDRATION_CAT_KEYS = HYDRATION_CAT_QUESTIONS.map((k) => k.name);
export const SLEEP_CAT_KEYS = SLEEP_CAT_QUESTIONS.map((q) => q.name);
