import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


//Import Icons ===>
import {SiConsul} from 'react-icons/si';
import {BsPhoneVibrate} from 'react-icons/bs';
import {AiOutlineGlobal} from 'react-icons/ai';
import {CgMenuGridO} from 'react-icons/cg';
//Import Images ===>
import logo from '../../Assets/Plane.png'

const Navbar = () => {
        /// Remove the Nav bar in the small witdh Screan==>
        const [active,setActive]= useState('navBarMenu')
        const showNavBar = () =>{
            setActive ('navBarMenu showNavBar')
        }

        const removeNavBar = () =>{
            setActive ('navBarMenu')
        }
   /// Add Background color to the second Navbar==>
   const [noBg,AddBg]= useState('navBarTwo')

   const AddBgColor = () =>{
    if(window.scrollY >=10){
        AddBg ('navBarTwo navbar_with_bg');
    }else{
        AddBg ('navBarTwo');
    }
   }
   window.addEventListener('scroll', AddBgColor)
  


    return(
        <div className='navBar flex' > 

           <div className='navBarOne flex'>
                <div>
                    <SiConsul className='icon'/>
                </div>


                <div className='none flex'>
                    <li className='flex'>  <BsPhoneVibrate className='icon'/> Support</li>
                    <li className='flex'> <AiOutlineGlobal className='icon'/>  Languages</li>
                </div>
                <div className="atb flex">
                    <span>Sign in </span>
                    <span>Sign Out </span>
                </div>
           </div>

           <div className={noBg}>
            <div className="logoDiv">
                <img src={logo} alt="Turkish Airlinr logo" 
                className='Logo' />
            </div>
              
                
            <div className={active}>
            <ul className="menu flex">
                    <li  className='listItem'>Home</li>
                    <li onClick={removeNavBar}  className="listItem">About</li>
                    <li onClick={removeNavBar}  className="listItem">Offers</li>
                    <li onClick={removeNavBar}  className="listItem">Seats</li>
                    <li onClick={removeNavBar}  className="listItem">Destinations</li>
                </ul>

                <button onClick={removeNavBar} className='btn flex btnOne'>
                    Contact
                </button>
                </div>

             

            
            <button className='btn flex btnTwo'>
                    Contact
                </button>
                <div onClick={showNavBar} className='toggleIcon'>
                <CgMenuGridO className='icon'/>
                </div>
           </div>
         </div>
       
    

    )
}
export default Navbar;