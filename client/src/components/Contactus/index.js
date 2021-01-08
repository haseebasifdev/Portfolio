import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import axios from "axios";
import "./style.css"
const Contactus = () => {
    const [name, setname] = useState("")
    const [subject, setsubject] = useState("")
    const [email, setemail] = useState("")
    const [message, setmessage] = useState("")
    const error = []
    const contactMeform = async (e) => {
        e.preventDefault()
        error.pop()
        const data = {
            name,
            email,
            subject,
            message
        }
        await axios.post('http://localhost:5000/api/contactme', data).then(res => {
            console.log({ data: res.data });
            setname("")
            setemail("")
            setsubject("")
            setmessage("")
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Thank You! Your message has been sent.',
                showConfirmButton: false,
                timer: 2000
              })
        })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    position: 'top-end',
                    text: 'All fields required Min 3 words and a proper Email Address',
                    
                })
                const msg = err.response.data.error
                // error.push
                error.push(err.response.data.error);
                console.log(error);
                // console.log({Message:[err.response.data.error]});
            })
    }
    
    return (
        <div className="container" id="contact">
            <br />
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-md-7">
                    <form onSubmit={contactMeform}>
                        <div className="mb-4 ">
                            <h2 className="font-weight-bold">Leave a Message!</h2>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}
                                    type="text" className="form-control p-4 input shadow-none border" placeholder="Your Name: " />
                            </div>
                            <div className="form-group col-md-6">

                                <input

                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                    type="email" className="form-control p-4 input shadow-none border" placeholder="Email: " />
                            </div>
                        </div>
                        <div className="form-group ">

                            <input
                                value={subject}
                                onChange={(e) => setsubject(e.target.value)}
                                type="text" className="form-control p-4 input shadow-none border" placeholder="Subject: " />
                        </div>
                        <div className="form-group">
                            <textarea value={message}
                                onChange={(e) => setmessage(e.target.value)} className="form-control shadow-none border p-4" placeholder="Your Message" rows="3"></textarea>
                        </div>

                        <button
                            type="submit" className="btn btn-dark px-4 font-weight-bold">Send Message</button>
                    </form>
                </div>
                <div className="col-md-5">
                    <div className="mb-4 ">
                        <h2 className="font-weight-bold">Contact Info</h2>
                    </div>
                    <div className="text-muted mb-4">
                        Feel free to contact me for career prospects, business services, and other professional inquiries!
                    </div>
                    <div className="d-flex my-3">
                        <div className="my-auto text-primary icon   "><FaMapMarkerAlt size={20} /></div>
                        <div className="ml-3">
                            <span className="blockquote">Location</span>
                            <div className="text-muted">Lahore, Pakistan</div>
                        </div>
                    </div>
                    <div className="d-flex my-3">
                        <div className="my-auto text-primary icon  "><FaPhoneAlt size={20} /></div>
                        <div className="ml-3">
                            <span className="blockquote">Call Me At</span>
                            <div className="text-muted"> <a className="text-muted links" href="tel:+923008888888"> +923008888888</a></div>
                        </div>
                    </div>
                    <div className="d-flex my-3">
                        <div className="my-auto text-primary  icon "><FaEnvelope size={20} /></div>
                        <div className="ml-3">
                            <span className="blockquote">Email Me At</span>
                            <div className="text-muted"><a className="text-muted links" href="https://github.com/haseebasifdev" target="_blank"> https://github.com/haseebasifdev</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus
