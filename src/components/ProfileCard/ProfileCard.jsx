import React, { useState } from 'react'
import './ProfileCard.css'

const ProfileCard = () => {
  const [activeTab, setActiveTab] = useState('about')

  const tabContent = {
    about: {
      title: "About Me",
      content: [
        "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.",
        "I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a..."
      ]
    },
    experiences: {
      title: "Professional Journey",
      content: [
        "🎯 5+ years in Sales & Customer Success",
        "🏆 Top Performer 2022 & 2025",
        "💼 Specialized in Enterprise Solutions",
        "🌐 Certified Salesforce Administrator"
      ]
    },
    recommended: {
      title: "Recommendations",
      content: [
        "📊 Monthly Business Review Templates",
        "🔗 CRM Integration Best Practices",
        "🎯 Sales Forecasting Tools",
        "🤝 Client Onboarding Checklist"
      ]
    }
  }

  return (
    <div className="profile-card fade-in">
      <div className="card-header">
        <div className="avatar">
          <span>DS</span>
        </div>
        <div className="user-info">
          <h2>Dave Smith</h2>
          <p>Sales Representative • Salesforce</p>
        </div>
      </div>

      <div className="tabs-container">
        <div className="tabs">
          {Object.keys(tabContent).map(tab => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tabContent[tab].title}
            </button>
          ))}
        </div>
        
        <div className="tab-content slide-in">
          <h3>{tabContent[activeTab].title}</h3>
          {tabContent[activeTab].content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard