import React from 'react';

import LogoWords from '../Images/LogoWords.png';
import LogoPanda from '../Images/LogoPanda.png';
import Logo from '../Images/Logo.png';

const Header = (props) => {
  return (<div className='header'>
    <div className='header__container'>
      <img className='header__logo-1' src={LogoWords} alt='logo'/>
      <img className='header__logo-2' src={LogoPanda} alt='logo'/>
      {/* <img className='header__logo' src={Logo} alt='logo'/> */}
    </div>
    <nav className='header__nav'>
      <a>Services</a>
      <a>Testimonials</a>
      <a>About Us</a>
      <button className='header__cta'>Schedule</button>
    </nav>
  </div>)
}
export default Header;
