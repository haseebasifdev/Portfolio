import React from 'react'
import "./style.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="row row-footer">
                <div className="col ">
                    <div className="text-center text-white">
                        <div className="my-4">
                            <a className="text-muted footerimg" href="mailto:haseebasif147@gmail.com">
                                <img src={`/images/gmail-icon.svg`} alt={`linked image`} width="40px" height="40px " />
                            </a>
                            <a className="text-muted footerimg mx-3 text-white" href="https://www.linkedin.com/in/haseebasif01/" target="_blank">
                                <img src={`/images/linkedin-icon.svg`} alt={`linked image`} width="40px" height="40px " />
                            </a>
                            <a className="text-muted footerimg" href="https://github.com/haseebasifdev" target="_blank">
                                <img className="bg-light git" src={`/images/github-icon.svg`} alt={`linked image`} width="40px" height="40px " />
                            </a>
                        </div>
                        <p>Copyright - 2021 Haseeb Asif, All Right Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
