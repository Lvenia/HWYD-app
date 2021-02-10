import React from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import {
  Container,
  Row,
  Paragraph,
  Heading,
  BarWrapper,
} from '../common/Layout/Layout';
import SpinnerComponent from '../common/SpinnerComponent';
import DropdownComponent from '../DropdownComponent';
import AppButton from '../AppButton';
import RulesModal from './RulesModal';
import {
  TIME_PERIOD_OPTIONS,
  THIS_WEEK,
  LAST_WEEK,
  THIS_MONTH,
  LAST_MONTH,
  THIS_YEAR,
  LAST_YEAR,
} from '../../constants';
import * as actions from '../../actions';
import { getDataForLinearBarChart, getOptionsForLinearBarChart } from './getDataForChart';

class OverviewComponent extends React.Component {
  state = {
    selectedPeriod: THIS_WEEK.value,
    showModal: false,
  }

  componentDidMount = async () => {
    const { getOverviewAnswers } = this.props;
    await getOverviewAnswers(THIS_WEEK.value);
  }

  renderContent = () => {
    const { data, timePeriod } = this.props;
    if (!data.length) {
      return (
        <Heading>No data for selected period</Heading>
      );
    }

    return (
      <div style={{ overflow: 'auto' }}>
        <BarWrapper>
          <Bar
            data={getDataForLinearBarChart(data, timePeriod)}
            options={getOptionsForLinearBarChart(timePeriod)}
          />
        </BarWrapper>
      </div>
    );
  }

  handleDropdownSelect = (option) => {
    const { getOverviewAnswers } = this.props;
    this.setState({ selectedPeriod: option.value });
    getOverviewAnswers(option.value);
  }

  renderChartTitle = (timePeriod) => {
    const { data } = this.props;
    if (data.length === 0) {
      return;
    }

    switch (timePeriod) {
      case THIS_WEEK.value:
        return 'This Is Your Current Week Overview!';
      case LAST_WEEK.value:
        return 'This Is Your Last Week Overview!';
      case THIS_MONTH.value:
        return 'This Is Your Overview For The Current Month!';
      case LAST_MONTH.value:
        return 'This Is Your Overview For The Last Month!';
      case THIS_YEAR.value:
        return 'This Is Your Overview For The Current Year!';
      case LAST_YEAR.value:
        return 'This Is Your Overview For The Previous Year!';
      default:
        return 'Chart';
    }
  }

  render() {
    const { data, isLoading } = this.props;
    const { selectedPeriod, showModal } = this.state;
    if (!data.length && isLoading) {
      return <SpinnerComponent />;
    }

    return (
      <Container>
        <Heading>{this.renderChartTitle(selectedPeriod)}</Heading>
        {this.renderContent()}
        <div>
          <Paragraph>Select another timeperiod </Paragraph>
          <Row>
            <DropdownComponent
              options={TIME_PERIOD_OPTIONS}
              defaultLabel={THIS_WEEK.label}
              value={selectedPeriod}
              onSelect={this.handleDropdownSelect}
              style={{ width: '200px', textAlign: 'center' }}
            />
          </Row>
          <Row>
            <AppButton
              label="Show the rules"
              variant="light"
              style={{
                marginTop: '3px',
                width: '200px',
                border: '1px solid #007bff',
              }}
              handleClick={() => this.setState({ showModal: true })}
            />
          </Row>
          <RulesModal
            showModal={showModal}
            hideModal={() => this.setState({ showModal: false })}
          />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.overviewState.data,
  timePeriod: state.overviewState.timePeriod,
  isLoading: state.overviewState.isLoading,
});

export default connect(mapStateToProps, {
  getOverviewAnswers: actions.getOverviewAnswers,
})(OverviewComponent);
