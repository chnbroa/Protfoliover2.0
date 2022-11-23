import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section id="about" className="section section__container">
      <h1>About me</h1>

      <div className="about__jobs">
        <div className="about__impormation">
          <div className="about__description">
            <h2>Name</h2>
            <p>김병찬 (Byeongchan, Kim)</p>
          </div>

          <div className="about__description">
            <h2>Age</h2>
            <p>23</p>
          </div>
          <div className="about__description">
            <h2>Address</h2>
            <p>Jeollabuk-do, Jeonju-si</p>
          </div>
          <div className="about__description">
            <h2>E-mail </h2>
            <p>chnbroa011@naver.com</p>
          </div>
          <div className="about__description">
            <h2>Phone</h2>
            <p>+82 10 5240 7433</p>
          </div>
        </div>


        <div className="job">
          <FontAwesomeIcon icon={faIdCard} className="fa-id-card" />
          <div className="job__description">
            <p className="job__name">정보처리기능사</p>
            <p className="job__period">2014 Sept</p>
          </div>
        </div>

        <div className="job">
          <FontAwesomeIcon icon={faIdCard} className="fa-id-card" />
          <div className="job__description">
            <p className="job__name">컴퓨터활용능력 2급</p>
            <p className="job__period">2013 Oct</p>
          </div>
        </div>
        <div className="job">
          <FontAwesomeIcon icon={faIdCard} className="fa-id-card" />
          <div className="job__description">
            <p className="job__name">운전면허증 (1종보통)</p>
            <p className="job__period">2018 Oct</p>
          </div>
        </div>
        <div className="job">
          <img src="imgs/jobs/JobLogo-removebg-preview.png" alt="Job logo" className="job__logo" />
          <div className="job__description">
            <p className="job__name">Currently attending Kunsan University as a student</p>
            <p className="job__period">2018 Mar - Until now</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
