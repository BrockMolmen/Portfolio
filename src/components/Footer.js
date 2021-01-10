import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
  return <div className="Footer">
    <ul>
    <li><a href="https://www.linkedin.com/in/brockmolmen/" target="_blank" alt="LinkedIn" title="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn}  className="icon-1" /></a></li>
          <li><a href="https://github.com/BrockMolmen" target="_blank" alt="GitHub" title="GitHub"><FontAwesomeIcon icon={faGithub}  className="icon-2" /></a></li>
          <li><a href="mailto:BrockMolmen@gmail.com" alt="Email" title="Email"><FontAwesomeIcon icon={faEnvelope}  className="icon-3" /></a></li>
          <li><a href="BrockMolmen_resume.pdf" target="_blank" alt="Resume" title="Resume"><FontAwesomeIcon icon={faFilePdf}  className="icon-4" /></a></li>
    </ul>
  </div>
}

export default Footer;

