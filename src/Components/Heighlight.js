import React from 'react'
import medal from '../assets/medal.svg'
import settings from '../assets/settings.svg'
import work from '../assets/work.svg'
import rectangle from '../assets/Path.svg'
import './Heighlight.css'


const Heighlight = () => {
    return (
        <section className="highlight" id="highlight">
        
            <div className="head">
            <img src={rectangle} alt="rect" >
              </img>
              <div>HIGHLIGHT</div>
            </div>
            <div className="card-section">
                <div className="card">
                    <div className="box">
                        <img src={work} alt="medal" />
                    </div>
                    <strong>Sustainable Development</strong>
                    <p>
                    We understand sustainable 
                    development needs to be addressed 
                    environmentally, socially and 
                    economically. This is something that 
                    affects us all, and therefore the 
                    necessary change is the responsibility 
                    that we practice sincerely.
                </p>
                </div>
                <div className="card">
                    <div className="box">
                        <img src={medal} alt="settings" />
                    </div>
                    <strong>Focus on Excellence</strong>
                    <p>
                    We value excellence and achievement 
                    in all aspects from scholarship to 
                    teaching, from research to service, from 
                    student performance to support staff 
                    to faculty. We focus our attention to 
                    ensure the highest quality of our work.

                </p>
                </div>
                <div className="card">
                    <div className="box">
                        <img src={settings} alt="work" />
                    </div>
                    <strong>Experimental</strong>
                    <p>
                    We provide an educational 
                    environment that bridges theory and 
                    practice, enhancing the ability of 
                    students to fulfill their potential and to 
                    contribute to society.                </p>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Heighlight)
