import React from 'react';
import '../assets/styles/components/header.scss';
import logo from '../assets/static/img-header.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => {
  return (
    <header className='header'>
      <img
        className='header__img'
        src={logo}
        alt='Platzi Video'
        width='100'
        height='100'
      />
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={userIcon} alt='' />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href='/'>Cuenta</a>
          </li>
          <li>
            <a href='/'>Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
