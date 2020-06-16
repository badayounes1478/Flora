import React, { useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import './Vision.css'
import Slider from '../Components/Slider'


const Vision = () => {
    const [toggle, settoggle] = useState(false)

    const toggleSlider = () => {
        settoggle(!toggle)
    }

    return (
        <div>
            <NavBar slide={toggleSlider} />
            {
                toggle === true ? <> <Slider slide={toggleSlider} />  </> : <> </>
            }
            <div className="header-image5">
                <strong>Vision & Mission</strong>
            </div>
            <div className="founder-content">
                <strong>Vision</strong>
            </div>
            <div className="info1">
                <p>
                    Establishment of knowledge center to impart quality education and build-up technologies for sustainable development.
                </p>
            </div>
            <div className="founder-content">
                <strong>Mission</strong>
            </div>
            <div className="info1">
                <ul>
                    <li>➢  Produce competitive students and graduates</li>
                    <li>➢  Educate young generation in the field of engineering and technology</li>
                    <li>➢  Developing innovative learning methodologies</li>
                    <li>➢  Set up the culture to learn and how to learn</li>
                    <li>➢  Establish centre for development of new technologies </li>
                    <li>➢  Explore all possibilities to convert new technologies into commercial product</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Vision
