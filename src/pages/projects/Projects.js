import React from 'react';
import ProjectContainer from '../../components/Layout/ProjectContainer';
import Loader from 'react-loaders';

function Projects() {
    return (
      <div>
          <p>Project</p>
          <ProjectContainer />
          <Loader type="line-scale" color="grey" width={500} />
      </div>
      
    )
  }
  export default Projects;