import * as React from 'react'
import Logo from '../Components/logo/Logo'
import pablo from '../assets/images/pablo-sign-in 1.svg'
import LoginForm from '../Components/loginform/LoginForm'
import "../assets/styles/login.scss"

const Login = () => {
  return (
    <div className="login-page">
        <div className="logo-half">
            <Logo />
            <img src={pablo} alt="homepage-animation" className="man-img"/>
        </div>
        <LoginForm />
    </div>
  )
}

export default Login