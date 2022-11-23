import React from 'react';
import Auth from '../../../hoc/auth';
import Login from '../../LoginPage/Login';
import '../../LoginPage/loginstyle.css'

function LoginPage() {

  return (
    <div>
      <Login />
    </div>

  )
}

export default Auth(LoginPage, false);
