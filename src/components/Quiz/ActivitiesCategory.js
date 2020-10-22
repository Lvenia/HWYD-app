import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import QuizCard from './QuizCard';
import questions from './questions';

import { CATEGORY_ACTIVITY } from '../../constants'

class ActivitiesCategory extends React.Component {

  renderActivityCards() {
    const activities = questions.filter(q => q.questionCategory === CATEGORY_ACTIVITY)
    return activities.map(a => {
      return (
        <QuizCard
          key={a.name}
        />
      )
    })
    //each q has question to be in UI and name to be in a state
  }

  render() {
    return (
      <div>
        <div className="p-3 justify-content-md-left">
          <h4>How much time have you spent on...</h4>
        </div>

        <Row className="justify-content-md-center">
          {this.renderActivityCards()}
        </Row>
      </div>
    );
  }
}

export default ActivitiesCategory;