import React,{useState} from 'react';
// Import aos
import aos from 'aos'
import 'aos/dist/aos.css'

const Subscribers = () => {
    //useffects to set animation duration=====>
    useState(()=>{
        aos.init({duration: 2000})
    }, [])

    return(
        <div className='subscribe section'>
            <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer container">
                <h2>Subscribe Newsletters & get lastest News</h2>
                <div className="inputDiv flex">
                    <input type="text" placeholder='Enter Your Email Address' />
                    <button className='btn'>Subscribe</button>
                </div>
            </div>
        </div>

    )
}
export default Subscribers;