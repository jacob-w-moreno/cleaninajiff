import React from 'react';

const Schedule = (props) => {
  return (<div className='schedule'>
    <div className='schedule__inner'>
      <h3>Schedule Your Appointment</h3>
      <form>
        <span>name</span>
        <input/>
        <span>email</span>
        <input/>
        <span>phone</span>
        <input/>
        <div className='schedule__buttons'>
          <button className='schedule__button'>SUBMIT</button>
          <button className='schedule__button schedule__cancel' onClick={()=>props.scheduleFN(false)}>CANCEL</button>
        </div>
      </form>
    </div>
  </div>)
}
export default Schedule
