import React, {useState} from 'react';
import Header from '../Header/Header';
import Intro from './Intro/Intro';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';
import Pricing from './Pricing/Pricing';
import Schedule from './Schedule/Schedule';

const Landing = (props) => {
  const [schedule, setSchedule] = useState(true);

  const schedulePopup = schedule
    ? <Schedule scheduleFN={setSchedule}/>
    : null;

  return (<div>
    {schedulePopup}
    <Header scheduleFN={setSchedule}/>
    <Intro scheduleFN={setSchedule}/>
    <Services/>
    <Pricing/>
    {/* <Testimonials/> */}
    {/* <Contact/> */}
  </div>)
}
export default Landing;
