import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import DropDown from './DropDown'
import Faculties from './Faculties'
import { useState } from 'react'
import Calender from './Calender'
import Curriculum from './Curriculum'
import Rdcell from './Rdcell'
import { useNavigate } from 'react-router-dom'
// import { ChevronDown } from '@dcp-ui/icons.chevron-down'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
const Navbar = () => {
  // const [state,setState]=useState(false);
  // const navigate=useNavigate();
  // const showDropDown=()=>{
  //   setState(true);
  // }
  // const hideDropDown=()=>{
  //   setState(false);
  const navigate = useNavigate();
  
  // }
  return (

    <div>
        <nav className='dropdown'>
        <div className="logo">
         <img src="iiit.png" className='iiitim' ></img>
        </div>
      {/* <Link to='/Faculties'><b>ETC Faculties</b></Link> */}
      <button className='facbutton' onClick={()=>{navigate('/Faculties')}} >
        ETC Faculties
      </button>
     <div >
     <Menu className='facbutton'>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} className='facbutton'>
        {isOpen ? 'Academics' : 'Academics'}
      </MenuButton>
      <MenuList className='facbutton'>
        <MenuItem onClick={()=>{navigate('/calender')}} >Academic Calender</MenuItem>
        <MenuItem onClick={()=>{navigate('/curriculum')}}>Curriculum</MenuItem>
        <MenuItem onClick={()=>{navigate('/rdcell')}}>RD Cell</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
      </div> 
     
     <div>
     <Menu className='facbutton'>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} className='facbutton'>
        {isOpen ? 'Signin' :'Signin'}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={()=>{navigate('/signupform')}}>Register</MenuItem>
        <MenuItem onClick={()=>{navigate('/loginform')}}>Sign In</MenuItem>
        
      </MenuList>
    </>
  )}
</Menu>

     </div>

       
        </nav>
      
    </div>
  )
}

export default Navbar
