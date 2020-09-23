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
        <li>Minor carpet stain removal</li>
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
      <h3>Compact / Sedan Interior Detail:</h3><span>$130</span>
      <h3>SUV-Sized Interior Detail: $160</h3><span>$130</span>
      <h3>Truck / Larger Vehicles: $180 +</h3><span>$130</span>
    </div>
    {/* <h2>SERVICES & PRICING</h2>
    <section className='services__grid'>
      <div className="services__card">
        <h3>Interior Detailing</h3>
        <ul>
          <li>All hard interior surfaces wiped down</li>
          <li>Door jambs wiped and cleaned</li>
          <li>Carpet, seats, and compartments vacuumed</li>
          <li>Minor carpet stain removal</li>
          <li>All plastic and vinyl interior components UV protected</li>
          <li>Glass cleaned inside and out to a streak-free finish</li>
        </ul>
      </div>
      <div className="services__card">
        <h3>Pricing</h3>
        <ul>
          <li>All hard interior surfaces wiped down</li>
          <li>Door jambs wiped and cleaned</li>
          <li>Carpet, seats, and compartments vacuumed</li>
          <li>Minor carpet stain removal</li>
          <li>All plastic and vinyl interior components UV protected</li>
          <li>Glass cleaned inside and out to a streak-free finish</li>
        </ul>
      </div>
    </section>
    <CTA cta='CALL TO ACTION'/> */}
  </div>)
}
export default Services
