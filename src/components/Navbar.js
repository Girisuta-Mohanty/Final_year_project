import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import DropDown from './DropDown'
import Faculties from './Faculties'
import { useState } from 'react'
const Navbar = ({filterItem,uniqueList}) => {
  const [state,setState]=useState(false);
  const showDropDown=()=>{
    setState(true);
  }
  const hideDropDown=()=>{
    setState(false);
  }
  return (
    <div>
        <nav className='dropdown'>
        <div className="logo">
          <h2>
            <span>I</span>iit
            <span>B</span>hubaneswar
          </h2>
        </div>
      <Link to='/Faculties' className='menu-link dropdown-menu'>ETC Faculties</Link>
     <div >
      <div className='dropdown-menu' onMouseEnter={showDropDown} onMouseLeave={hideDropDown}>
      Academics
      {state ? <ul className='dropdown-list' onMouseEnter={showDropDown}>
    <li>Regulation</li>
    <li>Academic Calender</li>
    <li>Curriculum</li>
    <li>RD Cell</li>
      </ul>:null}
      
      </div>
     </div>
       
        </nav>
      
    </div>
  )
}

export default Navbar
