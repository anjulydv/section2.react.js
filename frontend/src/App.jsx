import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';
import TodoList from './components/TodoList';
import ProductList from './components/ProductList';
import Contact from './components/Contact';
import ManageUser from './components/ManageUser';
import { Toaster} from 'react-hot-toast';
import UpdateUser from './components/UpdateUser';
import { UserProvider } from './UserContext';
import Profile from './components/Profile';
import UserAuth from './components/UserAuth';


function App() {
  
  return (
    <div >
      <Toaster  position ='top-right' />
      <BrowserRouter>
      <UserProvider>

      <Navbar />   
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Home />} path='Home' />
          <Route element={<Signup />} path='Signup' />
          <Route element={<Login />} path='Login' /> 
          <Route element={<EventHandling />} path='event' /> 
          <Route element={<StateManagement />} path='state' /> 
          <Route element={<TodoList />} path='todo' /> 
          <Route element={<ProductList />} path='list' /> 
          <Route element={<Contact />} path='contact' />
          <Route element={<ManageUser />} path='manageuser' />
          <Route element={<UpdateUser />} path='updateuser/:id' />
          <Route element={<UserAuth><Profile/></UserAuth>} path='profile' />
         
          
        </Routes>
        </UserProvider>

      </BrowserRouter>


    </div>
  );
}

export default App;
