import React, {useState} from 'react';
// import axios from 'axios';

import Car from '../../Images/IconCar.png';
import SUV from '../../Images/IconSUV.png';
import Truck from '../../Images/IconTruck.png';

const Schedule = (props) => {

  const [name, setName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [info, setInfo] = useState('');

  // const submit = () => { console.log('running'); axios
  //   .post('/api/email', {name, vehicle, city, email, info})
  //   .then((res) =>{
  //     props.scheduledFN(true)
  //     setTimeout(() => props.scheduledFN(false), 5000)
  //     props.scheduleFN(false);
  //     console.log('WIN:', res);
  //   })
  //   .catch(()=> console.log('FAIL'))
  // }

  const submit = () => {
    console.log('Email sent successfully.')
    props.scheduleFN(false);
    props.scheduledFN(true);
    setTimeout(()=>props.scheduledFN(false), 5000);
  }

  return (<div className='schedule'>
    <div className='schedule__inner'>
      <h3>Schedule an Appointment</h3>
      <div className='form'>
        <span>Name</span>
        <input onChange={(e)=>setName(e.target.value)}/>
        <span>Type of Vehicle</span>
        <div className='schedule__icon-containers'>
          <div className={vehicle==='Compact / Car'? 'active schedule__icon-container':'schedule__icon-container'} onClick={()=>setVehicle('Compact / Car')}>
            <img className='schedule__icon' src={Car} alt='car-icon'/>
            <span>Compact / Car</span>
          </div>
          <div className={vehicle==='SUV-Sized'? 'active schedule__icon-container':'schedule__icon-container'} onClick={()=>setVehicle('SUV-Sized')}>
            <img className='schedule__icon' src={SUV} alt='SUV-icon'/>
            <span>SUV-Sized</span>
          </div>
          <div className={vehicle==='Truck / Larger'? 'active schedule__icon-container':'schedule__icon-container'} onClick={()=>setVehicle('Truck / Larger')}>
            <img className='schedule__icon' src={Truck} alt='truck-icon'/>
            <span>Truck / Larger</span>
          </div>
        </div>
        <span>City</span>
        <input onChange={(e)=>setCity(e.target.value)}/>
        <span>Email</span>
        <input onChange={(e)=>setEmail(e.target.value)}/>
        <span>Additional Information</span>
        <input onChange={(e)=>setInfo(e.target.value)}/>
        <div className='schedule__buttons'>
          <button className='schedule__button' onClick={()=>submit()}>SUBMIT</button>
          <button className='schedule__button schedule__cancel' onClick={()=>props.scheduleFN(false)}>CANCEL</button>
        </div>
      </div>
    </div>
  </div>)
}
export default Schedule
