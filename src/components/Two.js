import React from 'react'
import nature from '../assets/images/nature.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Two = props => (
  <section
    id="two"
    className="spotlight style2 right inactive"
    style={{ backgroundImage: `url(${nature})` }}
  >
    <span className="image fit main">
      <img src={nature} alt="" />
    </span>
    <Fade right big>
      <div className="content">
        <header>
          <h2>Spare Time</h2>
          <p> There's 24 hours in the day, and so much to do in that time.</p>
        </header>
        <p>
         In my spare time I LOVE to be outdoors, read books, code cool side projects, go to the gym,
         play tennis or squash, watch Anime, and lastly spend time with friends/family. <br></br><br></br>

         The picture to the left is from Huntington State Beach, Summer 2019.
        </p>
        <ul className="actions">
          <li>
            <a href="/ec" className="button">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </Fade>
    <ScrollLink
      to="projects"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)

export default Two