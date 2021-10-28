import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-12">
            <div className="text-center text-white footer-alt">
              <ul className="list-unstyled list-inline mb-3">
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/james-tinker/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="text-muted" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://github.com/JamTinker"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-muted" />
                  </a>
                </li>
              </ul>
              <p className="text-muted mb-0">
                {" "}
                2020 - {new Date().getFullYear()} &copy; T15DigitalMedia. Design
                by SRBThemes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
