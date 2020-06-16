import React, {useState} from 'react'
import './Admission.css'
import rectangle from '../assets/Path.svg'
import emailjs from 'emailjs-com';


const Admission = () => {

    const [name, setname] = useState("")
    const [course, setcourse] = useState("")
    const [email, setemail] = useState("")
    const [city, setcity] = useState("")
    const [contact, setcontact] = useState("")


    const sendEmail = () => {
        var template_params = {
            "name": name,
            "course": course,
            "email": email,
            "city": city,
            "contact": contact
        }
        emailjs.send('default_service', 'template_QcFeJJkU', template_params, 'user_pMyeJVJzDOA6CDIxE2aM8')
            .then((result) => {
                alert('Form Submitted')
            }, (error) => {
                alert('Please try again')
            });
    }

    return (
        <section className="section9" id="admission">
            <div className="head">
                <img src={rectangle} alt="rect" >
                </img>
                <div>ADMISSION</div>
            </div>
            <div className="admission_card">
                <div className="form">
                    <div className="tag">
                        <hr />
                        <strong>GET IN TOUCH</strong>
                    </div>
                    <div className="grid">

                        <div className="add_text">
                            <span>NAME*</span>
                            <input type="text" placeholder="Enter your name" onChange={(e)=>setname(e.target.value)}>
                            </input>
                        </div>
                        <div className="add_text">
                            <span>SELECT COURSE*</span>
                            <select type="text" placeholder="Select" onChange={(e)=>setcourse(e.target.value)}>
                                <option value="Select">Select</option>
                                <option value="option2">option2</option>
                                <option value="option3">option3</option>
                                <option value="option4">option4</option>
                            </select>
                        </div>
                        <div className="add_text">
                            <span>EMAIL*</span>
                            <input type="text" placeholder="Enter E-mail address" onChange={(e)=>setemail(e.target.value)}>
                            </input>
                        </div>
                        <div className="add_text">
                            <span>CITY</span>
                            <input type="text" placeholder="Enter your city" onChange={(e)=>setcity(e.target.value)}>
                            </input>
                        </div>
                        <div className="add_text">
                            <span>CONTACT NUMBER*</span>
                            <input type="text" placeholder="Enter your contact number" onChange={(e)=>setcontact(e.target.value)} >
                            </input>
                        </div>
                    </div>
                </div>
                <div className="head1" onClick={sendEmail}>SUBMIT</div>
            </div>
        </section>

    )
}

export default React.memo(Admission)
