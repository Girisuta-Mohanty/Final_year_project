import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';  
import './App.css';
import Faculties from './components/Faculties';
import Academics from './components/Academics';
import MainPage from './components/MainPage';
function App() {
  return (
    <div className="App">
      <MainPage/>
      <Routes>
      <Route path='/Faculties' element={<Faculties/>}/>
      <Route path='/Academics' element={<Academics/>}/>
      </Routes>
    </div>
  );
}

export default App;
