import React from 'react'
import './Footer.css'
import facebook from '../assets/facebook-3.svg'
import instagram from '../assets/instagram-2-1.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin-icon.svg'
import copyright from '../assets/copyright.svg'
import {Link} from 'react-router-dom'



const Footer = () => {
    return (
        <React.Fragment>
            <footer id="footer">
                <div className="grid">
                    <div>
                        <strong>ABOUT FLORA INSTITUTE</strong>
                        <p>Flora Institute is a place where brilliant minds assemble and 
                            collaborate, where they pool together their talents across 
                            disciplines in service of big projects and ideas. It’s a vibrant 
                            community teaming up with students collaborating with
                            experts and specialists; a place of creativity and innovation. 
                            It is an intersection of disciplines, a launching pad for a brilliant 
                            career, and a highly unique state of mind. It is a perfect 
                            environment to pursue your passion. Here the future is envisioned 
                            each day.</p>
                        <div className="icons">
                            <img src={facebook} alt="facebook" />
                            <img src={instagram} alt="instagram" />
                            <img src={twitter} alt="twitter" />
                            <img src={linkedin} alt="linkedin" />
                        </div>
                    </div>
                    <div className="center">
                        <strong>QUICK LINKS</strong>
                        <div className="link">
                            <span><a href="#home">Home</a></span>
                            <span><a href="#admission">Admission</a></span>
                            <span><a href="#technology">Flora Institutes</a></span>
                            <span><a href="#achivement">Achivements</a></span>
                            <span className="no-border"><Link to="/establishment">Establishment</Link></span>
                        </div>
                    </div>

                    <div>
                        <strong>GET IN TOUCH</strong>
                        <div className="getintouch">
                            <p>
                            Flora Institutes 49/1, Khopi, Khed-Shivapur Pune Landmark: Near Khed-Shivapur Toll Plaza
                            </p>
                            <p>Contact no-</p>
                            <p>9890-673-701</p>
                            <p>7030-719-401</p>
                            <p>7978-513-867</p>
                        </div>
                    </div>

                    <a href="https://goo.gl/maps/TufTaivYWZqJ47CR8">
                        <strong>REACH US OUT</strong>
                        <div className="reachus" />
                    </a>

                </div>
            </footer>
            <div className="copyright">
                <img src={copyright} alt="copyright" />
                    <strong>Flora institute 2020</strong>
        </div>
        </React.Fragment>
            )
        }
        
        export default React.memo(Footer)
