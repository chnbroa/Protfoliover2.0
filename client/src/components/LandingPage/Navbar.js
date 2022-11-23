import React, { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRightToBracket, faUserPlus, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { auth } from '../../_actions/user_action';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    const name = document.querySelector('.sub__menu__name');
    const login = document.querySelector('.sub__menu__login');
    const register = document.querySelector('.sub__menu__register');
    const logout = document.querySelector('.sub__menu__logout');
    dispatch(auth()).then((response) => {
      if (response.payload.isAuth) {
        name.classList.remove('open_name');
        login.classList.add('login_state');
        register.classList.add('login_state');
        logout.classList.remove('login_state');
        name.innerText = response.payload.name;
      }
      else {
        name.classList.add('open_name');
        login.classList.remove('login_state');
        register.classList.remove('login_state');
        logout.classList.add('login_state');
      }
    });


    const navbar = document.querySelector("#navbar");
    const navbarHeight = navbar.getBoundingClientRect().height;
    document.addEventListener("scroll", () => {
      if (window.scrollY > navbarHeight) {
        navbar.classList.add("navbar--dark");
      } else {
        navbar.classList.remove("navbar--dark");
      }
    })


    //Navbar Toggle button
    const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
    navbarToggleBtn.addEventListener("click", () => {

      navbarMenu.classList.toggle("open");
    })


    const navbarMenu = document.querySelector(".navbar__menu");

    navbarMenu.addEventListener('click', (event) => {
      const target = event.target;
      const link = target.dataset.link;
      if (link == null) {
        return;
      }
      navbarMenu.classList.remove("open");
      scrollIntoView(link);
    })

    //contack Me

    const contactBtn = document.querySelector(".home__contact");

    contactBtn.addEventListener('click', () => {
      scrollIntoView("#contact");
    })

    const subMenuBtn = document.querySelector(".navbar__menu__btn");
    const subMenu = document.querySelector(".navbar__sub__menu")
    subMenuBtn.addEventListener("click", () => {
      subMenu.classList.toggle("open_menu");
      subMenuBtn.classList.toggle("open_menu_btn")
    })

    function scrollIntoView(selector) {
      const scrollTo = document.querySelector(selector);
      scrollTo.scrollIntoView({ behavior: "smooth" });
    }
  }, [])

  const onClickLogoutHandler = () => {
    axios.get('api/user/logout')
      .then(response => {
        if (response.data.success) {
          navigate('/login')
          alert('로그아웃 완료')
        } else {
          alert('로그아웃 실패')
          console.log(response.data)
        }
      })
  }

  const onClickLoginHandler = () => {
    navigate('/login');
  }
  const onClickRegisterHandler = () => {
    navigate('/register');
  }


  return (
    <nav id="navbar">
      <div className="navbar__logo">
        <a href="/">
          <img src="imgs/Logo.png" alt="Logo" />
        </a>
        <a id="navbar__logo__name" href="/">Chnbroa</a>

      </div>
      <ul className="navbar__menu">
        <li className="navbar__menu__item menu_active" data-link="#Home">Home</li>
        <li className="navbar__menu__item menu_active" data-link="#about">About </li>
        <li className="navbar__menu__item menu_active" data-link="#skills">Skills</li>
        <li className="navbar__menu__item menu_active" data-link="#work">My work</li>
        <li className="navbar__menu__item menu_active" data-link="#contact">Contact</li>
        <li className="navbar__menu__item menu_btn" >  <FontAwesomeIcon icon={faCircleUser} className="navbar__menu__btn fa-circle-user" /> </li>
      </ul>
      <button className="navbar__toggle-btn">
        <FontAwesomeIcon icon={faBars} className="fa-solid fa-bars" />
      </button>


      <div className="navbar__sub__menu">
        <ul className="sub__menu">
          <li className="sub__menu__item sub__menu__name open_name">  </li>
          <li onClick={onClickLoginHandler} className="sub__menu__item sub__menu__login"><FontAwesomeIcon icon={faRightToBracket} className="sub__menu__icon fa-right-to-bracket" /> Login </li>
          <li onClick={onClickRegisterHandler} className="sub__menu__item sub__menu__register" ><FontAwesomeIcon icon={faUserPlus} className="sub__menu__icon fa-user-plus" /> Register </li>
          <li onClick={onClickLogoutHandler} className="sub__menu__item sub__menu__logout" ><FontAwesomeIcon icon={faRightFromBracket} className="sub__menu__icon fa-right-from-bracket" /> Logout </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
