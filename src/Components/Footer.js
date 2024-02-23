import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Copyright &copy; 2024 TM</h4>
      <div className='footerLinks'>
        <a href="https://github.com/MenChad" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/maditarik/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href='mailTo:maditarik56@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer