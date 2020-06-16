import React, { useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import './Founder.css'
import Slider from '../Components/Slider'

const Founder = () => {
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
            <div className="header-image2">
                <strong>Founder</strong>
            </div>
            <div className="founder-content">
                <strong>Founder</strong>
                <div className="founder-content1">
                    <div className="founder-info">
                       <div className="founder-image">

                       </div>
                       <span>Dr. Atul Padalkar</span>
                       <div>Founder, Flora Institute</div>
                    </div>
                    <div className="info">
                    <p>
                    He obtained his degree in BE and ME in Mechanical Engineering. He has done a Ph.D. in the area of ‘Alternative Refrigerants’ under the guidance of Dr. Devotta. Dr. Devotta had been associated with work which was recognized for the award of Noble prize to IPCC in 2007.
                      </p>
                      <br></br>
                      <p>
                      He started his career in 1987 as a Lecture at Rajarambapu Institute of Technology. Subsequently, he has served various prestigious institutions incapacity of Dean, Principal, Professor, and Assistant Professor in Savitribai Phule Pune University (SPPU), Sinhgad College of Engineering, Pune (2004-2011) AISSMS College of Engineering, Pune, (1996 - 2003) respectively are important. He has been instrumental in starting the Technology department at Savitribai Phule Pune University.
                      </p>
                      <br></br>
                      <p>
                      He has been a mentor for introducing various academic programs which include B. Tech. Biotechnology, Postgraduate programs in Mechatronics, Computer Networks, VLSI & Embedded Systems, and Communication Networks for SPPU.
                      </p>
                      <br></br>
                      <p>
                      He has associated actively with key positions at various technological Institutions and technical bodies like Indian Science Congress, National Institute of Virology, Pune, ASHRAE, ISHRAE, Institution of Engineers (I) and Indian Society for Technical Education (ISTE), New Delhi as Advisor, Member, and Life Member. He has also worked as the Chairman, ISTE Maharashtra & Goa, and president, Engineering Sciences, Indian Science Congress. His contributions particularly the development of room air conditioners with HC-290 and handbook on good servicing of room air conditioners under the aegis of German Technical Cooperation (GIZ), Germany has been recognised widely in the field of Engineering and Industrial Research. The work of the development of hydrocarbon technology in air conditioners has been appreciated by UNEP and the International Institute of Refrigeration (IIR).
                      </p>
                      <br></br>
                      <p>
                      He has worked as a consultant for corporate houses like GIZ, Germany, Blue Star, Thermax Ltd., Godrej Appliances Ltd., India. He provides technical support for the design and development of products to business houses. He has attended more than a score of national and international conferences and workshops. He has been honoured by the 24th International Congress of Refrigeration inviting him to chair two sessions in ICR2015, Japan. He has published more than seventy research papers in the conference proceedings, bulletins, and journals of national and international repute. The important publications include “Performance Assessment of Air Conditioners Using Propane” appeared in Official Journal of Centro Studi Galileo (CSG) and European Energy Center (EEC), Special International Issue (ISI), UNEP, 2010. The article entitled “Performance Assessment of Air Conditioners with HC290” appeared in the Bulletin of the IIR, 2010 is another landmark in his achievements. The same work has been published in Spanish and French languages.
                      </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Founder
