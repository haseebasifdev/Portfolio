import React, { useEffect } from 'react'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import "./style.css"
import ImageLazyLoading from '../LoadAbleImages';
const Projects = () => {
  const projects = useSelector(state => state.projects.projects)
  const [project, setproject] = useState({})
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (p) => {
    setproject(p)
    console.log({ p });
    setShow(true)
  };
  return (
    <div className="container">
      <h1 className="projects text-center font-weight-bold">Projects</h1>
      <div className="text-center">

        <h6 >Worried About my coding experience? Check them here:</h6>
        <a className="btn btn-primary text-center my-4" href="https://github.com/haseebasifdev" target="_blank" role="button">Github</a>
      </div>

      <div className="row">
        {
          projects.map(project => {
            return (
              <>
                <div className="col-4 showproject" onClick={() => handleShow(project)}>
                  <div className="project_container">
                    <ImageLazyLoading 
                    effect="blur" className="card-img image" src={project.image}
                     alt="Card image" width="100%"  />
                    <div className="card-img-overlay image_text text-center">
                      <h5 className="card-title">{project.name}</h5>
                      <p className="card-text">{project.description}</p>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }



        <Modal
          show={show}
          onHide={handleClose}
          // backdrop="static"
          // keyboard={false}
          className="text-muted"
        >
          <Modal.Body>
            <iframe width="100%" height="315" frameborder="0" allow="autoplay" encrypted-media
              src={`${project.videoLink}?autoplay=1`}>
            </iframe>
            <h4 className="mt-4 ">{project.name}</h4>
            {
              project.description
            }
            <div className="border-bottom py-2">
              TECHNOLOGIES
              <br />
              {
                project.tech ?
                  project.tech.map(t => {
                    return (
                      <span className="mr-2 font-weight-bold">{t} |</span>
                    )
                  }) : ""
              }

            </div>
            <div className="border-bottom py-2">
              LIVE WEBSITE
                <div className="">
                <a href={project.live} target="_blank">
                  {
                    project.live
                  }
                </a>
              </div>
            </div>
            <div className="py-2">
              GITHUB
                <div className="">
                <a href={project.github} target="_blank">
                  {
                    project.github
                  }
                </a>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  )
}

export default Projects
