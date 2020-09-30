import React from 'react';
import Couple from '../../Images/Couple.png';
import Instagram from '../../Images/Instagram.png';

const Contact = (props) => {
  return (<div className='contact'>
    <h2>ABOUT US</h2>
    <div className='about__container'>
      <img className='about__img' src={Couple} alt='tanner-and-shay'/>
      <p className='about__text'>
        <span>
          Thank you for allowing us to detail your car! We want you to know that you are supporting our dreams!
        </span>
        <span>
          We are a husband and wife team. Together we have numerous years of business and cleaning experience. The perfect team.
        </span>
        <span>
          We started this side gig to fund our way to and through graduate school. It isn’t cheap. Instead of going into $$$$ of debt, we decided to give our talents to our community.
        </span>
        <span>
          Again, thank you so much for your support!
        </span>
        <span>
          — Jiffy & Shay
        </span>
        <a className='instagram' target='_blank' href='https://www.instagram.com/cleaninajiff/' rel='noopener noreferrer'>
          <img className='instagram__icon' src={Instagram} alt='instagram-icon'/>
            Follow us on Instagram!
          {/* <img className='instagram__icon' src={Instagram} alt='instagram-icon'/> */}
        </a>
      </p>
    </div>
  </div>)
}

export default Contact;
