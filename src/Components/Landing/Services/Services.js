import React from 'react';
import Service from './Service';
import CTA from '../../Buttons/CTA';

const Services = (props) => {
  return (<div className='services'>
    <h2>SERVICES</h2>
    <div className='services__grid'>
      <Service
        name='Service'
        price='$100'/>
      <Service
        name='Service 2'
        price='$100'/>
      <Service
        name='Service 3'
        price='$100'/>
    </div>
    <CTA cta='CALL TO ACTION'/>
  </div>)
}
export default Services
