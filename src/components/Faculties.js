import React from 'react'
import {Faculty} from './FacultyApi';
import Base from './Base';
const Faculties = () => {
  return (
    <Base>
    <div style={{textAlign:"center" }}>
       <div className='main-cardd'>
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
      </div>
      
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
          <img src={this.props.img} onClick={()=> window.location.href = this.props.url} />
            <h2>{this.props.title}</h2>
            <div>{this.props.description}</div>
            <div><p>Email:  {this.props.email}</p></div>
            <div> <p>Phone-No: {this.props.number}</p></div>
           {/* <a href={this.props.url}>{this.props.url}</a> */}
          </div>
        </div>
    )
  }
}

