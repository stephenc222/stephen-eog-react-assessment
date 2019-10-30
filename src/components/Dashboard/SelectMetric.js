import React from 'react'
import Select from 'react-select'

const SelectMetric = (props) => {
  const { options: _options, onSelectedMetricsChange } = props
  const options = _options.map(option => ({ value: option, label: option }))
  return (
    <Select isMulti onChange={onSelectedMetricsChange} options={options} />
  )
}

export default SelectMetric
