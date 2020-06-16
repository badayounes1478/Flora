import React, { useState } from 'react'
import './NavigationBar.css'
import image from '../assets/Building.jpg'
import {Link} from 'react-router-dom'



const NavigationBar = ({ slide }) => {

    const [images] = useState([image])
    const [activeImage, setactiveImage] = useState(image)
    const [/*active1*/, setActive1] = useState('active')
    const [, setActive2] = useState('inactive')
    const [, setActive3] = useState('inactive')


    const changeImage = (index, active) => {
        setactiveImage(images[index])
        if ('active1' === active) {
            setActive1('active')
            setActive2('inactive')
            setActive3('inactive')
        } else if ('active2' === active) {
            setActive1('inactive')
            setActive2('active')
            setActive3('inactive')
        } else {
            setActive1('inactive')
            setActive2('inactive')
            setActive3('active')
        }
    }

    return (

        <header id="home">
            <nav>
            <div className="menu1" onClick={() => slide()}>
                    <i className="fa fa-bars"></i>
                </div>
    
                <Link to="/" className="logo">
                    <div className="logo-image"></div>
                    <div className="content">
                        <div className="black-text">FLORA INSTITUTES</div>
                    </div>
                </Link>
                <ul>
                    <li><div className="navbar">
                        <div className="dropdown">
                            <button className="dropbtn">ABOUT</button>
                            <div className="dropdown-content">
                                <Link to="/establishment">Establishment</Link>
                                <Link to="/founder">About Founder</Link>
                                <Link to="/co-founder">About Co-Founder</Link>
                                <Link to="/Executive">Executive Committee</Link>
                                <Link to="/Vision">Vision & Mission</Link>
                            </div>
                        </div>
                    </div></li>
                    <li><div className="navbar">
                        <div className="dropdown">
                            <button className="dropbtn">ADMISSION</button>
                            <div className="dropdown-content">
                                <a href="#a">Flora College of Architecture</a>
                                <a href="#a">Flora Valley School and Junior College</a>
                                <a href="#a">Flora Institute of Technology</a>
                                <a href="#a">Flora Skill Centre</a>
                                <a href="#a">Flora Skill Centre</a>
                            </div>
                        </div>
                    </div></li>
                    <li><Link to="/#admission">CONTACT</Link></li>
                </ul>
            </nav>
            <div className="header-image" style={{ backgroundImage: `url(${activeImage}` }}>
                <div className="content">
                    <div className="first-block">RANKED AMONGEST</div>
                    <div className="second-block">TOP COLLAGES IN MAHARASHTRA</div>
                    <div className="third-block">FOR ACADENIC EXCLLENCE</div>
                </div>
                <div className="content2">
                    <div className="first-block">Admission open for B.E 2020-21</div>
                    <a href="#admission
                    " className="second-block">ENQUIRY NOW</a>
                </div>
               {/* <div className="image-card">
                    <img src={image} alt="1" className={active1} onClick={() => changeImage(0, 'active1')} />
                      <img src={image} alt="2" className={active2} onClick={() =>changeImage(1, 'active2')} />
                    <img src={image} alt="3" className={active3} onClick={() =>changeImage(2, 'active3')} />  }
    </div>*/}
            </div>
        </header>
    )
}

export default React.memo(NavigationBar)
