import React from 'react';
import ProjectBox from './ProjectBox';
import quizzImage from '../images/quizzImage.png';
import TodoListImage from '../images/TodoListImage.png';
import WigglesImage from '../images/WigglesImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="Tweets clone" />
        <ProjectBox projectPhoto={quizzImage} projectName="Quizz JS" />
        <ProjectBox projectPhoto={TodoListImage} projectName="TodoList" />
      </div>

    </div>
  )
}

export default Projects