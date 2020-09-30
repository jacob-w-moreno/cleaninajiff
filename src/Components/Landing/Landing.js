import React, {useState} from 'react';
import Header from '../Header/Header';
import Intro from './Intro/Intro';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import Contact from './About/About';
import Pricing from './Pricing/Pricing';
import Schedule from './Schedule/Schedule';
import Schedule2 from './Schedule/Schedule2';
import Scheduled from './Schedule/Scheduled';

const Landing = (props) => {
  const [schedule, setSchedule] = useState(false);
  const [scheduled, setScheduled] = useState(false);

  const schedulePopup = schedule
    ? <Schedule2 scheduleFN={setSchedule} scheduledFN={setScheduled}/>
    : null;

  const scheduledPopup = scheduled
    ? <Scheduled/>
    : null;

  return (<div>
    {schedulePopup}
    {scheduledPopup}
    <Header scheduleFN={setSchedule}/>
    <Intro scheduleFN={setSchedule}/>
    <Services/>
    <Pricing scheduleFN={setSchedule}/>
    <Testimonials/>
    <Contact/>
  </div>)
}
export default Landing;
