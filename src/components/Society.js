import React from 'react'
import Array from './Api';
// import ImageCard from './card';
import Carousel from 'react-elastic-carousel';
import NewsCard from './newscard';
import SocietyCard from './SocietyCard';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
//   { width: 800, itemsToShow: 4 },
 
];

function Society() {

  //  const checked = useWindowPosition('header');
  return <div className="root" id='society'>
    <div className="conatiner">
    
      <h3 className="title" style={{fontSize:"3rem"}}>Societies</h3>
      <Carousel style={{width:"1000px"}} breakPoints={breakPoints} >
        {Array.map(item => <SocietyCard  place={item}/>)} 
      </Carousel>  
      </div>  
  </div>
  
}

export default Society



