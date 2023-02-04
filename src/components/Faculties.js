import React from 'react'
import {Faculty} from './FacultyApi';
const Faculties = () => {
  return (
    <div>
       <section className='main-card--cointainer'>
      {
        Faculty.map((curElem)=>{
            const {id,name,category,image,description}=curElem;
            return (
                <>
                <div className='card-container' key={id}>
            <div className='card' >
            <div className='card-body'>
                <span className='card-Number card-circle subtle'>{id}</span>
                <span className='card-author subtle'>{category}</span>
                <h2 className='card-title'>{name}</h2>
                <span className='card-description subtle'>
               {description}
                </span>
                <div className='card-read'>Read</div>
            </div>
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

export default Faculties
