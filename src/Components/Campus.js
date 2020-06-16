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
                        <p>
                        The campus epitomizes Flora’s vision, ‘Education for a Sustainable Development'. 
                        Flora Institutes provides fresh air and ample opportunities for the holistic development 
                        of students who will be accomplished individuals in many ways; happy and confident of 
                        leading their lot to a brighter future. It is a placewhere brilliant minds assemble and 
                        collaborate, where they pool together theirtalents across disciplines in service of big 
                        projects and ideas. It’s a vibrant community teaming up with students collaborating 
                        with experts and specialists; a place of creativity and innovation. It is an intersection of 
                        disciplines, a launching pad for a brilliant career, and a highly unique state of mind. It is a 
                        perfect environment to pursue your passion. Here the future is envisioned each day.
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
