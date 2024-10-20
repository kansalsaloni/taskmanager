import React from 'react'
import '../Style/login.css';
import Image from '../assets/LoginArtImage.svg';
import LoginForm from '../Component/LoginForm';
import RegisterForm from '../Component/RegisterForm';

function Login() {
  return (
    <div className='main-container'>
      <div className='container-left'>
        <img src={Image} alt="" className='left-art-image' />
        <h2>Welcome aboard my friend</h2>
        <p>Just a couple of clicks and we start</p>
      </div>

      <div className='container-right'>
        <RegisterForm />
      </div>
    </div>
  )
}

export default Login
