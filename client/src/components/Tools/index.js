import React from 'react'
import "./style.css"
import { useSelector } from 'react-redux'
const Tools = () => {
  const tools=useSelector(state=>state.skills.tools)
  return (
    <div className="container tools" >
      <h1 className="text-center font-weight-bold">Tools</h1>
      <div className=" text-center">My weapons of choice to help tackle any project.</div>
      <br />
      <br />
      <div className="row">
        {
          tools.map(tool => {
            return (
              <div key={tool._id} className="col-md-4 col-sm-6 col-xl-3 text-center p-4">
                <div className="my-auto d-flex align-items-center justify-content-center img">
                  <img className="skillimage" src={tool.image} alt={`${tool} image`} width="30%" height="100px  " />
                </div>
                <h4 className="">
                  {tool.name}
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
