import React from 'react'
import './Technology.css'

const Technology = () => {
    return (
        <section className="section3" id="technology">
            <h1>Flora Institiute of Technology</h1>
            <div className='logo'>
                <div className="logo1">
                    <strong>Flora College of Architecture</strong>
                </div>
               
                <div className="logo2">
                    <strong>Flora Valley School and Junior College</strong>
                </div>
          
                <div className="logo3">
                    <strong>Flora Institute of Technology</strong>
                </div>

                <div className="logo4">
                    <strong>Flora Skill Centre</strong>
                </div>
                
                <div className="logo5">
                    <strong>Flora Bees, Nasrapur</strong>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Technology)
