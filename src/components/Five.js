import React from 'react'
import Fade from 'react-reveal/Fade'
import { Link as ScrollLink } from 'react-scroll'

const Five = props => (
  <section id="five" className="wrapper style2 special fade inactive">
    <Fade duration={2500}>
      <div className="container">
        <header>
          <h2>Feel free to contact me over email or for a quick chat over coffee!</h2>
        </header>
        <footer className="major">
          <ul className="actions special">
            <li>
              <a href="mailto:kadhirash@gmail.com?subject=[Website]%20Potenial%20Meetup" className="button primary">
                Email Me!
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </Fade>
  </section>
)
export default Five