import {React, useEffect} from 'react'
import DropDown from './DropDown'
import Faculties from './Faculties'
import {useState} from 'react'
import Calender from './Calender'
import Curriculum from './Curriculum'
import {Link as Scroll} from 'react-scroll';
import {Navigate, NavLink} from "react-router-dom"
import Rdcell from './Rdcell'
import {useNavigate} from 'react-router-dom'
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
import GoogleSignInButton from './LoginButton'
import {isAuthenticated, signout} from '../auth/helper'
const Navbar = () => {

    var {
        user,
        token
    } = isAuthenticated();
    console.log(user);
    var isOpen = useState(true);
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);


    const navigate = useNavigate();

    // }
    return (

        <div style={
            {marginBottom: "10px"}
        }>
            <nav className='navbar'
                style={
                    {height: '25vh'}
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
                                justifyContent: 'start',
                                alignItems: 'center'
                            }
                        }>
                            <div className="logo"
                                onClick={
                                    () => {
                                        navigate('/')
                                    }
                            }>

                                <img src="IIIT_Bhubaneswar_Logo-removebg-preview.png" className='iiitim'></img>
                            </div>
                        </div>
                        <ul className={
                            click ? "nav-menu active" : "nav-menu"
                        }>
                            <li className="nav-item">
                                <NavLink exact to="/Faculties" activeClassName="active" className="nav-links f"

                                    onClick={
                                        click ? handleClick : null
                                }>
                                    Faculties
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/alumii" activeClassName="active" className="nav-links f"
                                    onClick={
                                        click ? handleClick : null
                                }>
                                    Alumni
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/Student" activeClassName="active" className="nav-links f"
                                    onClick={
                                        click ? handleClick : null
                                }>
                                    Student
                                </NavLink>
                            </li>
                        </ul>


                    </div>
                    <div className="nav-icon"
                        onClick={handleClick}>
                        <i className={
                            click ? "fa fa-times" : "fa fa-bars"
                        }></i>
                    </div>


                    <div style={
                        {
                            width: "40%",
                            height: "100%",

                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'end ',
                            alignItems: 'flex-end',
                            paddingTop: "20px",
                             paddingRight: '20px'

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
                                marginBottom:'10px'


                            }
                        }>

                            <div> {
                                isAuthenticated() && user.role === 1 && <button className='centered-placeholder'
                                    onClick={
                                        () => {
                                            navigate('/update')
                                        }
                                }>
                                    Update Profile
                                </button>
                            } </div>
                            <div> {
                                !isAuthenticated() ? <GoogleSignInButton/>: <button style={
                                        {
                                            backgroundColor: "red",
                                            borderRadius: "10px",
                                            padding: "10px",
                                            color: "white",
                                            fontSize:"1.2rem"
                                        }
                                    }
                                    onClick={signout}>Log out</button>
                            } </div>

                        </div>
                        <ul className={
                            click ? "nav-menu active" : "nav-menu"
                        }>
                            <li className="nav-item">
                                <NavLink exact to="/resources" activeClassName="active" className="nav-links r"
                                    onClick={
                                        click ? handleClick : null
                                }>
                                    Resources
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/Forum" activeClassName="active" className="nav-links r"
                                    onClick={
                                        click ? handleClick : null
                                }>
                                    Forum
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/contactUs" activeClassName="active" className="nav-links r"
                                    onClick={
                                        click ? handleClick : null
                                }>
                                    Contact Us
                                </NavLink>
                            </li>


                            <li className="nav-item x">
                                <NavLink exact to="/Faculties" activeClassName="active" className="nav-links"

                                    onClick={
                                        click ? handleClick : null
                                }>
                                    Faculties
                                </NavLink>
                            </li>
                            <li className="nav-item x">
                                <NavLink exact to="/alumii" activeClassName="active" className="nav-links"
                                    onClick={
                                        click ? handleClick : null
                                }>
                                    Alumni
                                </NavLink>
                            </li>
                            <li className="nav-item x">
                                <NavLink exact to="/Student" activeClassName="active" className="nav-links"
                                    onClick={
                                        click ? handleClick : null
                                }>
                                    Student
                                </NavLink>
                            </li>

                        </ul>


                    </div>

                </Stack>


            </nav>

        </div>
    )
}

export default Navbar
