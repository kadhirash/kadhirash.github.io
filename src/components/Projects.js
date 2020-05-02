import React from 'react'
import Fade from 'react-reveal/Fade'


const Projects = props => (
  <Fade up>
    <section id="projects" className="wrapper style1 special fade-up">
      <div className="container">
        <header className="major">
          <h2>Projects</h2>
          <p>
            Listed below are some of the projects I've done in my college career. <br></br>
            From class projects, hackathons, research, side projects, and more on my <a href =  "https://github.com/kadhirash" > Github! </a> <br></br>
            Click on the project name to get to the repository!
          </p>
        </header>
        <div className="box alt">
          <div className="row gtr-uniform">
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-layer-group"></span> 
              <a href =  "https://github.com/kadhirash/CS179F-Project-in-OS" ><h3>Senior Design </h3> </a>
              <p>
                This project was completed with a group in my CS 179F : Project in Operating Systems, Winter 2020.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-chart-area"></span> 
              <a href =  "https://github.com/CS-UCR/cs105-prj-phase3-square" ><h3>Global Warming EDA Project </h3> </a>
              <p>
                This project was completed with a partner in my CS 105 : Data Analysis Methods, Winter 2020.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className = "icon solid alt major fa-spider"></span>
              <a href = "https://github.com/kadhirash/CS172ProjTwo" ><h3>Twitter Crawler</h3></a>
              <p>
                This project was completed with a group in CS 172 : Information Retrieval, Spring 2019.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-database"></span>
              <a href = "https://github.com/kadhirash/HotelDBMS" ><h3>Hotel DBMS</h3></a>
              <p>
                This project was completed with a partner in CS 166: Database Management Systems, Fall 2019.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-laptop-code"></span>
              <a href = "https://github.com/kadhirash/CS152" ><h3>Compiler</h3></a>
              <p>
                This project was completed by myself in CS 152: Compilers, Summer 2019.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-lock"></span>
              <a href = "https://github.com/kadhirash/CS100/tree/master/assignment-zaddy" ><h3>Command Shell</h3></a>
              <p>
                This project was completed with a partner in CS 100: Software Construction, Winter 2019.
              </p>
            </section>
          </div>
        </div>
        <footer className="major">
          <ul className="actions special">
            <li>
              <a href="/resume.pdf" className="button primary"  target = "_blank">
                Resume
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  </Fade>
)

export default Projects