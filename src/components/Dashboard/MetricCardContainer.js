import React from 'react'
import MetricCard from './MetricCard'

const MetricCardContainer = (props) => {
  const { selectedMetrics: _selectedMetrics, metric } = props
  const selectedMetrics = _selectedMetrics && _selectedMetrics.map(({ value }) => value) || []
  return (
    <div style={{ zIndex: 2, position: 'absolute', display: 'flex' }}>
      {
        selectedMetrics.map(whichMetric => {
          return <MetricCard whichMetric={whichMetric} metric={metric} />
        })
      }
    </div>
  )
}

export default MetricCardContainer
