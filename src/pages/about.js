import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import cutie from '../assets/images/cutieHack.jpg'


const LeftSidebar = props => (
  <Layout>
    <Helmet>
      <meta name="description" content="Right Sidebar Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>About Me</h2>
          <p>
          A closer look on who I am, why I chose Computer Science, and my future plans.
          </p>
        </header>
        <div className="row gtr-150">
          <div className="col-8 col-12-medium">
            <section id="content">
              <h3>Who Am I?</h3>
              <p>
              My name is Kadhirash Sivakumar, and I am currently in my last quarter at UCR 
              as a Computer Science major. I am currently 21 years old and love learning new 
              things to better myself and/or others everyday.
              </p>
              <h3> Why Computer Science?</h3>
              <p>
              I can narrow it down to three major reasons.
              <br></br> 
              <ul>
                <li>My dad</li>
                <li>My high school</li>
                <li>My passion</li> 
              </ul>
                Starting with my dad, I have always seen him around computers since I was young. This intrigued me to want to learn more about what he does for a living. 
                Visiting his work environment in high school was eye opening, and that was when I decided to pursue something computer related.
                <br></br><br></br>
                School was the next milestone where I took Introduction to Java and AP Computer Science classes at Cupertino High. Taking these courses was challenging but also fun for me. 
                It was then that I knew I wanted to pursue computer science as a major in the future.
                <br></br><br></br>
                Lastly, my passion for computer science. Attending many hackathons, working on my own projects, and learning skills on internships, I worked past hardships and wanted to always find solutions to problems. 
                If there was a bug in my project, I would not rest until I figured out what was wrong with my code and how it can be solved. 
              </p>
              <h3>What now?</h3>
              <p>
                Honestly, I do not know for sure and that's okay. In high school there was a clear path that many of my peers, including me, have taken. 
                You take certain classes, take the SAT/ACT, apply for colleges and you were done. In college however, everything is different. 
                I see some of my friends who have graduated college already, some taking more than the "4 years" for the degree, and some that have dropped out. 
                Everyone is now on a different path pursuing what suits them. I have still yet to find a solid path to take as there are many paths opening up. 
                The current plan at the moment is to secure a job in the industry and graduate. I eventually want to pursue higher studies in business part-time while working.
                Wohoo MBA!!
              </p>
              
            </section>
          </div>
          <div className="col-4 col-12-medium">
            <section id="sidebar">
             
              <section>
                <a href="#" className="image fit">
                  <img src={cutie} alt="" />
                </a>
                <p>
                 Pictured above is the last hackathon I attended with friend Douglas Tran at Cutie Hack 2019.
                </p>
               
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default LeftSidebar