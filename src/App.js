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
// import Base from './components/Base';
import Student from './components/Student';
import UpdateProfile from './components/UpdateProfile';
import ClassRoom from './components/classRoom';
import Resources from './components/Resources';
import Files from './components/Files';
import Footers from './components/Footers';
import UploadFile from './components/Upload';
import Alumii from './components/Alumii';
import Forum from './components/Forum';
import Contact from './components/Contact';
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
      <Route path='resources' element={<Resources/>}/>
      <Route path='/files/:id' element={<Files/>}/>
      <Route path='/upload/:id' element={<UploadFile/>}/>
      <Route path='/Student' element={<Student/>}/>
      <Route path='/update' element={<UpdateProfile/>}/>
      <Route path='signupform' element={<SignInForm/>}/>
      <Route path='loginform' element={<LoginForm/>}/>
      <Route path='classroom' element={<ClassRoom/>}/>
      <Route path='footer' element={<Footers/>}/>
      <Route path='alumii' element={<Alumii/>}/>
      <Route path='Forum' element={<Forum/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
    </ChakraProvider>
    
  );
}

export default App;
