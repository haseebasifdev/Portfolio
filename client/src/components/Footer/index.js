import React from 'react'
import { FaLinkedin,FaEnvelope,FaGithub } from 'react-icons/fa';
import "./style.css"
const Footer = () => {
    return (
        <div className="footer">
                    <div className="text-center text-white">
                        <div className="my-4">
                            <a className="text-muted footerimg" href="mailto:haseebasif147@gmail.com">
                                <FaEnvelope size={35}/>
                            </a>
                            <a className="text-muted footerimg mx-3 text-white" href="https://www.linkedin.com/in/haseebasif01/" target="_blank">
                               <FaLinkedin size={35}/>
                             </a>
                            <a className="text-muted footerimg" href="https://github.com/haseebasifdev" target="_blank">
                                <FaGithub size={35}/>
                             </a>
                        </div>
                        <p>Copyright - 2021 Haseeb Asif, All Right Reserved</p>
                    </div>
        </div>
    )
}

export default Footer
