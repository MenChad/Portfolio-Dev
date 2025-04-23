import React from 'react';
import Lottie from  "lottie-react";
import Coder from '../LottieFiles/coder.json';
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Bienvenue</h1>
          <h1>JE SUIS <b>TARIK MADI</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={Coder} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'> <b>introduction</b></h1>
          <p>
          J’aime le processus qui consiste à transformer une idée brute en un site web ou un produit 
          qui a un impact réel sur la vie des gens.  
          Je souhaite travailler sur des projets qui me stimulent en tant que développeur et dont je peux être fier.<br /><br />
          Je maîtrise le <b>JavaScript</b>, j’ai quelques notions de <b>Swift</b> et j’ai travaillé sur plusieurs projets en 
          <b> programmation orientée objet (POO)</b>.<br />
          J’ai pour objectif de maîtriser <b>Next.js</b> et <b>TypeScript</b> prochainement.<br /><br />
          Et aussi, j’adore le <b>café</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>        
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home