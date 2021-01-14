import React from 'react'


import "./style.css"
const Projects = () => {
  return (
    <div className="container">
      <h1 className="projects text-center font-weight-bold">Projects</h1>
      <div className="text-center">

        <h6 >Worried About my coding experience? Check them here:</h6>
        <a className="btn btn-primary text-center my-4" href="https://github.com/haseebasifdev" target="_blank" role="button">Github</a>
      </div>
      <div className="text-center mb-4">
        <button type="button" class="btn mx-2 btn-primary">JavaScript</button>
        <button type="button" class="btn mx-2 btn-secondary">Laravel</button>
        <button type="button" class="btn mx-2 btn-success">Vue.js</button>
        <button type="button" class="btn mx-2 btn-danger">React.js</button>
        <button type="button" class="btn mx-2 btn-warning">Android</button>
        <button type="button" class="btn mx-2 btn-info">Python</button>
        <button type="button" class="btn mx-2 btn-light">C++</button>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="card bg-dark text-white">
            <img className="card-img" src="images/Laravel.png" alt="Card image" />
            <div className="card-img-overlay text-center textproject">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
