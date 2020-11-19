import React from 'react';
import Table from 'react-bootstrap/Table';

const QuizActivityBlock = ({ activityNames, activityDurations }) => {

  return (
    <Table bordered>
      <tbody>
        <tr>
          {activityNames.map(name => {
            return <td style={{ padding: 5, fontWeight: "bold", fontSize: 14, textAlign: 'center' }}>{name}</td>
          })}
        </tr>
        <tr>
          {activityDurations.map(duration => {
            return <td style={{ padding: 5, fontSize: 14, textAlign: 'center' }}>{duration}h</td>
          })}
        </tr>
      </tbody>
    </Table>
  )
};

export default QuizActivityBlock;
