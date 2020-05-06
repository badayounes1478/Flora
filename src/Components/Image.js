import React from 'react'
import './Image.css'
import next  from '../assets/back.svg'


const Image = () => {
    return (
        <section className="section7" id="gallary">
        <div>
            <hr />
            <strong>VISIT OUR GALLARY</strong>
        </div>
        <div className="grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className='download'>
               <span>View Gallary</span>
               <img src={next} alt=""></img>
             </div>
    </section>
    )
}

export default React.memo(Image)
