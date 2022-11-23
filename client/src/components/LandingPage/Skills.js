import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faServer, faDatabase } from "@fortawesome/free-solid-svg-icons";
function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__container">
        <h1>Skills</h1>
        <h2>Skills & Attributes</h2>

        <div className="skills__majors">
          <div className="major">
            <div className="major__icon">
              <FontAwesomeIcon icon={faHtml5} className="fa-html5" />
            </div>
            <h2 className="major__title"> Front-end</h2>
            <div className="major__description">
              HTML, CSS, JavaScript, TypeScript,
              <br />React
            </div>
            <div className="skills__major__description">
              <h2 className="major__title">
                <FontAwesomeIcon icon={faHtml5} className="major_title_icon fa-html5" />
                Front-end</h2>
              <div className="skill__description">
                <span>HTML</span>
                <span>99%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: '99%' }}></div>
              </div>

              <div className="skill__description">
                <span>CSS</span>
                <span>90%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: '90%' }}></div>
              </div>

              <div className="skill__description">
                <span>JavaScript</span>
                <span>80%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: '80%' }}></div>
              </div>

              <div className="skill__description">
                <span>React</span>
                <span>55%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: '55%' }}></div>
              </div>

              <div className="skill__description">
                <span>TypeScript</span>
                <span>0%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: '0%' }}></div>
              </div>
            </div>
          </div>
          <div className="major">
            <div className="major__icon">
              <FontAwesomeIcon icon={faServer} className="fa-server" />
            </div>
            <h2 className="major__title"> Back-end</h2>
            <div className="major__description">
              C++, Java, Python, NodeJS <br />
            </div>
            <div className="skills__major__description">
              <h2 className="major__title">
                <FontAwesomeIcon icon={faServer} className="major_title_icon fa-server" />
                Back-end</h2>
              <div className="skill__description">
                <span>C++</span>
                <span>95%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: '95%' }}></div>
              </div>

              <div className="skill__description">
                <span>Java</span>
                <span>90%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: '90%' }}></div>
              </div>


              <div className="skill__description">
                <span>Python</span>
                <span>75%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: '75%' }}></div>
              </div>

              <div className="skill__description">
                <span>NodeJS</span>
                <span>60%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
          <div className="major">
            <div className="major__icon">
              <FontAwesomeIcon icon={faDatabase} className="fa-database" />
            </div>
            <h2 className="major__title"> DataBase</h2>
            <div className="major__description">
              MySQL, NoSQL, MongoDB, Oracle
              <br />
            </div>
            <div className="skills__major__description">
              <h2 className="major__title">
                <FontAwesomeIcon icon={faDatabase} className="major_title_icon fa-database" />
                DataBase</h2>


              <div className="skill__description">
                <span>MySQL</span>
                <span>45%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: '45%' }}></div>
              </div>

              <div className="skill__description">
                <span>MongoDB</span>
                <span>40%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: '40%' }}></div>
              </div>

              <div className="skill__description">
                <span>NoSQL</span>
                <span>0%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: '0%' }}></div>
              </div>

              <div className="skill__description">
                <span>Oracle</span>
                <span>0%</span>
              </div>
              <div className="skill__bar">
                <div className="skill__value" style={{ width: '0%' }}></div>
              </div>


            </div>
          </div>
        </div>

        <h1>Major Skills</h1>

        <div className="wrap-circles">
          <div className="circle per-html">
            <div className="inner">HTML</div>
            <div className="inner select">99%</div>
          </div>
          <div className="circle per-c">
            <div className="inner">C++</div>
            <div className="inner select">95%</div>
          </div>
          <div className="circle per-css">
            <div className="inner">CSS</div>
            <div className="inner select">90%</div>
          </div>
          <div className="circle per-java">
            <div className="inner">Java</div>
            <div className="inner select">90%</div>
          </div>
          <div className="circle per-javascript">
            <div className="inner">Javascript</div>
            <div className="inner select">80%</div>
          </div>
        </div>
      </div>


      <div className="skillset">
        <div className="tools">
          <h3 className="skillset__title">Tools</h3>
          <ul className="tools__list">
            <li><span>Visual Studio Code</span></li>
            <li><span>Git</span></li>
            <li><span>PhotoShop</span></li>
            <li><span>Eclipse</span></li>
          </ul>
        </div>
        <div className="etc">
          <h3 className="skillset__title">Next</h3>
          <ul className="etc__list">
            <li><span>TypeScript</span></li>
            <li><span>React</span></li>
            <li><span>NodeJS</span></li>
            <li><span>MongoDB</span></li>
            <li><span>Oracle</span></li>
          </ul>
        </div>
      </div>
    </section>

  )
}

export default Skills
