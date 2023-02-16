import React from 'react'
import ImageSlider from './ImageSlider'
import images from './images'
const ImCara = () => {
  return (
    <div style={{height:"60%" , marginBottom:"2px"}}>
      <ImageSlider images={images}/>
    </div>
  )
}

export default ImCara
