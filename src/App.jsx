
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import Header from './Conponent/Header/Header';
import Footer from './Conponent/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Service from './Pages/Service/Service';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';




function App() {


  return (
    <>
   <BrowserRouter>
    <Header/>
   <Routes>
    <Route path='Home' element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Service' element={<Service/>}/>
    <Route path='Blog' element={<Blog/>}/>
    <Route path='Contact' element={<Contact/>}/>
   
  
   </Routes>
    <Footer/>
   </BrowserRouter>
    </>
  )
}

export default App
