import React from 'react'
import Card from '@material-ui/core/Card';

const MetricCard = (props) => {
  const { whichMetric, metric } = props
  const cardMetric = metric[whichMetric] || {}
  const { metric: metricName, value } = cardMetric
  return (
    <Card style={{ boxShadow: '1px 1px 1px 1px', minWidth: '15em', minHeight: '15em', zIndex: 2, marginRight: '5em' }}>
      <div
        style={{
          display: 'flex',
          flexGrow: 1,
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{metricName}</div>
          <div>{value}</div>
        </div>
      </div>
    </Card>
  )
}

export default MetricCard
