import React from 'react';
import './styles.css'

// eslint-disable-next-line react/prop-types
const Panel = ({ children }) => {
  return (
    <div className="panel">
      <div className="panel__content">
        {children}
      </div>
    </div>
  )
}

export default Panel
