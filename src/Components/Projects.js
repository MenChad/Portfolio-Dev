import React from 'react';
import ProjectBox from './ProjectBox';
import quizzImage from '../images/quizzImage.png';
import cloneMorpionImage from '../images/cloneMorpionImage.png';
import WigglesImage from '../images/WigglesImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={quizzImage} projectName="quizz" />
        <ProjectBox projectPhoto={cloneMorpionImage} projectName="clone_morpion_react" />
      </div>

    </div>
  )
}

export default Projects