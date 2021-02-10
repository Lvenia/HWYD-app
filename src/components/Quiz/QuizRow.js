import React from 'react';
import { Row, Paragraph } from '../common/Layout/Layout';

const QuizRow = ({ question, children }) => (
  <Row
    style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingInline: '20px',
    }}
  >
    <Paragraph>{question}</Paragraph>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  </Row>
);

export default QuizRow;
