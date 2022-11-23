import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faFacebook } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function Contact() {
  return (
    <section id="contact" className="section">
      <h1 className="contact__title">Let's talk</h1>
      <h2 className="contact__email">chnbroa011@naver.com</h2>
      <div className="contact__links">
        <a href="https://github.com/chnbroa" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={["fab", "fa-github"]} className="contactIcon fa-github" />
        </a>
        <a href="https://www.facebook.com/chnbroa011/" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={faFacebook} className="contactIcon fa-facebook" />
        </a>
      </div>
      <p className="contact__rights">
        © 2022 All rights reserved.
      </p>
    </section>

  )
}

export default Contact
