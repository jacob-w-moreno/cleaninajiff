import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import CleanVanInt from '../../Images/CleanVanInt.JPG';
import CleanVanInt2 from '../../Images/CleanVanInt2.JPG';
import CleanVanInt3 from '../../Images/CleanVanInt3.JPG';

const Testimonials = (props) => {
  return (<div className='testimonials'>
    <h2>TESTIMONIALS</h2>
    <AliceCarousel autoPlay autoPlayInterval='5000'>
      <div className='testimonial'>
        <h3>"Clean in a Jiff cleaned my car so well! This is a beaming review!"</h3>
        <span>— a satisfied customer</span>
      </div>
      <div className='testimonial'>
        <h3>"This is the best review in the entire world! Is it made up? Who cares!"</h3>
        <span>— a satisfied customer</span>
      </div>
      <div className='testimonial'>
        <h3>"My car has never been cleaner! This is the cleanest car in the world! Wow!"</h3>
        <span>— a satisfied customer</span>
      </div>
    </AliceCarousel>
  </div>)
}
export default Testimonials;
