import React from 'react';
import Table from 'react-bootstrap/Table';

const QuizActivityBlock = ({ activityNames, activityDurations }) => {
  const tdStyles = {
    padding: 5,
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
  };

  return (
    <Table>
      <tbody>
        <tr>
          {activityNames.map((name) => (
            <td
              key={name}
              style={tdStyles}
            >
              {name}
            </td>
          ))}
        </tr>
        <tr>
          {
            activityDurations.map((activityDuration) => (
              <td
                key={activityDuration.key}
                style={{ ...tdStyles, fontWeight: '200' }}
              >
                {activityDuration.duration}
                h
              </td>
            ))
          }
        </tr>
      </tbody>
    </Table>
  );
};

export default QuizActivityBlock;
