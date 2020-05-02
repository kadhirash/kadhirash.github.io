import React from 'react'
import profile from '../assets/images/profile.jpg'
import { Link as ScrollLink } from 'react-scroll'

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header>
        <h2>Kadhirash Sivakumar</h2>
        <p>
          My life at UCR, projects, and more!
        </p>
      </header>
      <span className="image">
        <img src={profile} alt="intro" />
      </span>
    </div>
    <ScrollLink
      to="one"
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

export default Banner