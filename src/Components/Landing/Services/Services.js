import React from 'react';
import CTA from '../../Buttons/CTA';

const Services = (props) => {
  return (<div className='services'>
    <div className='services__section'>
      <h2>SERVICES</h2>
      <h3>Interior Detailing</h3>
      <ul>
        <li>Hard interior surfaces wiped down</li>
        <li>Door jambs wiped and cleaned</li>
        <li>Carpet, seats, and compartments vacuumed</li>
        <li>Upholstery and carpet extraction</li>
        <li>Leather cleaning and conditioning</li>
        <li>Plastic and vinyl interior components UV protected</li>
        <li>Glass cleaned inside and out to a streak-free finish</li>
      </ul>
      <h3>Exterior Detailing</h3>
      <ul>
        <li>Something</li>
        <li>Something else</li>
        <li>Another thing</li>
      </ul>
    </div>
    <div className='services__section'>
      <h2>PRICING</h2>
      <div className='pricing'><h3>Compact / Sedan Interior Detail:</h3><span>$130</span></div>
      <div className='pricing'><h3>SUV-Sized Interior Detail:</h3><span>$160</span></div>
      <div className='pricing'><h3>Truck / Larger Vehicles:</h3><span>$180 +</span></div>
      <div className='pricing__exterior'>Add exterior detailing for only $30!</div>
      <span className='pricing__dirty'>* Excessively dirty vehicles will cost an additional $50</span>
    </div>
  </div>)
}
export default Services
