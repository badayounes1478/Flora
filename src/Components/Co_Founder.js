import React, { useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import './Co-Founder.css'
import Slider from '../Components/Slider'

const Co_Founder = () => {
    const [toggle, settoggle] = useState(false)

    const toggleSlider = () => {
        settoggle(!toggle)
    }

    return (
        <div>
            <NavBar slide={toggleSlider} />
            {
                toggle === true ? <> <Slider slide={toggleSlider} />  </> : <> </>
            }
            <div className="header-image3">
                <strong>Co-Founder</strong>
            </div>
            <div className="founder-content">
                <strong>Co-Founder</strong>
                <div className="founder-content1">
                    <div className="founder-info">
                        <div className="founder-image img1">

                        </div>
                        <span>Mr. Rajaram Padalkar</span>
                        <div>Co-Founder, Flora Institute</div>
                    </div>
                    <div className="info">
                        <p>
                        He is the director of “Disha Ornaments” the trading proprietary unit at Zaveri Bazaar in Mumbai and proprietor of “Rahul Ornaments” a manufacturing proprietary unit at Rajkot. He runs this business for more than 35 years. He started his business at the age of 21years. The turnover of his business for 2018-19 was more than 35 cr. He has an interest in social work and he is the co-founder of Flora Education Society started in 2009. Since the inception of society, he has taken the responsibility of the Vice President’s work in the executive committee. He has contributed to establishing institutes in Engineering, Architecture, and School under the umbrella Flora Education Society.
                        </p>
                        <br></br>
                        <br></br>
                        <br></br>
                         <p>
                         Jeweler Summary
                         </p>
                         <br></br>
                         <p>
                         •Highly effective jewelry trading Director with over 35 years of experience specializing in account management in the fashion and accessories trading industry. •Offering an array of skills in client acquisition, customer service management, analytical skills, optimized pricing, business development, large-scale executive presentations, and trend analysis. •Proven ability to implement innovative process improvements.•Track record of success multi-tasking to increase sales in fast-paced environments.
                         </p>
                         <br></br>
                        <br></br>
                        <br></br>
                        <p>
                        Jewelry Trading Experience Statements
                        </p>
                        <p>
                        •The primary role has been as new business development, marketing strategies, and positioning as well as to head the brand overhaul. The position required in-depth knowledge of silver and gold jewelry manufacturing, sales abilities, and marketing tactics. •Presented, promoted, and sold products and services to clients by meeting one-on-one, assessing their needs and educating them about the technical and design details of ornaments. •Achieved sales targets on average of 150-200%. •Established, developed, and maintained client relationships to build trust that led to increased revenue. •Working closely with clients to design the ideal jewelry piece according to their needs and specifications. •Spearheaded all marketing, advertising, and promotional activities, events and campaigns, including via social media.
                        </p>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
            <div className="founder-content">
                <strong>Co-Founder</strong>
                <div className="founder-content1">
                    <div className="founder-info">
                        <div  className="founder-image img2">

                        </div>
                        <span>Mr. Ramesh Padalkar</span>
                        <div>Co-Founder, Flora Institute</div>
                    </div>
                    <div className="info">
                    <p>
                    He is the director of “Disha Ornaments” the trading proprietary unit at Zaveri Bazaar in Mumbai. He runs this business for more than 20 years. He started his business at the age of 25 years. The turnover of his business for 2018-19 was more than 25 cr. He has an interest in social work and he is co-founder of Flora Education Society started in 2009. Since the inception of society, he has taken the responsibility of treasurer’s work. He has contributed to establishing institutes in Engineering, Architecture, and School under the umbrella Flora Education Society.                        </p>
                        <br></br>
                        <br></br>
                        <br></br>
                         <p>
                         Jeweler Summary
                         </p>
                         <br></br>
                         <p>
                         •Highly effective jewelry trading director with over 20 years of experience specializing in account management in the fashion and accessories trading industry. •Offering an array of skills in client acquisition, customer service management, analytical skills, optimized pricing, business development, large-scale executive presentations, and trend analysis. •Proven ability to implement innovative process improvements. •Track record of success multi-tasking to increase sales in fast-paced environments.                         </p>
                         <br></br>
                        <br></br>
                        <br></br>
                        <p>
                        Jewelry Trading Experience Statements
                        </p>
                        <p>
                        •The Primary role has been as new business development, marketing strategies, and positioning as well as to head the brand overhaul. The position required in-depth knowledge of silver and gold jewelry manufacturing, sales abilities, and marketing tactics. •Presented, promoted, and sold products and services to clients by meeting one-on-one, assessing their needs and educating them about the technical and design details of ornaments. •Achieved sales targets on average of 150-200%. •Established, developed, and maintained client relationships to build trust that led to increased revenue. •Working closely with clients to design the ideal jewelry piece according to their needs and specifications. •Spearheaded all marketing, advertising, and promotional activities, events, and campaigns, including via social media.                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Co_Founder

