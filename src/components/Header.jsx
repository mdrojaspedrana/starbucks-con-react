import React from 'react'
import LOGO from '../images/logo.png'
import BtnHeader from '../subComponents/BtnHeader'

const Header = () => {
  return (
    <header className="header">
        <div className="header__container-logo">
            <img className="header__logo" src={LOGO} alt="logo.png"/>
        </div>
        <nav className="header__nav">
            <BtnHeader textContent="INICIO"/>
            <BtnHeader textContent="CAFE"/>
            <BtnHeader textContent="SOBRE NOSOTROS"/>
            <BtnHeader textContent="DELIVERY"/>
        </nav>
        <div className="header__container-login">
            <i className="header__container-usuario bi bi-person-circle"></i>
        </div>
        <i className="header__login bi bi-list"></i>
    </header>
  )
}

export default Header