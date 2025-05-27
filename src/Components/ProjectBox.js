import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    freelanceDesc:"un site vitrine pour un freelance en développement web avec traduction",
    freelanceGithub:"https://github.com/MenChad/freelance",
    freelanceWebsite:"https://freelance-o7g3.vercel.app/fr",


    rando_sudDesc:"un site vitrine pour une agence de randonnée dans le sud de la France",
    rando_sudGithub:"https://github.com/MenChad/rando_sud",
    rando_sudWebsite:"https://menchad.github.io/rando_sud/",

    plat_decouverteDesc:"une agence de voyage designée en html et css ",
    plat_decouverteGithub:"https://github.com/MenChad/plat_decouverte",
    plat_decouverteWebsite:"https://menchad.github.io/plat_decouverte/",

    todolist_react19Desc:"une todo list en react",
    todolist_react19Github:"https://github.com/MenChad/todolist_react19",
    todolist_react19Website:"https://todolist-react19.vercel.app/",
    
    clone_morpion_reactDesc:"un clone du jeu morpion en react",
    clone_morpion_reactGithub:"https://github.com/MenChad/clone_morpion_react",
    clone_morpion_reactWebsite:"https://clone-morpion-react.vercel.app/",

    quizzDesc:"un quizz Javascript sur le thème de la programmation",
    quizzGithub:"https://github.com/MenChad/quizz",
    quizzWebsite:"https://menchad.github.io/quizz",

    

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