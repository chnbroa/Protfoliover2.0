
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Work() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1500
    });
  })
  return (
    <section id="work" className="section">
      <div className="section__container">
        <h1>My work</h1>
        <h2>Projects</h2>
        <div className="work__projects">

          <div className="iconmouse">
            <span className="ball"></span>
          </div>

          <div className="project project_left" data-aos="fade-up-right">
            <img src="imgs/projects/youtube.png" alt="Youtube" className="project__img" />
            <div className="project__description">
              <div className="description_text">
                <h3>Youtube</h3>
                <span>Clone coding with HTML, CSS, JS</span>
              </div>
              <div className="description__icon">
                <a href="https://github.com/chnbroa/YoutubeClone" rel="noopener noreferrer" target='_blank'>
                  <FontAwesomeIcon icon={faGithubSquare} className="workIcon fa-github-square" />
                </a>
                <a href="https://chnbroa.github.io/YoutubeClone/" rel="noopener noreferrer" target='_blank'>
                  <FontAwesomeIcon icon={faLink} className="workIcon fa-link" />
                </a>
              </div>
            </div>

          </div>



          <div className="project project_right" data-aos="fade-down-right">
            <img src="imgs/projects/TodoList.PNG" alt="TodoList" className="project__img" />
            <div className="project__description">
              <div className="description_text">
                <h3>TodoList</h3>
                <span>Create a Website with HTML, CSS, JS</span>
              </div>
              <div className="description__icon">
                <a href="https://github.com/chnbroa/JSchallenge" rel="noopener noreferrer" target='_blank'>
                  <FontAwesomeIcon icon={faGithubSquare} className="workIcon fa-github-square" />
                </a>
                <a href="https://chnbroa.github.io/JSchallenge/" rel="noopener noreferrer" target='_blank'>
                  <FontAwesomeIcon icon={faLink} className="workIcon fa-link" /></a>
              </div>
            </div>
          </div>

          <div className="project project_left" data-aos="fade-up-right">
            <img src="imgs/projects/project1.PNG" alt="Shopping Mall" className="project__img" />
            <div className="project__description">
              <div className="description_text">
                <h3>Shopping Mall</h3>
                <span>Create a Website with HTML, CSS</span>
              </div>
              <div className="description__icon">
                <a href="https://github.com/chnbroa/HTMLproject1" rel="noopener noreferrer" target='_blank'>
                  <FontAwesomeIcon icon={faGithubSquare} className="workIcon fa-github-square" />
                </a>
                <a href="https://chnbroa.github.io/HTMLproject1/" rel="noopener noreferrer" target='_blank'>
                  <FontAwesomeIcon icon={faLink} className="workIcon fa-link" />
                </a>
              </div>
            </div>
          </div>

          <div className="project project_right" data-aos="fade-down-right">
            <img src="imgs/projects/DESIGN.png" alt="HTMLpractice" className="project__img" />
            <div className="project__description">
              <div className="description_text">
                <h3>HTMLpractice</h3>
                <span>Clone coding with HTML, CSS</span>
              </div>
              <div className="description__icon">
                <a href="https://github.com/chnbroa/DESIGINSiteClone" rel="noopener noreferrer" target='_blank'>
                  <FontAwesomeIcon icon={faGithubSquare} className="workIcon fa-github-square" />
                </a>
                <a href="https://chnbroa.github.io/DESIGINSiteClone/" rel="noopener noreferrer" target='_blank'>
                  <FontAwesomeIcon icon={faLink} className="workIcon fa-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
