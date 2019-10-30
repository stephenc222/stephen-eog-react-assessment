import React from 'react'
import Card from '@material-ui/core/Card';

const MetricCard = (props) => {
  const { whichMetric, metric } = props
  const cardMetric = metric[whichMetric]
  return (
    <Card>
      {JSON.stringify(cardMetric, null, 0)}
    </Card>
  )
}

export default MetricCard
