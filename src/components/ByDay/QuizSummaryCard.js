import React from 'react';
import Table from 'react-bootstrap/Table';

const QuizSummaryCard = ({ header, description }) => {
  return (
    <Table bordered >
      <thead>
        <tr>
          <th>{header}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {description}
          </td>
        </tr>
      </tbody>
    </Table>
  )
};

export default QuizSummaryCard;

