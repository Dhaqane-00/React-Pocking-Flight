import React,{useState} from 'react';
//import Images ===>
import Logo from '../../Assets/Turkish-Airlines-symbol.png'
//import icons ===>
import {TiSocialFacebook} from 'react-icons/ti'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'

// Import aos
import aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    //useffects to set animation duration=====>
    useState(() => {
        aos.init({ duration: 2000 })
    }, [])



    return(
        <div className='footer'>
            <div className="sectionContainer container grid">

                <div data-aos='fade-up' data-aos-duration='2500' className="gridOne">
                    <div className="logoDiv">
                        <img src={Logo} className='Logo'/>
                    </div>
                    <p>Your Mind should be stroger than feeling, fly</p>
                    <div className='socialIcon flex'>
                        <TiSocialFacebook className='icon'/>
                        <AiOutlineTwitter className='icon'/>
                        <AiFillYoutube className='icon'/>
                        <FaPinterestP className='icon'/>
                    </div> 
                </div>

                <dib data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
                    <span className='linkTitle'> Information</span>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Explore</a>
                    </li>
                    <li>
                        <a href="">Flight Status</a>
                    </li>
                    <li>
                        <a href="">Travel</a>
                    </li>
                    <li>
                        <a href="">Check in</a>
                    </li>
                    <li>
                        <a href="">Manage Your Booking</a>
                    </li>
                </dib>


                <dib data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
                    <span className='linkTitle'> Qiuck Guide</span>
                    <li>
                        <a href="">FAQ</a>
                    </li>
                    <li>
                        <a href="">How to</a>
                    </li>
                    <li>
                        <a href="">Features</a>
                    </li>
                    <li>
                        <a href="">Baggage</a>
                    </li>
                    <li>
                        <a href="">Route Map</a>
                    </li>
                    <li>
                        <a href="">Our Coummunites</a>
                    </li>
                </dib>

                <dib data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
                    <span className='linkTitle'> information</span>
                    <li>
                        <a href="">Chauffuer</a>
                    </li>
                    <li>
                        <a href="">Our Partners</a>
                    </li>
                    <li>
                        <a href="">Destination</a>
                    </li>
                    <li>
                        <a href="">Careers</a>
                    </li>
                    <li>
                        <a href="">Transportaion</a>
                    </li>
                    <li>
                        <a href="">Programme Rules</a>
                    </li>
                </dib>
                

            </div>

            <div className="copyRightDiv flex">
                <p>Courtesy Desgin | Developed By <a href="https://www.facebook.com/abdilaahi.nii" target='_blank'> CA208-Yes We Can Team</a></p>
            </div>
        </div>

    )
}
export default Footer;