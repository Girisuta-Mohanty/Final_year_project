import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';  
import './App.css';
import Faculties from './components/Faculties';
import Academics from './components/Academics';
import MainPage from './components/MainPage';
import Calender from './components/Calender';
import Curriculum from './components/Curriculum';
import Rdcell from './components/Rdcell';
import Navbar from './components/Navbar';
import * as React from 'react'
import { background, ChakraProvider } from '@chakra-ui/react'
import SignInForm from './components/SignInForm';
import LoginForm from './components/LoginForm';
import Base from './components/Base';
function App() {
  return (
    <ChakraProvider>
      <div className="App" style={{ marginTop:"60px" }}>
      {/* <Navbar/> */}
      <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/Faculties' element={<Faculties/>}/>
      <Route path='/Academics' element={<Academics/>}/>
      <Route path='calender' element={<Calender/>}/>
      <Route path='curriculum' element={<Curriculum/>}/>
      <Route path='rdcell' element={<Rdcell/>}/>
      <Route path='signupform' element={<SignInForm/>}/>
      <Route path='loginform' element={<LoginForm/>}/>
      </Routes>
    </div>
    </ChakraProvider>
    
  );
}

export default App;
