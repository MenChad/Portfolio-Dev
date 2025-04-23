import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    quizzDesc:"un quizz Javascript sur le thème de la programmation",
    quizzGithub:"https://github.com/MenChad/quizz",
    quizzWebsite:"https://menchad.github.io/quizz",

    plat_decouverteDesc:"une agence de voyage designée en html et css ",
    plat_decouverteGithub:"https://github.com/MenChad/plat_decouverte",
    plat_decouverteWebsite:"https://menchad.github.io/plat_decouverte/",
    
    clone_morpion_reactDesc:"un clone du jeu morpion en react",
    clone_morpion_reactGithub:"https://github.com/MenChad/clone_morpion_react",
    clone_morpion_reactWebsite:"https://clone-morpion-react.vercel.app/",

    

  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank' rel="noopener noreferrer">
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank ' rel="noopener noreferrer">
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox