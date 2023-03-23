import React from 'react'
import {Faculty} from './FacultyApi';
import Base from './Base';
const Faculties = () => {
  return (
    <Base>
    <div style={{textAlign:"center" }}>
       <section className='main-card--cointainer'>
      {
        Faculty.map((curElem)=>{
            const {id,image,name,profession,email,description,url}=curElem;
            return (
              <Card
              img={image}
              title={name}
              email={email}
              description={description}
              url={url} />
            );
        })
      }
      </section>
      
    </div>
    </Base>
    
  )
}

export default Faculties




class Card extends React.Component {
  render() {
    return(
        <div className="card">
          
          <div className="card-body">
          <img src={this.props.img} style={{height:"40%"}}onClick={()=> window.location.href = this.props.url} />
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
            <div><p>Email:</p> <h5>{this.props.email}</h5></div>
            <div> <p>Phone-No:</p> <h5>{this.props.number}</h5></div>
           {/* <a href={this.props.url}>{this.props.url}</a> */}
          </div>
        </div>
    )
  }
}

