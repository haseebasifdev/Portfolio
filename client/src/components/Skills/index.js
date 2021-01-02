import React from 'react'
import "./style.css"
import image from "../../images/JavaScript.png"
const Skills = () => {
  const skills = ["JavaScript", "React", "MongoDB", "Node.js", "Express", "Redux", , "Vue", "Vuex", "PHP"
    , "Laravel", "MYSQL", "HTML5", "CSS3", "Bootstrap", "TensorFlow", "Android"]
  const src = "/static/media/Bootstrap.0c209802.png"
  return (
    <div className="container">
      <div className="skills-Section">Skills</div>
      <div className=" text-center">Languages and Technologies that I have learned and applied to my projects</div>
      <br />
      <br />
      <div className="row container">
        {
          skills.map(skill => {
            return (
              <div className="col-md-4 col-xs-6 col-sm-6 col-xl-3 text-center my-3">
                <div className="my-auto d-flex align-items-center justify-content-center img">
                  <img className="skillimage" src={`/images/${skill}.svg`} alt={`${skill} image`} width="40%" height="100px  " />
                </div>
                <h4 className="mt-2">
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

export default Skills
