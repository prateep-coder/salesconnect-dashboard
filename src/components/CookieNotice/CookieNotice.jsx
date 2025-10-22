import React from 'react'
import './CookieNotice.css'

const CookieNotice = () => {
  return (
    <div className="cookie-notice fade-in">
      <div className="notice-content">
        <p>
          This platform uses advanced analytics and machine learning to enhance your experience. 
          We prioritize your privacy while delivering personalized insights and recommendations.
        </p>
        
        <div className="cookie-actions">
          <button className="cookie-btn primary">Privacy Settings</button>
          <button className="cookie-btn secondary">Essential Only</button>
          <button className="cookie-btn secondary">Accept All</button>
        </div>
      </div>
    </div>
  )
}

export default CookieNotice