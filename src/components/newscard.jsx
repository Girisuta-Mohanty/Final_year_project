import React from 'react'
import { Faculty } from './FacultyApi';

function NewsCard() {
    return(
    <div>
    <section className='main-newscard--cointainer' >
   {
     Faculty.map((curElem)=>{
         const {id,name,image,description}=curElem;
         return (
           <Card
           img='https://picsum.photos/id/54/400/300'
           title='What I learned from my visit to The Upside Down'
           email='sbdf@gmail.com'
           number='1234567891' />
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
