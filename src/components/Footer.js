import React from 'react'

const Footer = props => (
  <footer id="footer">
     <a href = "/" className="button primary"> Jump back to home</a> <br></br><br></br>
    <ul className="icons">
      <li>
        <a href="https://www.linkedin.com/in/kadhirash" className="icon brands alt fa-linkedin-in">
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/kadhirash/" className="icon brands alt fa-instagram">
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/kadhirash" className="icon brands alt fa-github">
          <span className="label">GitHub</span>
        </a>
      </li>
      <li>
        <a href="mailto:kadhirash@gmail.com?subject=[Website]%20Potenial%20Meetup" className="icon solid alt fa-envelope">
          <span className="label">Email</span>
        </a>
      </li>
    </ul>
    <ul className="copyright">
      <li>&copy; Untitled. All rights reserved.</li>
      <li>
      Image Credits: <a href="https://unsplash.com">Unsplash</a>
      </li>
    </ul>
  </footer>
)
export default Footer