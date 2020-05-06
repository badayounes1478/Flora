import React from 'react'
import './Numbers.css'

const Numbers = () => {
    return (
        <section className="section8">
            <div className="numbers">
                <div>
                    <span className="num">22,200+</span>
                </div>
                <div>
                    <span className="num">140</span>
                </div>
                <div>
                    <span className="num">65,000+</span>
                </div>
                <div>
                    <span className="num">750+</span>
                </div>
                <div>
                    <span className="num">200+</span>
                </div>
            </div>
            <div className="text">
               <div>
               <span className="content">Engineers graduated till date</span>
               </div>
               <div>
               <span className="content">University Rank</span>
               </div> 
               <div>
               <span className="content">Online journals</span>
               </div>
                <div>
                <span className="content">Jobs offer ever year</span>
               </div> 
               <div>
               <span className="content">Hours on soft skills</span>
               </div>

            </div>
        </section>
    )
}

export default React.memo(Numbers)
