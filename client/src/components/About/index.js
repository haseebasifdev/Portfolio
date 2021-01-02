import React from 'react'
import image from "../../images/haseeb.jpg"
import "./style.css"
const About = () => {
    return (
        <div className="about container">
            <div className="row">
                <div className="col-md-5 col-sm-12 imgcol px-4 mb-4">
                    <img width="100%" src={image} />
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
                        I'm currently a Graduate student of Computer Science in UET, Lahore.I am started my Web development
                        In my 5th semester while studying Software Engineering.That's the turning point of my life and I start learning HTML,
                        CSS and Then Javascript also.
                            <br />
                        <br />
                            Through My Learning phase, I have developed  a strong understanding of JavaScript (ES5 & ES6),PHP,Laravel,Vue.js,React,
                            Node.js, Express, HTML5, CSS3 ,Mobile App Develpment and Tensorflow(ML).As a developer, I find a lot of joy
                            and excitement utilizing my skills to helping troubleshooting bugs, Pushing Projects forward and Solve Real World Problems.
                            I enjoy learning new technologies and growing in a field that is constantly being pushed to new boundaries.
                            <br />
                        <br />
                            Feel free to connect with me! Let's talk about web dev, tech, sports, photography, video games, cooking,
                             or how I can be of help to your team or business!
                             I'd love to get to know more developers and expand my network. I also know a thing or two about beer.

                    </div>
                    <br />
                    <div className="font-weight-bolder">
                        Let's Build Something cool.
                    </div>
                    <br />
                    <div>
                        <h6 className="mb-2">
                            <span className="text-primary">Mail</span>:
                            <a className="text-muted links" href="mailto:haseebasif147@gmail.com"> haseebasif147@gmail.com</a>
                        </h6>
                        <h6 className="mb-2">
                            <span className="text-primary">Phone</span>:
                            <a className="text-muted links" href="tel:+923008888888"> +923008888888</a>
                        </h6>
                        <h6 className="mb-2">
                            <span className="text-primary">Linkedin</span>:
                            <a className="text-muted links" href="https://www.linkedin.com/in/haseebasif01/" target="_blank"> https://www.linkedin.com/in/haseebasif01/</a>
                        </h6>
                        <h6 className="mb-2">
                            <span className="text-primary">Github</span>:
                            <a className="text-muted links" href="https://github.com/haseebasifdev" target="_blank"> https://github.com/haseebasifdev</a>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
