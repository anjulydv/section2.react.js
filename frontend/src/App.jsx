import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';


function App() {
  return (
    <div >
      <BrowserRouter>


      <Navbar />   
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Home />} path='Home' />
          <Route element={<Signup />} path='Signup' />
          <Route element={<Login />} path='Login' /> 
          <Route element={<EventHandling />} path='event' /> 
          <Route element={<StateManagement />} path='state' /> 
          
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
