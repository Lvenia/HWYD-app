import React from 'react';
import Table from 'react-bootstrap/Table';

const QuizSummaryCard = ({ headerText, descriptionText }) => {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>{headerText}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {descriptionText}
          </td>
        </tr>
      </tbody>
    </Table>
  )
};

export default QuizSummaryCard;

