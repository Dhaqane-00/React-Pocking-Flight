import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Info from './Components/Info/Info';
import Lounge from './Components/Lounge/Lounge';
import Search from './Components/Search/Search';
import Subscribers from './Components/Subscribers/Subscribers';
import Support from './Components/Support/Support';
import Travelers from './Components/Travelers/Travelers';
import Footer from './Components/Footer/Footer';
import { Routes,Route } from 'react-router-dom/cjs/react-router-dom.min';



const App = () =>{
  return (
    <div>  
      <Navbar/>
      <Home/>
      <Search/>
      <Support/> 
      <Info/>
      <Lounge/>
      <Travelers/>
    <Subscribers/>
    <Footer/>
       </div>
  )
}

export default App;