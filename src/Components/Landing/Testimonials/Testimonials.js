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
        <h3>Thorough and detailed. They cleaned our 12-passenger van and got rid of stains we tried several times to remove ourselves. They were very friendly and let our little kids have a shot with the cleaning tools.</h3>
        <span>— Louise</span>
      </div>
      <div className='testimonial'>
        <h3>Just had @cleaninajiff detail my car today and it looks immaculate!! I'd highly recommend them.</h3>
        <span>— Christin</span>
      </div>
    </AliceCarousel>
  </div>)
}
export default Testimonials;
