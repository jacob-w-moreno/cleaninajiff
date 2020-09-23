import React from 'react';
import CTA from '../../Buttons/CTA';
import Logo from '../../Images/Logo.png';

const Intro = (props) => {
  return (<div className='intro'>
    {/* <img src={Logo} alt='clean-in-a-jiff' className='intro__logo'/> */}
    <h1>SOME CATCHY TEXT GOES HERE</h1>
    <h2>A little more descriptive information goes here.</h2>
    <CTA cta='SCHEDULE AN APPOINTMENT'/>
  </div>)
}
export default Intro;
