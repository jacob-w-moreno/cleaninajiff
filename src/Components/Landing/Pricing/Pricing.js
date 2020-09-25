import React from 'react';
import IconCar from '../../Images/IconCar.png';
import IconTruck from '../../Images/IconTruck.png';
import IconSUV from '../../Images/IconSUV.png';

const Pricing = (props) => {
  return(<div className='pricing'>
    <h2>PRICING</h2>
    <h3>Interior & Exterior</h3>
    <div className='pricing__options'>
      <div className='pricing__option'>
        <img className='pricing__img--placeholder' src={IconCar} alt='car-icon'/>
        <h3>COMPACT / SEDAN</h3>
        <span className='price'>$130</span>
      </div>
      <div className='pricing__option'>
        <img className='pricing__img--placeholder' src={IconSUV} alt='suv-icon'/>
        <h3>SUV-SIZED</h3>
        <span className='price'>$160</span>
      </div>
      <div className='pricing__option'>
        <img className='pricing__img--placeholder' src={IconTruck} alt='truck-icon'/>
        <h3>TRUCKS / LARGER</h3>
        <span className='price'>$180 +</span>
      </div>
    </div>
    <span className='pricing__dirty'>* Excessively dirty vehicles will cost an extra $50 for each additional hour</span>
    <button className='pricing__cta'>SCHEDULE NOW</button>
  </div>)
}
export default Pricing;
