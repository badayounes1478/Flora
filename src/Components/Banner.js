import React from 'react'
import './Banner.css'

const Banner = () => {
    return (
        <section className="section5">
            <div>
                <span>
                Flora Institute of Technology
                            </span>
                <p>
                    "The things taught in schools and colleges are not an education, but the means to an education."
            </p>
            </div>
        </section>
    )
}

export default React.memo(Banner)
