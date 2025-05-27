import ProjectBox from './ProjectBox';
import quizzImage from '../images/quizzImage.png';
import cloneMorpionImage from '../images/cloneMorpionImage.png';
import platDecouverteImage from '../images/platDecouverteImage.png';
import freelanceImage from '../images/freelanceImage.png';
import randoSudImage from '../images/randoSudImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>Mes <b>Projets</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={freelanceImage} projectName="freelance" />
        <ProjectBox projectPhoto={randoSudImage} projectName="rando_sud" />
        <ProjectBox projectPhoto={platDecouverteImage} projectName="plat_decouverte" />
        <ProjectBox projectPhoto={cloneMorpionImage} projectName="clone_morpion_react" />
        <ProjectBox projectPhoto={quizzImage} projectName="quizz" />

      </div>

    </div>
  )
}

export default Projects