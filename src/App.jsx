import React from 'react'
import ProfileCard from './components/ProfileCard/ProfileCard'
import GalleryWidget from './components/GalleryWidget/GalleryWidget'
import CookieNotice from './components/CookieNotice/CookieNotice'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="container">
        {/* Left Half - Empty but Responsive */}
        <div className="left-panel"></div>
        
        {/* Right Half with Widgets */}
        <div className="right-panel">
          <ProfileCard />
          <GalleryWidget />
          <CookieNotice />
        </div>
      </div>
    </div>
  )
}

export default App