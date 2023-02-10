import React from 'react'
import MyPdf from './calender_aca.pdf'
const Calender = () => {
    
  return (
    <div className='head-text'>
        <div className='head-image'>
        <img src="academic_calender_image.jpeg" style={{height:'400px'}}/>
        </div>
       <div className='text-on-image'>
        <h1>Academic Calender</h1>
       </div>
       <a href={MyPdf} download="Calender.pdf"><h1>Download Here</h1></a>
    </div>
  )
}

export default Calender
