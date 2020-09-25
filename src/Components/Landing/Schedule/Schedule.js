import React from 'react';

const Schedule = (props) => {
  return (<div className='schedule'>
    <div className='schedule__inner'>
      <button className='schedule__exit' onClick={()=>props.scheduleFN(false)}>X</button>
      <h3>Schedule Your Appointment</h3>
      <span>name</span>
      <input/>
      <span>email</span>
      <input/>
      <span>phone</span>
      <input/>
    </div>
  </div>)
}
export default Schedule
