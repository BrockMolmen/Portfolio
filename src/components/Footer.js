import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
  return <div className="Footer">
  <ul>
  <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
  <li><FontAwesomeIcon icon={faGithub} /></li>
  <li><FontAwesomeIcon icon={faEnvelope} /></li>
  <li><FontAwesomeIcon icon={faFilePdf} /></li>
  </ul>
  </div>
}

export default Footer;

