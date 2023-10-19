import React,{useState} from 'react';
///Import Icons ======>
import {RxCalendar} from 'react-icons/rx'
import {BsShieldCheck} from 'react-icons/bs'
import {BsBookmarkCheck} from 'react-icons/bs'
// Import aos
import aos from 'aos'
import 'aos/dist/aos.css'

const Info = () => {
        //useffects to set animation duration=====>
        useState(()=>{
            aos.init({duration: 2000})
        }, [])



    return(
        <div className='info section'>
            <div className="infoContainer container">
                <div className="titleDiv flex">
                    <h2 data-aos='fade-right' data-aos-duration='2500'>Travel to make memories all around the world</h2>
                    <button data-aos='fade-left' data-aos-duration='2500' className='btn'>
                        View all
                    </button>
                </div>

                <div className="cardsDiv grid">

                <div data-aos='fade-right' data-aos-duration='2500' className="singleCard grid">
                        <div className="iconDiv flex">
                        <RxCalendar className='icon'/>
                        </div>
                        <div className="span cardTitle">Book & Relax</div>
                        <p>You caln also call airlines from your phone and book a fligt ticket!</p>
                    </div>

                    <div data-aos='fade-up' data-aos-duration='2500' className="singleCard grid">
                        <div className="iconDiv flex colorOne">
                        <BsShieldCheck className='icon'/>
                        </div>
                        <div className="span cardTitle">Smart CheckList</div>
                        <p>You caln also call airlines from your phone and book a fligt ticket!</p>
                    </div>
                    

                    <div data-aos='fade-left' data-aos-duration='2500' className="singleCard grid">
                        <div className="iconDiv flex colorTwo">
                        <BsBookmarkCheck className='icon'/>
                        </div>
                        <div className="span cardTitle">Save More</div>
                        <p>You caln also call airlines from your phone and book a fligt ticket!</p>
                    </div>
                    

                </div>
            </div>

        </div>

    )
}
export default Info;