import React from 'react'
import 'chart.js'
import { LineChart as RLineChart } from 'react-chartkick'

const data = [
  { "name": "Workout", "data": { "2017-01-01": 3, "2017-01-02": 4, } },
  { "name": "Call parents", "data": { "2017-01-01": 5, "2017-01-02": 3, } }
];
const LineChart = (props) => {
  return (
    <div>
      <RLineChart data={data} />
    </div>
  )
}

export default LineChart
