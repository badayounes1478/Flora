import React from 'react'
import next  from '../assets/back.svg'
import './Courses.css'

const Courses = () => {
    return (
        <section className="section6" id="courses">
            <div>
                <hr />
                <strong>OUR COURSES</strong>
            </div>
            <div className="college">

            </div>
            <span>ENGINEERING / MTECH</span>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                been the industry's.
             </p>
             <div className='download'>
               <span>Download Brochure</span>
               <img src={next} alt=""></img>
             </div>

        </section>
    )
}

export default React.memo(Courses)
