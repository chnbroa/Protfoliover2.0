import React, { useEffect } from 'react'
function Home() {
  useEffect(() => {
    const home = document.querySelector(".home__container");
    const homeHeight = home.getBoundingClientRect().height;


    document.addEventListener('scroll', () => {
      home.style.opacity = 1 - window.scrollY / homeHeight
    })
  }, [])
  return (
    <section id="Home">
      <div className="home__container">
        <img src="imgs/profile.jpg" alt="profile" className="home__avatar" />
        <h1 className="home__title">
          Hello, <br />
          I'm Byeong Chan
        </h1>
        <h2 className="home__description">
          Promising Software Engineer :)
        </h2>
        <button className="home__contact">Contact ME</button>
      </div>
    </section>
  )
}

export default Home
