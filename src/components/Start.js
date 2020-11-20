import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SubmitButton from './AppButton';

class Start extends React.Component {

  render() {
    return (
      <Container>
        <Row className="m-3 justify-content-md-center" >
          <h1 >Hi there! How Was Your Day?</h1>
        </Row>
        <Row className="justify-content-md-center" >
          <h4>Take a 5m to spot how simple daily actions affect your perception of the 1/365th of the year. </h4>
        </Row>
        <Row className="justify-content-md-center" >
          <SubmitButton
            label="Click here to start the quiz!"
            handleClick={() => this.props.history.push('/quiz')}
          />
        </Row>
      </Container >
    );
  }
}

export default Start;
