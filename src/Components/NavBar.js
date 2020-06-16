import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'


const NavBar = (props) => {
    return (
        <nav>
            <div className="menu1" onClick={() => props.slide()}>
                    <i className="fa fa-bars"></i>
                </div>
    
                <Link to="/" className="logo" style={{color:'#000000'}}>
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
    )
}

export default NavBar
