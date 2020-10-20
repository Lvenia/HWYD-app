import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import RadioButton from './RadioButton'

class QuizRow extends React.Component {

  state = {

  }

  handleClick = (questionType, value) => {
    console.log('Click!' + questionType + value)
    this.setState({ [questionType]: value })
  }

  render() {

    console.log(this.state)
    
    return (
      <div className="m-3 justify-content-md-center">
        <Row className="justify-content-md-center">
          <Col sm={6}>
            <h4>{this.props.question}</h4>
          </Col>
          <Col sm={2}>
            <RadioButton
              options={
                [
                  {
                    answer: 'YES',
                    value: true
                  },
                  {
                    answer: 'NO',
                    value: false
                  }
                ]
              }

              questionType={this.props.name}
              onClick={this.handleClick}

            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default QuizRow;