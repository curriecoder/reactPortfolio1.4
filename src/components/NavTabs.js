import React from "react";
import avatar from "../assets/images/The-Mask.png";

export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header className="header container">
      <div className="row align-items-start">
        <div className="col-md-10 col-2">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={
                  currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                }
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="col-2">
          <div className="header-nameAvatar">
            <img className="avatar-img" src={avatar} alt="avatar image" />
          </div>
        </div>
      </div>
    </header> 
  );
}
