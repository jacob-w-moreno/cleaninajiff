import React from 'react';
import Logo from '../../Images/Logo.png';

const Intro = (props) => {
  return (<div className='intro'>
    {/* <img src={Logo} alt='clean-in-a-jiff' className='intro__logo'/> */}
    <h1>CLEAN AND SPIFFY IN A JIFFY</h1>
    <h2>We come to you! Or you come to us!</h2>
    <button className='intro__cta' onClick={()=>props.scheduleFN(true)}>SCHEDULE AN APPOINTMENT</button>
  </div>)
}
export default Intro;
