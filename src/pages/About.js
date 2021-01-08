import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faCcDinersClub, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div className="bio">
      <h1 className="hello">Hello!</h1>
      <div className="bio-pic">
        <img src="https://i.imgur.com/v0JQihm.jpg" alt="Brock Molmen" height="400px" />
      </div>
      <div>
        <ul className="about-links">
          <li><FontAwesomeIcon icon={faLinkedinIn} size="2x" className="icon-1" /></li>
          <li><FontAwesomeIcon icon={faGithub} size="2x" className="icon-2"/></li>
          <li><FontAwesomeIcon icon={faEnvelope} size="2x" className="icon-3"/></li>
          <li><FontAwesomeIcon icon={faFilePdf} size="2x" className="icon-4"/></li>
        </ul>
      </div>
      <div >
        <p>My name is Brock. I am a full-stack software engineer, focused on innovative front-end development. I enjoy writing code that looks as good as it functions. Transitioning from a career in the ever-evolving airline industry, I’m able to adapt and learn quickly in new situations and rely on great communication to accomplish goals in a team.</p>
        <br />
        <p>I recently moved from Minneapolis, MN to Seattle, WA with my husband and dog, Gus. When I’m not behind my computer, I enjoy collecting and playing retro video games, trekking around the globe, skateboarding with my dog, and getting deep in coverations about music. I frequently use outdated slang like “rad” and “boss.” Let's grab a cold press and chat.</p>
      </div>
    </div>
  )
}

export default About




//picture
//bio/brand statement
//link to git
//link to 