import React from 'react'
import "./style.css"
import { useSelector } from 'react-redux'
const Skills = () => {
  const skills=useSelector(state=>state.skills.skills)
  return (
    <div className="container skills" >
      <h1 className="text-center font-weight-bold">Skills</h1>
      <div className=" text-center">Languages and Technologies that I have learned and applied to my projects</div>
      <br />
      <br />
      <div className="row container">
        {
          skills.map(skill => {
            return (
              <div className="col-md-4 col-xs-6 col-sm-6 col-xl-3 text-center my-3">
                <div className="my-auto d-flex align-items-center justify-content-center img">
                  <img className="skillimage" src={skill.image} alt={`${skill.name} image`} width="30%" height="100px  " />
                </div>
                <h4 className="mt-2 skillsname">
                  {skill.name}
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
