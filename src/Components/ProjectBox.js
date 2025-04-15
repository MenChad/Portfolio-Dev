import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    quizzDesc:"Quizz Javascript clone",
    quizzGithub:"https://github.com/MenChad/quizz",
    quizzWebsite:"https://menchad.github.io/quizz",
    
    clone_morpion_reactDesc:"This is a tuto of the tic tac toe game using react ",
    clone_morpion_reactGithub:"https://github.com/MenChad/clone_morpion_react",
    clone_morpion_reactWebsite:"https://clone-morpion-react.vercel.app/",

    clone_morpion_reactDesc:"This is a design for a travel agency in html and css",
    clone_morpion_reactGithub:"https://github.com/MenChad/plat-decouverte",
    clone_morpion_reactWebsite:"https://menchad.github.io/plat-decouverte/"
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

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox