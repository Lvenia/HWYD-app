import React from 'react';
import Table from 'react-bootstrap/Table';

const QuizSummary = ({ state }) => {


  const renderSummaryCard = () => {

    const options = [
      {
        category: 'sleep',
        header: `You have ${state.sleptWell ? '' : 'not'} slept well`,
        details:
          `##calculate-H of ${state.sleepInterupted ? 'interupted' : 'uninterupted'} sleep, ${state.snoozing ? 'quite difficult' : 'easy'} waking up, ${state.dayNap ? 'some' : 'no'} naps during the day`

      },
      {
        category: 'nutrition',
        header: `You have ${state.mealRegularity && !state.skippedMeal && !state.junkFood ? '' : 'not'} nourished yourself well`,
        details: `${state.mealRegularity ? 'regular' : 'irregular'} meals, ${state.skippedMeal ? 'some' : 'no'} skipped meals, ${state.junkFood ? 'some' : 'no'} junk food in your system`
      },
      {
        category: 'hydration',
        header: `You have ${state.sleptWell ? '' : 'not'} slept well`,
        details: `details`
      }
    ]

    return options.map(o => {
      return (
        <Table bordered>
          <thead>
            <tr>
              <th>{o.header}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {o.details}
              </td>
            </tr>
          </tbody>
        </Table>
      )
    })

  };


  if (state) {
    return (
      <div>
        { renderSummaryCard()}
      </div>
    )
  } else { return null }

};

export default QuizSummary;