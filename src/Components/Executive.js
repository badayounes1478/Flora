import React, { useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import './Executive.css'
import Slider from '../Components/Slider'


const Executive = () => {
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
            <div className="header-image4">
                <strong>Executive Commitee</strong>
            </div>
            <div className="founder-content">
                <strong>Executive Commitee</strong>
            </div>

            <table>
                <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Designation</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Prof. M. N. Navale</td>
                    <td>President</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mr. R. S. Padalkar</td>
                    <td>Vice President</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Mr. Ramesh S. Padalkar</td>
                    <td>Treasurer</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Prof. Y. R. Soman</td>
                    <td>Member</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Mrs. Shobha Rajaram Padalkar</td>
                    <td>Member</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Mrs. Sujata Ramesh Padalkar</td>
                    <td>Member</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Mrs. Madhuri Atul Padalkar</td>
                    <td>Secretary</td>
                </tr>
            </table>
            <Footer />
        </div>
    )
}

export default Executive
