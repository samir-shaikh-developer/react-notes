import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card depth-0">
        <div className="card-content">
          <span className="card-title">Project Details - {id}</span>
          <p>Test Data</p>
        </div>
        <div className="card-gaction grey lighten-4 grey-text">
          <div>Posted by teinfotech</div>
          <div>3 October, 1996</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
