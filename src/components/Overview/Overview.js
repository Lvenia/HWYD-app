import React from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Bar } from 'react-chartjs-2';

import Container from '../common/Container/Container';
import SpinnerComponent from '../common/SpinnerComponent';
import DropdownComponent from '../DropdownComponent';
import {
  TIME_PERIOD_OPTIONS,
  THIS_WEEK
} from '../../constants';
import { getOverviewAnswers } from '../../actions';
import { getDataForLinearBarChart, getOptionsForLinearBarChart } from '../../utils';

class Overview extends React.Component {

  state = {
    selectedPeriod: THIS_WEEK.value
  }

  componentDidMount = async () => {
    await this.props.getOverviewAnswers(THIS_WEEK.value)
  }

  renderContent = () => {

    if (!this.props.data.length) {

      return (
        <Row className="justify-content-md-center">
          <h1>No data for selected period</h1>
        </Row>
      );
    }

    return (
      <Bar
        data={getDataForLinearBarChart(this.props.data, this.props.timePeriod)}
        options={getOptionsForLinearBarChart(this.props.timePeriod)}
      />
    );
  }

  handleDropdownSelect = (option) => {
    this.setState({ selectedPeriod: option.value })
    this.props.getOverviewAnswers(option.value)
  }

  render() {
    if (!this.props.data.length && this.props.isLoading) {
      return <SpinnerComponent />
    }

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
    );
  }
};

const mapStateToProps = (state) => {
  return {
    data: state.overviewState.data,
    timePeriod: state.overviewState.timePeriod,
    isLoading: state.overviewState.isLoading
  }
};

export default connect(mapStateToProps, { getOverviewAnswers })(Overview);
