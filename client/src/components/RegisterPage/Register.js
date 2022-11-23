import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../_actions/user_action';
import { useNavigate } from "react-router-dom";


function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setComnirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  }

  const onNameHandler = (event) => {
    setName(event.target.value);
  }

  const onConfirmPasswordHandler = (event) => {
    setComnirmPassword(event.target.value);
  }
  const onLoginHandler = () => {
    navigate('/login');
  }


  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (Password !== ConfirmPassword) {
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
    }
    let body = {
      email: Email,
      password: Password,
      name: Name
    }
    dispatch(registerUser(body))
      .then(response => {
        if (response.payload.success) {
          navigate('/login');
        }
        else {
          alert('Failed to sign up');
        }
      })
  }

  return (
    <div className="register_body">
      <a className="register_img_logo" href="/">
        <img src="imgs/Favicon.png" alt="Logo" />
      </a>
      <div className="register_main">
        <p className="register" align="center">Register</p>
        <form className="register_form" onSubmit={onSubmitHandler}>
          <input className="un " type="email" value={Email} onChange={onEmailHandler} align="center" placeholder="e.g. test@naver.com" autoComplete="new-email" />
          <input className="un " type="text" value={Name} onChange={onNameHandler} align="center" placeholder="Name" autoComplete="username" />
          <input className="pass" type="password" value={Password} onChange={onPasswordHandler} placeholder="Password" autoComplete="new-password" />
          <input className="pass" type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} placeholder="ConfirmPassword" autoComplete="new-password" />
          <button className="register_submit a" align="center">Create Account</button>
        </form>
        <button className="forgot a" onClick={onLoginHandler} >login</button>

      </div>
    </div >
  )
}

export default Register
