import React from 'react';

const Service = (props) => {
  return (<div className='service'>
    {/* <img className='service__img' alt='service-pic'/> */}
      <h3>{props.name}</h3>
      <span>{props.price}</span>
  </div>)
}
export default Service;
