import React, { useState, useRef } from 'react'
import './GalleryWidget.css'

const GalleryWidget = () => {
  const [images, setImages] = useState([
    { 
      id: 1, 
      name: 'Project Alpha', 
      type: 'placeholder',
      color: '#FF6B6B' 
    },
    { 
      id: 2, 
      name: 'Sales Dashboard', 
      type: 'placeholder',
      color: '#4ECDC4' 
    }
  ])

  const fileInputRef = useRef(null)

  // Handle file selection
  const handleFileSelect = (event) => {
    const files = event.target.files
    if (files.length > 0) {
      const newImages = Array.from(files).map((file, index) => ({
        id: Date.now() + index,
        name: file.name.split('.')[0] || 'New Image',
        type: 'image',
        file: file,
        url: URL.createObjectURL(file)
      }))
      
      setImages(prev => [...prev, ...newImages])
    }
  }

  // Trigger file input click
  const handleAddImage = () => {
    fileInputRef.current?.click()
  }

  // Handle drag and drop
  const handleDrop = (event) => {
    event.preventDefault()
    const files = event.dataTransfer.files
    if (files.length > 0) {
      handleFileSelect({ target: { files } })
    }
  }

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  return (
    <div className="gallery-widget fade-in">
      <div className="widget-header">
        <h3>Photo Gallery</h3>
        <span className="image-count">{images.length} items</span>
      </div>
      
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        multiple
        accept="image/*"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
      
      <div 
        className="gallery-grid"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {images.map(image => (
          <div key={image.id} className="gallery-item">
            {image.type === 'placeholder' ? (
              <div 
                className="image-placeholder"
                style={{ backgroundColor: image.color }}
              >
                <span className="image-icon">📷</span>
              </div>
            ) : (
              <div className="image-container">
                <img 
                  src={image.url} 
                  alt={image.name}
                  className="uploaded-image"
                />
                <div className="image-overlay">
                  <span className="view-text">View</span>
                </div>
              </div>
            )}
            <p>{image.name}</p>
          </div>
        ))}
        
        {/* Add Image Button */}
        <div className="gallery-item add-button" onClick={handleAddImage}>
          <div className="image-placeholder add-placeholder">
            <span className="plus-icon">+</span>
            <span>Add Image</span>
          </div>
          <p>ADD IMAGE</p>
        </div>
      </div>
      
      <button className="add-image-btn" onClick={handleAddImage}>
        <span>+ Add New Image</span>
      </button>

      <div className="upload-hint">
        <p>Click "Add Image" or drag & drop photos here</p>
        <small>Supports: JPG, PNG, GIF</small>
      </div>
    </div>
  )
}

export default GalleryWidget