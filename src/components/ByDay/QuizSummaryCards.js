import React from 'react';
import Table from 'react-bootstrap/Table';
import questions from '../Quiz/questions';
import { CATEGORY_SLEEP, CATEGORY_NUTRITION } from '../../constants';

const QuizSummaryCards = ({ state }) => {

  const renderSummaryCards = () => {

    const data = [
      {
        header: 'header1',
        description: []
      },
      {
        header: 'header2',
        description: []
      },
      {
        header: 'header3',
        description: []
      }
    ];

    questions.map(q => {

      switch (q.questionCategory) {

        case CATEGORY_SLEEP:
          if (q.renderSummaryHeader) {
            data[0].header = q.renderSummaryHeader(state.sleptWell);
          }
          if (q.renderSummaryDetails) {
            data[0].description.push(q.renderSummaryDetails(state[q.name]));
          }

        case CATEGORY_NUTRITION:

          if (q.renderSummaryHeader) {
            if (q.name === 'waterGlasses') {
              data[2].header = q.renderSummaryHeader(state.waterGlasses)
            } else {
              data[1].header = q.renderSummaryHeader(state.mealRegularity, state.skippedMeal, state.junkFood)
            }
          }

          if (q.renderSummaryDetails) {
            if (q.name === 'waterGlasses') {
              data[2].description.push(q.renderSummaryDetails(state[q.name]))
            } else if (q.questionCategory === CATEGORY_NUTRITION) {
              data[1].description.push(q.renderSummaryDetails(state[q.name]))
            }
          }
        default:
          return null;
      }
    });

    return data.map(category => {
      return (
        <Table bordered>
          <thead>
            <tr>
              <th>{category.header}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {category.description}
              </td>
            </tr>
          </tbody>
        </Table>
      );
    })
  };

  if (state) {
    return (
      <div>
        {renderSummaryCards()}
        <h4>Place for the activities table</h4>
      </div>
    );
  } else {
    return (
      <div>Loading</div>
    );
  }
};

export default QuizSummaryCards;