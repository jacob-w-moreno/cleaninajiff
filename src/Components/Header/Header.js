import React, {useState} from 'react';
// import { HashLink as Link } from 'react-router-hash-link';

import LogoWords from '../Images/LogoWords.png';
import LogoPanda from '../Images/LogoPanda.png';
import Logo from '../Images/Logo.png';
import HamburgerMenu from '../Images/HamburgerMenu.png';

const Header = (props) => {
  const [nav, showNav] = useState(false);

  const smallNav = nav
    ? <nav className='header__nav-small'>
        <a className='header__link-small'>Services</a>
        <a className='header__link-small'>Testimonials</a>
        <a className='header__link-small'>About Us</a>
      </nav>
    : null;
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
      <button className='header__cta' onClick={()=>props.scheduleFN(true)}>Schedule</button>
    </nav>
    <img className='header__hamburger' src={HamburgerMenu} alt='hamburger-menu' onClick={()=>showNav(nav?false:true)}/>
    {smallNav}
  </div>)
}
export default Header;
