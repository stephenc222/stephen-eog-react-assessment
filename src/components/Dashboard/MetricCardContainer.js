import React from 'react'
import MetricCard from './MetricCard'

const MetricCardContainer = (props) => {
  const { selectedMetrics: _selectedMetrics, metric } = props
  const selectedMetrics = _selectedMetrics && _selectedMetrics.map(({ value }) => value) || []
  return (
    <div>
      {
        selectedMetrics.map(whichMetric => {
          return <MetricCard whichMetric={whichMetric} metric={metric} />
        })
      }
    </div>
  )
}

export default MetricCardContainer
