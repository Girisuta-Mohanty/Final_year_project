import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import DropDown from './DropDown'
import Faculties from './Faculties'
import {useState} from 'react'
import Calender from './Calender'
import Curriculum from './Curriculum'
import { Link as Scroll } from 'react-scroll';

import Rdcell from './Rdcell'
import {useNavigate} from 'react-router-dom'
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
    Stack
} from '@chakra-ui/react'
const Navbar = () => {
    // const [state,setState]=useState(false);
    // const navigate=useNavigate();
    // const showDropDown=()=>{
    // setState(true);
    // }
    // const hideDropDown=()=>{
    // setState(false);
    var isOpen = useState(true);

    const navigate = useNavigate();

    // }
    return (

        <div style={
            {marginBottom: "10px"}
        }>
            <nav className='dropdown'
                style={
                    {height: '20vh'}
            }>
                <Stack spacing={1}
                    direction='row'
                    style={
                        {width: '100%'}
                }>
                    <div style={
                        {
                            width: "60%",
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center'
                        }
                    }>
                        <div style={
                            {
                                width: "50%",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }
                        }>
                            <div className="logo"
                                onClick={
                                    () => {
                                        navigate('/')
                                    }
                            }>
                                
                                <img src="iiit.png" className='iiitim'></img>
                            </div>
                        </div>
                        <div style={
                            {
                                width: "50%",

                                height: "100%",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }
                        }>
                            <button className='facbutton1'
                                onClick={
                                    () => {
                                        navigate('/Faculties')
                                    }
                            }>
                                ETC Faculties
                            </button>
                            <button className='facbutton1'
                                onClick={
                                    () => {
                                        navigate('/Faculties')
                                    }
                            }>
                                Alumni
                            </button>
                            <button className='facbutton1'
                                onClick={
                                    () => {
                                        navigate('/Faculties')
                                    }
                            }>
                                Students
                            </button>
                        </div>

                    </div>


                    <div style={
                        {
                            width: "40%",
                            height: "100%",
                            // backgroundColor: 'red',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'end ',
                            alignItems: 'flex-end',
                            paddingTop:"20px",
                            paddingRight:'20px'

                        }
                    }>
                        <div style={
                            {
                                  // backgroundColor: 'blue',
                                width: "80%",
                                height: "90%",
                                fontSize: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'end',
                                


                            }
                        }>


                            <div>
                            <Menu className='signin'>
                                 {({ isOpen }) => (
                                                      <>
                                                      <MenuButton isActive={isOpen} className='signin'>
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

                        </div>
                        <div style={
                            {
                                //  backgroundColor: 'yellow',
                                 width:'80%',
                                display: 'flex',        
                                justifyContent:'space-between',
                                marginTop:'10px'

                            }
                        }>
                            <button className='facbutton'
                                onClick={
                                    () => {
                                        navigate('/Faculties')
                                    }
                            }>
                                Resources
                            </button>
                            <button className='facbutton'
                                onClick={
                                    () => {
                                        navigate('/Faculties')
                                    }
                            }>
                                Forum
                            </button>
                            
                            <Scroll to="newsevents"  style={{ fontSize:"1.5rem",height:"30%"}} className='facbutton' smooth={true}>
                            <h1 >
                                News/Events
                            </h1>
                           </Scroll>
                           
         
          
         
                           <Scroll to="society"  style={{fontSize:"1.5rem",height:"30%"}} className='facbutton' smooth={true}>

                           <h1 >
                                Societies
                            </h1>
                           </Scroll>
                           
                           <Scroll to="footer"  style={{fontSize:"1.5rem",height:"30%"}} className='facbutton' smooth={true}>

                           <h1 >
                                Footer
                            </h1>
                           </Scroll>
                           
                          

                         

                        </div>
                    </div>

                </Stack>


            </nav>

        </div>
    )
}

export default Navbar
