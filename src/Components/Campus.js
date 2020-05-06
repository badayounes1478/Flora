import React from 'react'
import './Campus.css'
import play from '../assets/play.svg'

const Campus = () => {
    return (
        <section className="section2">
            <div className="grid">
                <div className="content">
                    <span>Campus life at Flora Institiute</span>
                    <div>
                        <hr />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                            galley of type and scrambled it to make a type specimen It has survived not only five centuries, but also the leap into electronic
                </p>
                    </div>
                </div>
            </div>
            <div className="grid2">
                <div className="vedio">
                     <img src={play} alt="play" />
                </div>
            </div>
        </section>
    )
}

export default React.memo(Campus)
