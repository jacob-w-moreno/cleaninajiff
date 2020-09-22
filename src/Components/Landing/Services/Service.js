import React from 'react';

const Service = (props) => {
  return (<div className='service'>
    <img className='service__img' alt='service-pic'/>
    <div className='service__info-container'>
      <span>{props.name}</span>
      <span>{props.price}</span>
    </div>
  </div>)
}
export default Service;
