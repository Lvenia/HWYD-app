import React from 'react';
import { connect } from 'react-redux';

import Container from './common/Container/Container';
import StarComponent from '../components/Quiz/StarComponent'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { getTodaysAnswers } from '../actions'


class Day extends React.Component {

  state = {}

  //transfer data from the server to the redux state => when the component is mounted
  componentDidMount() {
    this.props.getTodaysAnswers();
  }



  //helper method for rendering satrs

  renderStars() {
    const stars = [{
      rate: 1,
      description: 'tough'
    },
    {
      rate: 2,
      description: 'challenging'
    },
    {
      rate: 3,
      description: 'acceptable'
    },
    {
      rate: 4,
      description: 'pleasant'
    },
    {
      rate: 5,
      description: 'amazing'
    }];

    return stars.map(star => {
      return (
        <StarComponent
          key={star.rate}
          description={star.description}
          starRate={star.rate}
          hoveredStarRate={this.state.hoveredStarRate || this.state.dayRate}
          handleStarHover={(rate) => this.setState({ hoveredStarRate: rate })}
          handleClick={(rate) => this.setState({ dayRate: rate })}
        />
      );
    })
  }




  render() {
    console.log(this.props.answers)
    return (
      <Container>
        <Row>
          <Col xs={5}>
            <h4>It's been a good day </h4>
            <h4>Placeholder for calendar</h4>
          </Col>
          <Col xs={7}>
            <h4>Placeholder for stars</h4>
            <h4>Placeholder for sleep summary</h4>
            <h4>Placeholder for nutrition summary</h4>
            <h4>Placeholder for hydration summary</h4>
            <h4>Placeholder for activities summary</h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    answers: state.quizState.data
  }
}
export default connect(mapStateToProps, { getTodaysAnswers })(Day);




//a containter containinng one row with two columns
//first column is a calendar with the onclick prop which sets the state with the day in format createdAt: "2020-11-10T14:53:59.100Z"
