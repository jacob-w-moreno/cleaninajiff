import React from 'react';
import CTA from '../../Buttons/CTA';

const Services = (props) => {
  return (<div className='services'>
    <h2>SERVICES</h2>
    <div className='services__list'>
      <div className='services__service'>
        <h3>INTERIOR DETAILING</h3>
        <ul>
          <li>Hard interior surfaces wiped down</li>
          <li>Door jambs wiped and cleaned</li>
          <li>Carpet, seats and compartments vacuumed</li>
          <li>Upholstery and carpet extraction</li>
          <li>Leather cleaning and conditioning</li>
          <li>Plastic and vinyl interior components UV protected</li>
          <li>Glass cleaned inside and out to a streak-free finish</li>
        </ul>
      </div>
      <div className='services__service'>
        <h3>EXTERIOR DETAILING</h3>
        <ul>
          <li>Pressure wash vehicle to remove all loose dirt and debris</li>
          <li>Foam bath pre-soack with cleaner/wax combo</li>
          <li>Detailed hand wash using the 2 bucket method</li>
          <li>Clean the rim faces, tires and fender wells</li>
          <li>Hand dry exterior using premium microfiber towels</li>
          <li>Apply water-based tire dressing that won't sling</li>
        </ul>
      </div>
    </div>
  </div>)
}
export default Services
