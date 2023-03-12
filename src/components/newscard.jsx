import React from 'react'
import { Faculty } from './FacultyApi';
import { productData } from './NApi';

function NewsCard() {
    return(
    <div>
    <section className='main-newscard--cointainer' >
   {
     productData.slice(0, 3).map((curElem)=>{
         const {id,name,imageurl}=curElem;
         return (
           <Card
           id={id}
           img={imageurl}
           title={name}
          />
         );
     })
   }
   </section>
   
 </div>
)
}






class Card extends React.Component {
render() {
 return(
     <div className="newscard">
       <img src={this.props.img} />
       <div className="newscard-body">
         <h2>{this.props.title}</h2>
       
       </div>
     </div>
 )
}
}
export default NewsCard
