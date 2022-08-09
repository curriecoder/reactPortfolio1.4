import React from "react";
export default function Footer() {
  return (
    <footer className="footer fixed-bottom">
      <div className="container">
        <div className="row justify-content-center">
        <ul className="footer-list p-2 d-md-inline-flex">
          <li className="footer-item">555-555-5555</li>
          <li className="footer-item">
            <a
              href="mailto:andrew.j.currie0@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              andrew.j.currie0@gmail.com
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://github.com/curriecoder"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://www.linkedin.com/in/andrewjcurrie0/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://soundcloud.com/user-956212347"
              target="_blank"
              rel="noreferrer"
            >
              SoundCloud Profile
            </a>
          </li>
        </ul>
      
      </div>
      </div>
    </footer>
  );
}
