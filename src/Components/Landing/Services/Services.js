import React from 'react';
import Service from './Service';
import CTA from '../../Buttons/CTA';

const Services = (props) => {
  return (<div className='services'>
    <h2>SERVICES</h2>
    <div className='services__grid'>
      <Service
        name='Small Vehicle Interior Detail'
        price='$130'/>
      <Service
        name='Medium Vehicle Interior Detail'
        price='$160'/>
      <Service
        name='Large Vehicle Interior Detail'
        price='$100'/>
    </div>
    <CTA cta='CALL TO ACTION'/>
  </div>)
}
export default Services
