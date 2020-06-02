import React from 'react';
import BigText from '../components/BigText';

const Projects = ({children}) => {
  return (
    <div>
      <BigText>PROJECTS</BigText>
      {children}
    </div>
  );
};


export default Projects;
