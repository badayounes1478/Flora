import React from 'react'
import './Footer.css'
import facebook from '../assets/facebook-3.svg'
import instagram from '../assets/instagram-2-1.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin-icon.svg'
import copyright from '../assets/copyright.svg'


const Footer = () => {
    return (
        <React.Fragment>
            <footer id="footer">
                <div className="grid">
                    <div>
                        <strong>ABOUT FLORA INSTITUTE</strong>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesettingindustry.
                             Lorem Ipsum has been the industry's.</p>
                        <div className="icons">
                            <img src={facebook} alt="facebook" />
                            <img src={instagram} alt="instagram" />
                            <img src={twitter} alt="twitter" />
                            <img src={linkedin} alt="linkedin" />
                        </div>
                    </div>
                    <div className="center">
                        <strong>QUICK LINKES</strong>
                        <div className="link">
                            <span><a href="#home">Home</a></span>
                            <span><a href="#admission">Admission</a></span>
                            <span><a href="#courses">Coureses</a></span>
                            <span><a href="#achivements">Achivements</a></span>
                            <span className="no-border"><a href="#gallary">Gallary</a></span>
                        </div>
                    </div>

                    <div>
                        <strong>GET IN TOUCH</strong>
                        <div className="getintouch">
                            <p>Flora Institiute of Technology</p>
                            <p>A/P Khopi near Khedshivapur TollPlaza Off Pune-Satara Highway TQ Bhor Ta: Bhor Dist: Pune-412205</p>
                            <p>Contact no- 020-24336601</p>
                        </div>
                    </div>

                    <div>
                        <strong>REACH US OUT</strong>
                        <div className="reachus" />
                    </div>

                </div>
            </footer>
            <div className="copyright">
                <img src={copyright} alt="copyright" />
                    <strong>Flora institute of technology 2020</strong>
        </div>
        </React.Fragment>
            )
        }
        
        export default React.memo(Footer)
