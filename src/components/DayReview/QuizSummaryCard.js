import React from 'react';
import Table from 'react-bootstrap/Table';

const QuizSummaryCard = ({ header, description }) => (
  <Table bordered>
    <thead>
      <tr>
        <th style={{
          textAlign: 'left',
          textIndent: '10px',
          fontSize: '16px',
          fontWeight: '400',
          padding: '5px 0px',

        }}
        >
          {header}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td
          style={{
            textAlign: 'left',
            fontSize: '14px',
            fontWeight: '300',
            padding: '10px',
          }}
        >
          {description}
        </td>
      </tr>
    </tbody>
  </Table>
);

export default QuizSummaryCard;
