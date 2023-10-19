import React,{useState} from 'react';

// Import aos
import aos from 'aos'
import 'aos/dist/aos.css'

/// Import Destination Images ======>
import paris from '../../Assets/paris.jpg'
import Dubai from '../../Assets/Dubai.jpg'
import Usa from '../../Assets/UsaTravel.jpg'
import London from '../../Assets/london.jpg'

/// Import Travelers Images ======>
import Travels from '../../Assets/Travels.jpg'
import Travels2 from '../../Assets/person3.jpg'
import Travels3 from '../../Assets/PersonYork.jpg'
import Travels4 from '../../Assets/person0.jpg'

//We Are Going to use hight order aaray method called map to display all the data ====>


const travelers= [
    {
        id: 1,
        destinationImage: paris,
        travelerImage: Travels2,
        travelerName:'Nasra',
        socialLink: 'DrNasra144'
    },
    {
        id: 2,
        destinationImage: Dubai,
        travelerImage: Travels,
        travelerName:'QalidTech',
        socialLink: 'Qalidtech144'
    },
    {
        id: 3,
        destinationImage: Usa,
        travelerImage: Travels3,
        travelerName:'Maxamed cabdi',
        socialLink: 'Abdi007'
    },
    {
        id: 4,
        destinationImage: London,
        travelerImage: Travels4,
        travelerName:'Wilson',
        socialLink: 'Moo997'
    }

] 

const Travelers = () => {
        //useffects to set animation duration=====>
        useState(()=>{
            aos.init({duration: 2000})
        }, [])


    return(
        <div className='travelers container section'>

            <div className="sectionContainer">
                <h2 data-aos='fade-down' data-aos-duration='2500'>
                    Top travelers of this month!
                </h2>

                <div className="travelersContainer grid">

                    {/* Maping 1 */}
                    {
                        travelers.map(({id,destinationImage,travelerImage,travelerName,socialLink})=>{
                            return(
                                <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singletraveler">
                                <img src={destinationImage} className='destinationImage' />
        
                                <div className="travelersDetails">
                                    <div className="travelerPicture">
        
                                        <img src={travelerImage} className='travelerImage'/>
                                    </div>
                                    
                                    <div className="travelerName">
                                        <span>{travelerName}</span>
                                        <p>@{socialLink}</p>
                                    </div>
                                </div>
                            </div>

                            )
                        } )
                    }
                    
                </div>

            </div>
        </div>

    )
}
export default Travelers;