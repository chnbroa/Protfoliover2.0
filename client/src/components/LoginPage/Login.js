import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../_actions/user_action';
import { useNavigate } from "react-router-dom";


function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // console.log('Email', Email);
    // console.log('Password', Password);

    let body = {
      email: Email,
      password: Password
    }
    dispatch(loginUser(body))
      .then(response => {
        if (response.payload.loginSuccess) {
          navigate('/');
        }
        else {
          alert('Error');
        }
      })
  }

  const onRegisterHandler = () => {
    navigate('/register');
  }

  return (
    <div className="loginbdoy">
      <a className="login_img_logo" href="/">
        <img src="imgs/Favicon.png" alt="Logo" />
      </a>
      <div className="loginmain">
        <p className="sign" align="center">Login</p>
        <form className="form1" onSubmit={onSubmitHandler}>
          <input className="un " type="email" value={Email} onChange={onEmailHandler} align="center" placeholder="e.g. test@naver.com" autoComplete="new-email" />
          <input className="pass" type="password" value={Password} onChange={onPasswordHandler} align="center" placeholder="Password" autoComplete="new-password" />
          <button className="login_submit a" align="center">Log in</button>
        </form>
        <button className="login_forgot a" onClick={onRegisterHandler}>Register</button>
        <button className="login_forgot a"  >Forgot Password? </button>
      </div>
    </div >

  )
}

export default Login;
