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
      <img src={CleanVanInt} className="sliderimg"/>
      <img src={CleanVanInt2} className="sliderimg"/>
      <img src={CleanVanInt3} className="sliderimg"/>
    </AliceCarousel>
  </div>)
}
export default Testimonials;
