import React from 'react'
import './Admission.css'
import star from '../assets/star.svg'
import rectangle from '../assets/Path.svg'


const Admission = () => {
    return (
        <section className="section9" id="admission">
            <div className="head">
                <img src={rectangle} alt="rect" >
                </img>
                <div>ADMISSION</div>
            </div>       
                <div className="admission_card">
                <div className="admission_info">
                    <div className="tag">
                        <hr />
                        <strong>ADMISSION AT FLORA INSTITUTE</strong>
                    </div>
                    <div className="grid">
                        <div>
                            <div className="title">
                                <img src={star} alt="star" />
                                <strong>Ranked Among top Engineering colleges</strong>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's.</p>
                        </div>
                        <div>
                            <div className="title">
                                <img src={star} alt="star" />
                                <strong>Ranked Among top Engineering colleges</strong>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's.</p>
                        </div>
                        <div>
                            <div className="title">
                                <img src={star} alt="star" />
                                <strong>Ranked Among top Engineering colleges</strong>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's.</p>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <div className="tag">
                        <hr />
                        <strong>GET IN TOUCH</strong>
                    </div>
                    <div className="grid">
                        <div className="add_text">
                            <span>NAME*</span>
                            <input type="text" placeholder="Enter your name">
                            </input>
                        </div>
                        <div className="add_text">
                            <span>SELECT COURSE*</span>
                            <select type="text" placeholder="Select">
                                <option value="Select">Select</option>
                                <option value="option2">option2</option>
                                <option value="option3">option3</option>
                                <option value="option4">option4</option>
                            </select>
                        </div>
                        <div className="add_text">
                            <span>EMAIL*</span>
                            <input type="text" placeholder="Enter E-mail address">
                            </input>
                        </div>
                        <div className="add_text">
                            <span>CITY</span>
                            <input type="text" placeholder="Enter your city">
                            </input>
                        </div>
                        <div className="add_text">
                            <span>CONTACT NUMBER*</span>
                            <input type="text" placeholder="Enter your contact number">
                            </input>
                        </div>
                    </div>
                </div>
                <div className="head1">SUBMIT</div>
            </div>
        </section>

    )
}

export default React.memo(Admission)
