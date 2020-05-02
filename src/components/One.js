import React from 'react'
import TT from '../assets/images/TT.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const One = props => (
  <section
    id="one"
    className="spotlight style1 bottom inactive"
    style={{ backgroundImage: `url(${TT})` }}
  >
    <span className="image fit main">
      <img src={TT} alt="" />
    </span>
    <Fade bottom big>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-4 col-12-medium">
              <header>
                <h2>My Time at UCR</h2>
                <p>
                  Theta Tau (pictured), ACM, FSAE, and Undergraduate Research.
                </p>
              </header>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                I showcased Theta Tau, a professional engineering fraternity because of 
                how signifcant it is in my life to shape me into the person I am today. 
                I have met friends, whom I call brothers to get me through college, 
                grown mentally and spirtually, and have made experiences I won't ever forget!
              </p>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                If there's one thing I learned in college, which I plan to carry on forward in life, is
                to never be afraid of taking that leap of faith. There are lots of opportunities 
                out there, and one should go towards it instead of hoping something will come.
                I've learned to love this place and am going to miss it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
    <ScrollLink
      to="two"
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
export default One