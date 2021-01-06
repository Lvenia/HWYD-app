import React from 'react';
import { Row, Paragraph } from '../common/Layout/Layout';
import Col from 'react-bootstrap/Col';

class QuizRow extends React.Component {

  render() {
    return (
      <Row
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: "20px"
        }}
      >
        <Paragraph>{this.props.question}</Paragraph>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          {this.props.children}
        </div>
      </Row >
    );
  }
}

export default QuizRow;