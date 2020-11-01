import React from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import QuizCard from './QuizCard';
import questions from './questions';
import { CATEGORY_ACTIVITY } from '../../constants'
import DropdownComponent from '../DropdownComponent';
import AppButton from '../AppButton';
import { submitAnswers } from '../../actions';

class ActivitiesCategory extends React.Component {

  state = {}

  handleInputChange = (activity, inputValue) => {
    this.setState({
      [activity]: {
        ...this.state[activity],
        activityTime: inputValue
      }
    })
  }

  handleSelectChange = (activity, selectedOption) => {
    this.setState({
      [activity]: {
        ...this.state[activity],
        energyImpact: selectedOption
      }
    })
  }

  renderActivityCards() {

    const activities = questions.filter(q => q.questionCategory === CATEGORY_ACTIVITY);

    return activities.map(a => {
      return (
        <QuizCard
          key={a.name}
          activityTitle={a.question}
          activity={a.name}
          onInputChange={this.handleInputChange}
        >
          <DropdownComponent
            options={['uplifting', 'neutral', 'discouraging']}
            activity={a.name}
            onImpactSelect={this.handleSelectChange}
          />
        </QuizCard>
      );
    });
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
        <Col sm={12}>
          <AppButton
            variant={"light"}
            label={'Previous Section'}
            handleClick={() => {
              this.props.moveToPrevioustSection()
            }}
          />
          <AppButton
            variant={"primary"}
            label={'Submit'}
            handleClick={() => {
              this.props.submitAnswers(this.state)
              this.props.moveToNextSection()
            }}
          />
        </Col>
      </div>
    );
  }
}

export default connect(null, { submitAnswers })(ActivitiesCategory);