import React from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MixedBarLinearChart from './MixedBarLinearChart';
import starImg from '../common/Icons/StarImg';
import smallStarImg from '../common/Icons/SmallStarImg';
import Container from '../common/Container/Container';
import SpinnerComponent from '../common/SpinnerComponent';
import DropdownComponent from '../DropdownComponent';
import {
  TIME_PERIOD_OPTIONS,
  THIS_WEEK,
  LAST_WEEK,
  THIS_MONTH,
  LAST_MONTH
} from '../../constants';
import { getOverviewAnswers } from '../../actions';

class Overview extends React.Component {

  state = {
    selectedPeriod: THIS_WEEK.value
  }

  componentDidMount = async () => {
    await this.props.getOverviewAnswers(THIS_WEEK.value)
  }

  renderContent = () => {

    let y1Ticks, chartTitle, stacked, pointStyle;

    if (this.state.selectedPeriod === THIS_WEEK.value || this.state.selectedPeriod === LAST_WEEK.value) {

      pointStyle = starImg;

      y1Ticks = {
        min: -30,
        max: 36,
        stepSize: 10
      }

      chartTitle = this.state.selectedPeriod === THIS_WEEK.value ? 'This is your current week overview!' : 'This is your last week overview!'
    };

    if (this.state.selectedPeriod === THIS_MONTH.value || this.state.selectedPeriod === LAST_MONTH.value) {
      stacked = true;
      pointStyle = smallStarImg;

      y1Ticks = {
        min: -120,
        max: 126,
        stepSize: 30
      };

      chartTitle = this.state.selectedPeriod === THIS_MONTH.value ? 'This is your overview for the current month!' : 'This is your overview for the last month!'
    };

    const y2Ticks = {
      min: 0,
      max: 5.3,
      stepSize: 1,
    };

    return (
      <MixedBarLinearChart
        data={this.props.data}
        y1Ticks={y1Ticks}
        y2Ticks={y2Ticks}
        chartTitle={chartTitle}
        stacked={stacked}
        pointStyle={pointStyle}
      />
    )
  }

  handleDropdownSelect = (option) => {
    this.setState({ selectedPeriod: option.value })
    this.props.getOverviewAnswers(option.value)
  }

  render() {

    if (!this.props.data.length || this.props.isLoading) {
      return <SpinnerComponent />
    }

    if (this.props.data.length) {
      return (
        <Container >
          {this.renderContent()}
          <Row className="justify-content-md-center">
            <p>{'=> Select another timeperiod <='} </p>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={4}>
              <DropdownComponent
                options={TIME_PERIOD_OPTIONS}
                defaultLabel={THIS_WEEK.label}
                value={this.state.selectedPeriod}
                onSelect={this.handleDropdownSelect}
              />
            </Col>
          </Row>
        </Container>
      )
    }
  }
};

const mapStateToProps = (state) => {
  return {
    data: state.overviewState.data,
    timePeriod: state.overviewState.timePeriod,
    isLoading: state.overviewState.isLoading
  }
}
export default connect(mapStateToProps, { getOverviewAnswers })(Overview);
