import React, { useState } from 'react';

import imageGrid from '../../Assets/Inside.png'

// Import aos
import aos from 'aos'
import 'aos/dist/aos.css'

const Lounge = () => {
    //useffects to set animation duration=====>
    useState(() => {
        aos.init({ duration: 2000 })
    }, [])

    return (
        <div className='Lounge container section'>
            <div className="sectionContainer grid">
                <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
                    <img src={imageGrid} />
                </div>
                <div className='textDiv'>
                    <h2 data-aos='fade-down' data-aos-duration='2500'>Wellcome to the Flight Somalia</h2>

                    <div data-aos='fade-down' data-aos-duration='2500' className="grids grid">
                        <div className="singleGrid">
                            <span className='gridTitle'>
                                Help Through Airplane
                            </span>
                            <p>You can also call airplane from your phone and book a fight ticketto one of yoour favorite Destination.
                            </p>
                        </div>
                        <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
                            <span className='gridTitle'>
                                Care on the flight
                            </span>
                            <p>You can also call airplane from your phone and book a
                                fight ticket to one of yoour favorite Destination.
                            </p>

                        </div>

                        <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
                            <span className='gridTitle'>
                                Pritory Boarding
                            </span>
                            <p> You can also call airplane from your phone and book a fight ticket
                                to one of yoour favorite Destination.
                            </p>
                        </div>

                        <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
                            <span className='gridTitle'>
                                Chauffer-drive service
                            </span>
                            <p>
                                You can also call airplane from your phone and book a fight ticket
                                to one of yoour favorite Destination.
                            </p>
                        </div>

                    </div>
                </div>


            </div>

        </div>

    )
}
export default Lounge;