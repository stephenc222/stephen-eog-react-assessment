import React from 'react'
import MetricCard from './MetricCard'

const MetricCardContainer = (props) => {
  const { selectedMetrics: _selectedMetrics, metric } = props
  const selectedMetrics = _selectedMetrics && _selectedMetrics.map(({ value }) => value)
  return (
    <div style={{ zIndex: 2, position: 'absolute', width: '60%' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', flexBasis: 1, flexShrink: 1 }}>
        {
          (selectedMetrics || []).map((whichMetric, index) => {
            return <MetricCard key={`mc_${index}`} whichMetric={whichMetric} metric={metric} />
          })
        }
      </div>
    </div>
  )
}

export default MetricCardContainer
