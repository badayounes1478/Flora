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
                        <img src={medal} alt="medal" />
                    </div>
                    <strong>Center Of Excellence</strong>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                </div>
                <div className="card">
                    <div className="box">
                        <img src={settings} alt="settings" />
                    </div>
                    <strong>Center Of Excellence</strong>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                </p>
                </div>
                <div className="card">
                    <div className="box">
                        <img src={work} alt="work" />
                    </div>
                    <strong>Center Of Excellence</strong>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Heighlight)
