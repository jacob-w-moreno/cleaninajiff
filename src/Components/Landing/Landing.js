import React from 'react';
import Header from '../Header/Header';
import Intro from './Intro/Intro';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';
import Pricing from './Pricing/Pricing';

const Landing = (props) => {
  return (<div>
    <Header/>
    <Intro/>
    <Services/>
    <Pricing/>
    <Testimonials/>
    <Contact/>
  </div>)
}
export default Landing;
