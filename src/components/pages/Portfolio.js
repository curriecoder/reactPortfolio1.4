import React from "react";
import chessmate from "../../assets/images/chessmate.png";
import getToWork from "../../assets/images/get-to-work.png";
import codeQuiz from "../../assets/images/code-quiz.png";
import weatherForecast from "../../assets/images/weather-forecast.png";
import packRat from "../../assets/images/pack-rat-scrnsht.png";
import budgetTracker from "../../assets/images/pwa-budget-tracker.png";

export default function Portfolio() {
  return (
    <div className="container xs-no-gutters">
      <h1 className="mb-5 my-2">Portfolio</h1>
      <div
        className="row justify-content-between align-items-center"
        id="cardContainer"
      >
        <div className="card col-4 mb-5">
          <a
            className="rounded-top"
            href="https://chessmate-penn.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="card-img" src={chessmate} alt="chessmate image" />
          </a>
          <div className="card-body rounded-bottom p-2">
            <p className="card-text">
              Chessmate - An online chess trainer with high level games, AI
              opponent, and chess resources in one stop.
              <h5 className="card-text my-2">Stack</h5>
              <p className="card-text">
                HTML, CSS, JavaScript, React, Bootstrap, Git
              </p>
              <a
                href="https://github.com/curriecoder/Chessmate"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
          </div>
        </div>

        <div className="card col-4 mb-5">
          <a
            className="rounded-top"
            href="https://stormy-fortress-72998.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="card-img" src={getToWork} alt="get-to-work image" />
          </a>
          <div className="card-body rounded-bottom p-2">
            <p className="card-text">
              Get to Work - A simple app to collaborate with team mates and
              manage time online.
              <h5 className="card-text my-2">Stack</h5>
              <p className="card-text">
                HTML, CSS, JavaScript, Handlebars, Day.js, Materialize, Git
              </p>
              <a
                href="https://github.com/curriecoder/project-management-application"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
          </div>
        </div>

        <div className="card col-4 mb-5">
          <a
            className="rounded-top"
            href="https://curriecoder.github.io/code-quiz/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="card-img"
              src={codeQuiz}
              alt="code-quiz image"
            />
          </a>
          <div className="card-body rounded-bottom p-2">
            <p className="card-text">
              Code Quiz - An online quiz application built with pure JavaScript
              about JavaScript!
              <h5 className="card-text my-2">Stack</h5>
              <p className="card-text">
                HTML, CSS, JavaScript, Git
              </p>
              <a
                href="https://github.com/curriecoder/code-quiz"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
          </div>
        </div>

        <div className="card col-4 mb-5">
          <a
            className="rounded-top"
            href="https://curriecoder.github.io/weather-dashboard/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="card-img"
              src={weatherForecast}
              alt="weather-dashboard image"
            />
          </a>
          <div className="card-body rounded-bottom p-2">
            <p className="card-text">
              Weather Dashboard - An elegant interface for quickly finding
              weather and five-day forecast info-graphics.
              <h5 className="card-text my-2">Stack</h5>
              <p className="card-text">
                HTML, CSS, JavaScript, jQuery, Bootstrap, Git, Openweather API
              </p>
              <a
                href="https://github.com/curriecoder/weather-dashboard"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
          </div>
        </div>

        <div className="card col-4 mb-5">
          <a
            className="rounded-top"
            href="https://nazikbestcoder.github.io/Pack-Rat/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="card-img"
              src={packRat}
              alt="pack-rat image"
            />
          </a>

          <div className="card-body rounded-bottom p-2">
            <p className="card-text">
              Pack Rat - This project allows users to view national parks, see
              satellite imagery of the location, and weather.
              <h5 className="card-text my-2">Stack</h5>
              <p className="card-text">
                HTML, CSS, JavaScript, Bulma, Git, NASA API, NPS API, Openweather API
              </p>
              <a
                href="https://github.com/curriecoder/Pack-Rat"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
          </div>
        </div>

        <div className="card col-4 mb-5">
          <a
            className="rounded-top"
            href="https://fierce-dawn-66408.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="card-img"
              src={budgetTracker}
              alt="pwa-budget-tracker image"
            />
          </a>
          <div className="card-body rounded-bottom p-2">
            <p className="card-text">
              PWA Budget Tracker - Online or offline, this budget tracker
              enables any expense to be tracked.
              <h5 className="card-text my-2">Stack</h5>
              <p className="card-text">
                HTML, CSS, JavaScript, Service Worker, Manifest, X-icon, Git
              </p>
              <a
                href="https://github.com/curriecoder/online-offline-budget-tracker"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
