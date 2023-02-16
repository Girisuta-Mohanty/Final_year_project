import React from 'react'
import {Faculty} from './FacultyApi';
const Faculties = () => {
  return (
    <div style={{textAlign:"center" }}>
       <section className='main-card--cointainer'>
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

export default Faculties




class Card extends React.Component {
  render() {
    return(
        <div className="card">
          <img src={this.props.img} />
          <div className="card-body">
            <h2>{this.props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <div><p>Email:</p> <h5>{this.props.email}</h5></div>
            <div> <p>Phone-No:</p> <h5>{this.props.number}</h5></div>
           
          </div>
        </div>
    )
  }
}

