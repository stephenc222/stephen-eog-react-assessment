import React from 'react'
import 'chart.js'
import { LineChart as RLineChart } from 'react-chartkick'

const data = [
  { "name": "Workout", "data": { "2017-01-01": 3, "2017-01-02": 4, } },
  { "name": "Call parents", "data": { "2017-01-01": 5, "2017-01-02": 3, } }
];

// TODO: assumes "metric will be added on end of getGraphMetrics"
const transformChartData = ({ metric, getGraphMetrics }) => {
  console.log('transformChartData', { metric, getGraphMetrics })
  if (!getGraphMetrics.length) {
    return []
  }

  const nextChartData = getGraphMetrics.map(({ _metric, measurements }) => {
    if (metric[_metric]) {
      measurements.push({ value: metric[_metric].value })
    }
    return ({ name: _metric, data: { ...measurements.map(({ at, value }) => (value)) } })
  })

  return nextChartData
}

// TODO: on mount then update --> fetch the latest measurements. Then, add the subscription received data to the 
// graph data model
const LineChart = ({ metric, getGraphMetrics }) => {
  const metricData = transformChartData({ metric, getGraphMetrics })
  console.log({ metricData, data, length: Object.keys(metricData[0] && metricData[0].data || {}).length })
  return (
    <div>
      <RLineChart data={metricData} />
    </div>
  )
}

export default LineChart
