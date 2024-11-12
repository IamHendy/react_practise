import React from 'react'
import PropTypes from 'prop-types'

const Progress = ({percentage}) => {
  return (
    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar" style={{width: `${percentage}%`}}></div>
  {percentage}% 
  </div>

  )
}

Progress.propTypes = {
    percentage: PropTypes.number.isRequired
}

export default Progress
