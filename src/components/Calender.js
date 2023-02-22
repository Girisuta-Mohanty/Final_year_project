import React from 'react'
import MyPdf from './calender_aca.pdf'
import GoogleSignInButton from './LoginButton'
const Calender = () => {
    
  return (
    <div className='head-text'>
        <div className='head-image'>
        <img src="academic_calender_image.jpeg" style={{height:'400px'}}/>
        </div>
       <div className='text-on-image'>
        <h1>Academic Calender</h1>
       </div>
    
//        <a href={MyPdf} download="Calender.pdf"><button style={{backgroundColor:"red" ,padding:"10px",marginTop:"30px" ,fontSize:"2rem" }}>Download Here</button>
// </a>
<GoogleSignInButton/>
    </div>
  )
}

export default Calender
