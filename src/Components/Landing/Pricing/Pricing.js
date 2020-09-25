import React from 'react';

const Pricing = (props) => {
  return(<div className='pricing'>
    <h2>PRICING</h2>
    <h3>Interior & Exterior</h3>
    <div className='pricing__options'>
      <div className='pricing__option'>
        <div className='pricing__img--placeholder'/>
        <h3>COMPACT / SEDAN</h3>
        <span className='price'>$130</span>
      </div>
      <div className='pricing__option'>
        <div className='pricing__img--placeholder'/>
        <h3>SUV-SIZED</h3>
        <span className='price'>$160</span>
      </div>
      <div className='pricing__option'>
        <div className='pricing__img--placeholder'/>
        <h3>TRUCKS / LARGER</h3>
        <span className='price'>$180 +</span>
      </div>
    </div>
    <span className='pricing__dirty'>* Excessively dirty vehicles will cost an extra $50 for each additional hour</span>
  </div>)
}
export default Pricing;
