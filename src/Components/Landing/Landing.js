import React from 'react';
import Header from '../Header/Header';
import Intro from './Intro/Intro';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Landing = (props) => {
  return (<div>
    <Header/>
    <Intro/>
    <Services/>
    <Testimonials/>
  </div>)
}
export default Landing;
