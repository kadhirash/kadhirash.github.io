import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import out from '../assets/images/outdoors.jpg'


const LeftSidebar = props => (
  <Layout>
    <Helmet>
      <meta name="description" content="Right Sidebar Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Spare Time</h2>
          <p>
          A closer look into what I do outside of being a student.
          </p>
        </header>
        <div className="row gtr-150">
          <div className="col-8 col-12-medium">
            <section id="content">
              <h3>Current Mood</h3>
              <p>
              I miss being outdoors. The sun hitting my face, hearing the birds chirp in the early morning, and seeing that beautiful sunrise/sunset
              during hikes. I also really like to run. Back in high school I was on the cross country team and it provided me a way
              to relieve stress in a healthy manner. These are trying times with covid-19 and I hope everyone is staying safe and healthy!<br></br>

              </p>
              
              <h3>What I'm up to now</h3>
              <p>
                <ul>
                    <li>  <a href = "https://github.com/kadhirash/CS175" >CS 175: Enterpreneruship in Computing coding project </a> </li>
                    <li> < a href = "https://github.com/kadhirash/mhaa" > Mental Health Awareness web and mobile app</a></li>
                    <li>Learning how to cook</li> 
                    <li>Working out at home and going on runs</li>
                    <li>Currently reading <i>You Can Win</i> by Shiv Kera</li> 
                    <li>Currently watching <i>Haikyuu!!</i></li>
                 </ul>
              </p>
              
            </section>
          </div>
          <div className="col-4 col-12-medium">
            <section id="sidebar">
             
              <section>
                <a href="#" className="image fit">
                  <img src={out} alt="" />
                </a>
                <p>
                 Pictured above is when I went to Mount Tamalpais State Park in Summer 2019 with some friends. 
                
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