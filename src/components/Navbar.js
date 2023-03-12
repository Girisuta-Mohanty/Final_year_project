import {React, useEffect} from 'react'
// import {Link, NavLink, useHistory} from 'react-router-dom'
import DropDown from './DropDown'
import Faculties from './Faculties'
import {useState} from 'react'
import Calender from './Calender'
import Curriculum from './Curriculum'
import {Link as Scroll} from 'react-scroll';
import {Navigate} from "react-router-dom"
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
import GoogleSignInButton from './LoginButton'
import {isAuthenticated} from '../auth/helper'
// import LoginButton from './LoginButton'
const Navbar = () => {
    // const [state,setState]=useState(false);
    // const navigate=useNavigate();
    // const showDropDown=()=>{
    // setState(true);
    // }
    // const hideDropDown=()=>{
    // setState(false);
    var {
        user,
        token
    } = isAuthenticated();
    var isOpen = useState(true);
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = 'https://apis.google.com/js/api:client.js';
    //     script.onload = init;
    //     document.body.appendChild(script);
    // }, []);

    // const init = () => {
    //     window.gapi.load('auth2', () => {
    //       window.gapi.auth2.init({
    //         client_id: '843567927500-a0pa98jkklh4msck5b3ubvvu0u6b4qj4.apps.googleusercontent.com',
    //         scope: 'email profile',
    //         Navigate_uri: 'http://localhost:3000/Faulties'

    //         // Other configuration options
    //       });
    //     });
    // };

    // const signInWithGoogle = () => {
    //     window.gapi.auth2.getAuthInstance().signIn().then(() => {
    //       const user = window.gapi.auth2.getAuthInstance().currentUser.get();
    //       const token = user.getAuthResponse().id_token;
    //       console.log("fcgsdvHCbkjnk;mcfdf ")

    //       fetch('http://localhost:3001/auth/google', {
    //         method: 'GET',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ token })
    //       })
    //       .then(response => {
    //         // Handle the response from the server
    //       })
    //       .catch(error => {
    //         console.log(error.message);
    //       });
    //     }, error => {
    //       console.log(error.error);
    //     });
    // };

    // useEffect(() => {
    //     window.gapi.load('auth2', () => {
    //       window.gapi.auth2.init({
    //         // your Google OAuth configuration
    //         client_id: '843567927500-a0pa98jkklh4msck5b3ubvvu0u6b4qj4.apps.googleusercontent.com',
    //         // Navigate_uri: 'http://localhost:3000',

    //       }).then(() => {
    //         // Get the user's Google ID token
    //         console.log(`token>>>>`)

    //         const user = window.gapi.auth2.getAuthInstance().currentUser.get();
    //         const token = user.getAuthResponse().id_token;
    //         console.log(`token>>>> ${token}`)

    //         // Make an API request to your server
    //         fetch('http://localhost:3001/auth/google', {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json'
    //           },
    //           body: JSON.stringify({ token })
    //         })
    //         .then(response => {
    //           // Handle the response from your server
    //           console.log(response)
    //         })
    //         .catch(error => {
    //           // Handle any errors that occur
    //         });
    //       });
    //     });
    // }, []);


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
                            {
                            isAuthenticated() && <button className='facbutton1'
                                onClick={
                                    () => {
                                        navigate('/Student')
                                    }
                            }>
                                Students
                            </button>
                        } </div>

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
                                justifyContent: 'end'


                            }
                        }>


                            <div style={
                                {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }
                            }>
                                {
                                isAuthenticated() && user.role === 1 && <button className='centered-placeholder'
                                    onClick={
                                        () => {
                                            navigate('/update')
                                        }
                                }>
                                    Update Profile
                                </button>
                            }
                                <button onClick={
                                    () => {
                                        
                                            // if (user && user.role === 1) {
                                            //     return <Navigate to='/'/>;
                                            // } else {
                                            //     return <Navigate to='/'/>;
                                            // }
                                  
                                    }
                                }>
                            <GoogleSignInButton/> </button>
                            {/* <LoginButton/> */}
                            {/* <button className='signin'
                                    onClick={
                                        () => { LoginButton()}
                                }>
                                    Signin
                                </button> */}
                            {/* <LoginButton/> */} </div>

                    </div>
                    <div style={
                        { // backgroundColor: 'yellow',
                            width: '80%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px'

                        }
                    }>
                        <button className='facbutton'
                            onClick={
                                () => {
                                    navigate('/resources')
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

                        <Scroll to="newsevents"
                            style={
                                {
                                    fontSize: "1.5rem",
                                    height: "30%"
                                }
                            }
                            className='facbutton'
                            smooth={true}>
                            <h1>
                                News/Events
                            </h1>
                        </Scroll>


                        <Scroll to="society"
                            style={
                                {
                                    fontSize: "1.5rem",
                                    height: "30%"
                                }
                            }
                            className='facbutton'
                            smooth={true}>

                            <h1>
                                Societies
                            </h1>
                        </Scroll>

                        <Scroll to="footer"
                            style={
                                {
                                    fontSize: "1.5rem",
                                    height: "30%"
                                }
                            }
                            className='facbutton'
                            smooth={true}>

                            <h1>
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
