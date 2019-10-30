import React, { useState, useEffect } from 'react'
import { useQuery } from "urql";
import Subscriber from './Subscriber'
import SelectMetric from './SelectMetric'
import MetricCard from './MetricCard'
import { connect } from 'react-redux';
import MetricCardContainer from './MetricCardContainer';

const Dashboard = (props) => {
  const [selectedMetrics, onSelectedMetricsChange] = useState([])
  const [getMetrics, onGetMetrics] = useState([])
  useEffect(() => {
    fetch('https://react.eogresources.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: '{ getMetrics }' }),
    })
      .then(res => res.json())
      .then(res => {
        onGetMetrics(res.data.getMetrics)
      });

    return () => {
    };
  }, [])
  return (
    <div>
      <div>
        <MetricCardContainer selectedMetrics={selectedMetrics}  {...props} />
      </div>
      <div>
        <SelectMetric options={getMetrics} selectedMetrics={selectedMetrics} onSelectedMetricsChange={onSelectedMetricsChange} />
      </div>
      <Subscriber />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    metric: state.metric,
    weather: state.weather
  }
}

export default connect(mapStateToProps)(Dashboard)
