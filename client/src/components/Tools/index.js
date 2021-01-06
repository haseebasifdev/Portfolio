import React from 'react'
import "./style.css"
import image from "../../images/JavaScript.png"
const Tools = () => {
  const skills = ["GitHub","Git","Postman","npm","VS-Code","Xampp"]
  const src = "/static/media/Bootstrap.0c209802.png"
  return (
    <div className="container" id="tools">
      <div className="skills-Section">Tools</div>
      <div className=" text-center">My weapons of choice to help tackle any project.</div>
      <br />
      <br />
      <div className="row">
        {
          skills.map(skill => {
            return (
              <div className="col-md-4 col-sm-6 col-xl-3 text-center p-4">
                <div className="my-auto d-flex align-items-center justify-content-center img">
                  <img className="skillimage" src={`/images/${skill}.svg`} alt={`${skill} image`} width="30%" height="100px  " />
                </div>
                <h4 className="">
                  {skill}
                </h4>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Tools
