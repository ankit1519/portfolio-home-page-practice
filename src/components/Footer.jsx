import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faYoutube,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <a
              href="https://github.com/ankit1519"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a
              href="https://www.youtube.com/@ankitrajsrivastava"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} /> YouTube
            </a>
            <a
              href="https://www.linkedin.com/in/ankitraj-srivastava/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            <a
              href="https://twitter.com/this_ankitraj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Ankit Raj</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
