import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Travel from '../LottieFiles/travel.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Apprends à <b>me connaître</b> !</h1>
          <p>
      Salut, je m'appelle <b>Tarik Madi</b> et je viens de Marseille, France.  
      Je suis <b>développeur logiciel</b> et je travaille actuellement chez Jehann, une entreprise spécialisée dans la formation numérique.<br/><br/>
      J'adore créer des projets originaux avec de beaux designs. Tu peux jeter un œil à certains de mes travaux dans la section projets.<br/><br/>
      Je suis <b>ouvert</b> à de nouvelles collaborations ou opportunités où je peux contribuer et évoluer. N'hésite pas à me contacter, les liens sont dans le pied de page.<br/>
      En plus du code, j'aime voyager et découvrir de nouvelles cultures.
</p>

        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Travel} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Compétences professionnelles</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='MongoDb' />
        <Skills skill='Github' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About