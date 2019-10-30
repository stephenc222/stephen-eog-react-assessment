import React, { useState, useEffect } from 'react'
import { useQuery } from "urql";
import Subscriber from './Subscriber'
import SelectMetric from './SelectMetric'
import { connect } from 'react-redux';
import MetricCardContainer from './MetricCardContainer';
import LineChart from './LineChart'

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
    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <div>
        <MetricCardContainer selectedMetrics={selectedMetrics}  {...props} />
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ minWidth: '75%', padding: 1 }} />
        <div style={{ minWidth: '25%', maxWidth: '25%' }}>
          <SelectMetric options={getMetrics} selectedMetrics={selectedMetrics} onSelectedMetricsChange={onSelectedMetricsChange} />
        </div>
      </div>
      <div>
        <LineChart />
      </div>
      <Subscriber />
    </div >
  )
}
const mapStateToProps = (state) => {
  return {
    metric: state.metric,
    weather: state.weather
  }
}

export default connect(mapStateToProps)(Dashboard)
