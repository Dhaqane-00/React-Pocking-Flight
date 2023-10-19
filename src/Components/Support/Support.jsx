import React,{useState} from 'react';

// Import Images
import gridImage1 from '../../Assets/SupportImg.png'
// Import aos
import aos from 'aos'
import 'aos/dist/aos.css'

const Support = () => {
        //useffects to set animation duration=====>
        useState(()=>{
            aos.init({duration: 2000})
        }, [])

    return(
        <div className='support container section'>
            <div className="sectionContainer">

                <div className="titlesDiv">
                    <small>Travel Support</small>
                    <h2>Plan your travel  with confidence</h2>
                    <p>Find help with booking and travel plans, see what to expect along 
                        the journey!
                    </p>
                </div>

                <div className="infoDiv grid">

                    <div className="textDiv grid">

                        <div data-aos='fade-down' data-aos-duration='2500' className="singleInfo">
                            <span className='number'>01</span>
                            <h4>Travel requirement for Somali</h4>
                            <p>Find help with booking and travel plans, see what to expect along 
                        the journey to your favourite destinations!</p>
                        </div>

                        <div data-aos='fade-down' data-aos-duration='3500' className="singleInfo">
                            <span className='number colorOne'>02</span>
                            <h4>Yes we can services at your arrival</h4>
                            <p>Find help with booking and travel plans, see what to expect along 
                        the journey to your favourite destinations!</p>
                        </div>
                        
                        <div data-aos='fade-down' data-aos-duration='4500' className="singleInfo">
                            <span className='number colorTwo'>03</span>
                            <h4>Mult-risk travel insurance</h4>
                            <p>Find help with booking and travel plans, see what to expect along 
                        the journey to your favourite destinations!</p>
                        </div>

                    </div>

                    <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
                        <img className='grid' src={gridImage1} alt="" />
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Support;