import React from 'react'
import {Alumni} from './AlumniApi';
const Alumnus = () => {
  return (
    <div>
       <section className='main-card--cointainer'>
      {
        Alumni.map((curElem)=>{
            const {id,name,image,profession}=curElem;
            return (
                <>
                <div className='card-container' key={id}>
            <div className='card' >
            <div className='card-body'>
                <span className='card-Number card-circle subtle'>{id}</span>
                
                <h2 className='card-title'>{name}</h2>
                <span className='card-description subtle'>
               {profession}
                </span>
            </div>
            <img src={image} alt="image" className='card-media'/>
        </div>
      </div>
                </>
            );
        })
      }
      </section>
      
    </div>
  )
}

export default Alumnus