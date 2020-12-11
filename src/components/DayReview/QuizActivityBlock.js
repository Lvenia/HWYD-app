import React from 'react';
import Table from 'react-bootstrap/Table';

const QuizActivityBlock = ({ activityNames, activityDurations }) => {
  const tdStyles = {
    padding: 5,
    fontSize: 14,
    textAlign: 'center'
  };

  return (
    <Table bordered>
      <tbody>
        <tr>
          {activityNames.map((name, index) => {
            return (
              <td
                key={index}
                style={{
                  ...tdStyles,
                  fontWeight: "bold",
                }}
              >
                {name}
              </td>
            )
          })}
        </tr>
        <tr>
          {activityDurations.map((duration, index) => {
            return <td key={index} style={tdStyles}>{duration}h</td>
          })}
        </tr>
      </tbody>
    </Table>
  )
};

export default QuizActivityBlock;
