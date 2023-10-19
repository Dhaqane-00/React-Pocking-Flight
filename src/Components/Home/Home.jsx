import React,{useState} from 'react';

// Import Assets ======>
import video from '../../Assets/video3.mp4';
import airoplane from '../../Assets/Airplane.png';

// Import aos
import aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {
    //useffects to set animation duration=====>
    useState(()=>{
        aos.init({duration: 2000})
    }, [])


    return(
        <div className='home flex container'>
            <div className="mainText">
                <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-listing Memories with us </h1>
            </div>


            <div data-aos='fade-down' data-aos-duration='2500' className="homeImages flex">

                <div className="videoDiv">
                    <video src={video} autoPlay muted loop className='video'></video>
                 </div>

                <img src={airoplane} className='plane'/>
            </div>
        </div>

    )
}
export default Home;