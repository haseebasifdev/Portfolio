import React from 'react'
import "./style.css"
const Contactus = () => {
    return (
        <div className="container" id="contact">
            <br />
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-md-7">
                    <form>
                        <div className="mb-4 ">
                            <h2 className="font-weight-bold">Leave a Message!</h2>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control p-4 input shadow-none border" placeholder="Your Name: " />
                            </div>
                            <div className="form-group col-md-6">

                                <input type="email" className="form-control p-4 input shadow-none border" placeholder="Email: " />
                            </div>
                        </div>
                        <div className="form-group ">

                            <input type="email" className="form-control p-4 input shadow-none border" placeholder="Subject: " />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control shadow-none border p-4" placeholder="Your Message" rows="3"></textarea>
                        </div>

                        <button type="submit" className="btn btn-dark px-4 font-weight-bold">Send Message</button>
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
                        <div className="my-auto"><i class="material-icons text-primary   p-2 icon">location_on</i></div>
                        <div className="ml-3">
                            <span className="blockquote">Location</span>
                            <div className="text-muted">Lahore, Pakistan</div>
                        </div>
                    </div>
                    <div className="d-flex my-3">
                        <div className="my-auto"><i class="material-icons text-primary   p-2 icon">call</i></div>
                        <div className="ml-3">
                            <span className="blockquote">Call Me At</span>
                            <div className="text-muted"> <a className="text-muted links" href="tel:+923008888888"> +923008888888</a></div>
                        </div>
                    </div>
                    <div className="d-flex my-3">
                        <div className="my-auto"><i class="material-icons text-primary   p-2 icon">email</i></div>
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
