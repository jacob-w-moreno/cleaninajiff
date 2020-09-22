import React from 'react';

import JiffyLogo from '../Images/JiffyLogo.png';
import JiffyLogo2 from '../Images/JiffyLogo2.png';

const Header = (props) => {
  return (<div className='header'>
    <div className='header__logo-container'>
      <img className='header__logo-2' src={JiffyLogo2} alt='logo'/>
      <img className='header__logo-1' src={JiffyLogo} alt='logo'/>
    </div>
    {/* <header>This is the header</header> */}
    <p>(555) 555-5555</p>
  </div>)
}
export default Header;
