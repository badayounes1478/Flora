import React from 'react'
import './Achivement.css'
import user from '../assets/user.svg'
import school from '../assets/school.svg'
import school1 from '../assets/school1.svg'
import star from '../assets/star.svg'
import rectangle from '../assets/Path.svg'


const Achivement = () => {
    return (
        <section className="section4" id="achivements">
            <div className="head">
                <img src={rectangle} alt="rect" >
                </img>
                <div>HIGHLIGHT</div>
            </div>         
               <div className="container">
                <div className="container2">
                    <div className="header-achivements">
                        <div className="achivements">
                            <div className="logo">
                                <img src={user} alt="user" />
                            </div>
                            <strong>Student Achivements</strong>
                            <hr />
                        </div>
                        <div className="achivements">
                            <div className="logo">
                                <img src={school} alt="user" />
                            </div>
                            <strong>Faculty Achivements</strong>
                        </div>
                        <div className="achivements">
                            <div className="logo">
                                <img src={school1} alt="user" />
                            </div>
                            <strong>Department Achivements</strong>
                        </div>
                    </div>
                </div>
                <div className="container4">
                    <div className="container3">
                        <div className="content1">
                            <div>
                                <img src={star} alt="star" />
                                <span>Lorem Ipsum is simply Lorem Ipsum is simply</span>
                            </div>
                            <div>
                                <img src={star} alt="star" />
                                <span>Lorem Ipsum is simply Lorem Ipsum is simply</span>
                            </div>
                            <div>
                                <img src={star} alt="star" />
                                <span>Lorem Ipsum is simply Lorem Ipsum is simply</span>
                            </div>
                            <div>
                                <img src={star} alt="star" />
                                <span>Lorem Ipsum is simply Lorem Ipsum is simply</span>
                            </div>
                            <div>
                                <img src={star} alt="star" />
                                <span>Lorem Ipsum is simply Lorem Ipsum is simply</span>
                            </div>
                        </div>
                        <div className="content2">
                            <div className="tropy">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Achivement)
