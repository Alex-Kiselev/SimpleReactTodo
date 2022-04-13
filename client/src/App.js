import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import TakePosts from './components/TakePosts';



function App() {

   

  return (
   <>
   <Navbar/>
   <Routes>
   <Route path='/' element={<MainPage/>}></Route> 
   <Route path='/posts' element={<TakePosts/>}></Route> 
   <Route path='/posts/profile/:id' element={<Profile/>}></Route> 
   </Routes>
   </>
  );
}

export default App;
