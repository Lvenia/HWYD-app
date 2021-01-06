import React from 'react';
import Table from 'react-bootstrap/Table';

const QuizSummaryCard = ({ header, description }) => {
  return (
    <Table bordered >
      <thead>
        <tr>
          <th style={{
            textAlign: "left",
            fontSize: "18px",
            fontWeight: "400",
            padding: "0px",
            border: "1px solid yellow",
          }}>
            {header}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            style={{
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "300",
              border: "1px solid green",
              padding: "5px 5px 10px 10px"
            }}>
            {description}
          </td>
        </tr>
      </tbody>
    </Table >
  )
};

export default QuizSummaryCard;
