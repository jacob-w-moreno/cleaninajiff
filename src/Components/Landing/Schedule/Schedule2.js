import React from 'react';

import Instagram from '../../Images/Instagram.png';
import IconPhone from '../../Images/IconPhone.png';
import IconEmail from '../../Images/IconEmail.png';

const Schedule2 = (props => {
  return (<div className='schedule'>
    <div className='schedule__inner'>
      <h3>Schedule an Appointment</h3>
      <a className='schedule__box' href='tel:4804588674' target='_blank' rel='noopener noreferrer' >
        <img className='schedule__icon-2' src={IconPhone} alt='phone'/> 480-458-8674
      </a>
      <a className='schedule__box' href='mailto:cleaninajiff@gmail.com?subject=Schedule Appointment' target='_blank' rel='noopener noreferrer'>
        <img className='schedule__icon-2' src={IconEmail} alt='email'/> cleaninajiff@gmail.com
      </a>
      <a className='schedule__box' target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/cleaninajiff/'>
        <img className='schedule__icon-2' src={Instagram} alt='instagram'/> @cleaninajiff
      </a>
      <button className='schedule__button schedule__cancel' onClick={()=>props.scheduleFN(false)}>CANCEL</button>
    </div>
  </div>)
})
export default Schedule2;
