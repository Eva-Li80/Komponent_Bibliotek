import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const StatusIcon = ({status}) => {
  return (
    <div>
        {status === "active" && <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }}/>}
        {status === "inactive" && <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'red' }}/>}
      
    </div>
  )
}

export default StatusIcon
