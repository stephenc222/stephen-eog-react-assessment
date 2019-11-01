import React from 'react'
import 'chart.js'
import { LineChart as RLineChart } from 'react-chartkick'
import dayjs from 'dayjs'

const data = [
  { "name": "Workout", "data": { "2017-01-01": 3, "2017-01-02": 4, } },
  { "name": "Call parents", "data": { "2017-01-01": 5, "2017-01-02": 3, } }
]

// TODO: assumes "metric will be added on end of getGraphMetrics"
const transformChartData = ({ metric, getGraphMetrics }) => {
  if (!getGraphMetrics.length) {
    return []
  }

  const nextChartData = getGraphMetrics.map(({ metric: _metric, measurements }) => {
    if (metric[_metric] && metric[_metric].value !== measurements[measurements.length - 1].value) {
      measurements.push({ at: metric[_metric].at, value: metric[_metric].value })
      measurements.shift()
    }
    const data = {}
    measurements.forEach(({ at, value }) => {
      data[dayjs(at).format('hh:mm:ss A')] = value
    })
    return ({ name: _metric, data })
  })

  return nextChartData
}

// TODO: on mount then update --> fetch the latest measurements. Then, add the subscription received data to the 
// graph data model
const LineChart = ({ metric, getGraphMetrics }) => {
  if (!getGraphMetrics.length) {
    return null
  }
  const metricData = transformChartData({ metric, getGraphMetrics })
  return (
    <div>
      <RLineChart data={metricData} />
    </div>
  )
}

export default LineChart
