import React from 'react'
import image from "../../images/haseeb.jpg"
import "./style.css"
const About = () => {
    return (
        <div className="about container">
            <div className="row">
                <div className="col-md-5 col-sm-12 imgcol px-4 mb-4">
                    <img width="100%"  src={image} />
                </div>
                <div className="col-md-7 col-sm-12">
                    <h3>
                        Hey! I'm Haseeb Asif
                        <br />
                        A Full Stack Developer
                        <br />
                        From Lahore, Pakistan
                    </h3>
                    <div className="text-muted">
                            Hello
                    </div>
               </div>
            </div>
        </div>
    )
}

export default About
