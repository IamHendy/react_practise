import React from 'react'
import PropTypes from 'prop-types'

const Message = ({msg}) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

Message.propTypes = {
msg: PropTypes.string.isRequired
}

export default Message
