import React from 'react';
import Check from '../../Images/Check.png';

const Services = (props) => {

  const image = <img className='check' src={Check}/>;
  return (<div className='services'>
    <h2>SERVICES</h2>
    <section>
      <p className='services__location'>Based in Utah County, we detail at our location and travel to close enough locations. Contact us for more details!</p>
    </section>
    <div className='services__list'>
      <div className='services__service'>
        <h3>INTERIOR DETAILING</h3>
        <ul>
          <li>{image} Hard interior surfaces wiped down</li>
          <li>{image} Door jambs wiped and cleaned</li>
          <li>{image} Carpet, seats and compartments vacuumed</li>
          <li>{image} Upholstery and carpet extraction</li>
          <li>{image} Leather cleaning and conditioning</li>
          <li>{image} Plastic and vinyl interior components UV protected</li>
          <li>{image} Glass cleaned inside and out to a streak-free finish</li>
        </ul>
      </div>
      <div className='services__service'>
        <h3>EXTERIOR DETAILING</h3>
        <ul>
          <li>{image} Pressure wash vehicle to remove all loose dirt and debris</li>
          <li>{image} Foam bath pre-soak with cleaner/wax combo</li>
          <li>{image} Detailed hand wash using the 2 bucket method</li>
          <li>{image} Clean the rim faces, tires and fender wells</li>
          <li>{image} Hand dry exterior using premium microfiber towels</li>
          <li>{image} Apply water-based tire dressing that won't sling</li>
        </ul>
      </div>
    </div>
  </div>)
}
export default Services
