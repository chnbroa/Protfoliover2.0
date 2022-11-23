import React from 'react';
import Auth from '../../../hoc/auth';
import Register from '../../RegisterPage/Register';
import '../../../components/RegisterPage/registerstyle.css';
function RegisterPage() {

  return (
    <Register />
  )
}

export default Auth(RegisterPage, false);
