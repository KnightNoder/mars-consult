import assessmentImage from '../images/assessment.png'
import ProceedTemplate from './ProceedTemplate';
import '../css/ChoicePage.css'
import '../css/BasicInfo.css'
import ImageCard from './ImageCard'
import { useState,useEffect } from 'react';

const BasicInfo = () => {
  const [nextPage,SetNextPage] = useState(window.localStorage.getItem('choice') ||'');
  const [first_name, Set_first_name] = useState('');
  const [last_name, Set_last_name] = useState('');
  const [phone_number, Set_phone_number] = useState('');
  const [email, Set_email] = useState('');
  const [vibrate_first_name,SetVibrateFirstName] = useState(false);
  const [vibrate_phone,SetVibratePhone] = useState(false);
  const [vibrate_email,SetVibrateEmail] = useState(false);
  const [email_valid,Set_email_valid] = useState(false);
  const [phone_number_valid,Set_phone_number_valid]= useState(false);

  const vibrateText = () => {
    navigator.vibrate(1000)
    SetVibrateFirstName(true)
    SetVibrateEmail(true)
    SetVibratePhone(true)
  }


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
      Set_phone_number(phone_number);
      window.localStorage.setItem('first_name',first_name)
      window.localStorage.setItem('last_name',last_name)
      window.localStorage.setItem('email',email)
      window.localStorage.setItem('phone_number',phone_number)  
  }, [first_name,last_name,email,phone_number,email])

  // console.log(first_name && email_valid && phone_number_valid,first_name,email,email_valid,phone_number_valid,'condition');
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
            <ImageCard/>
            </div>  
            <div className='assessment'>
              <h5>Fill in your basic information </h5>
              <h4>We're just getting to know you better</h4>
              <InputCard heading="First Name" placeholder="Eg. John" name="first_name" onchange={(e) => {Set_first_name(e.target.value); SetVibrateFirstName(false)}}
              value={first_name} vibrate={vibrate_first_name} errorText="Invalid input" requiredErrorText="Invalid input" required="*"  validity={first_name}/>
              <br />
              <InputCard heading="Last Name" placeholder="Eg. Doe" value={last_name} onchange={(e) => Set_last_name(e.target.value)}
              errorText="Invalid input" vibrate={true} validity={true} />
              <br />
              <InputCard heading="Phone Number"  placeholder="Eg. 9876543210" name="phone_number" value={phone_number} validity={phone_number.length == 10 && /^[0-9]+$/.test(phone_number)}
              onchange={(e) => {Set_phone_number(e.target.value);SetVibratePhone(false);}} errorText="Invalid input" requiredErrorText="Invalid input" 
               required="*" vibrate={vibrate_phone}/>
              <br />
              <InputCard heading="Email" placeholder="Eg. johndoe@ghc.health" value={email} validity={email.includes('@')}
              onchange={(e) => {Set_email(e.target.value);SetVibrateEmail(false)}} errorText="Invalid input"
               requiredErrorText="Invalid Input" required="*" vibrate={vibrate_email}/>
              <br />
            </div>
        </div>
        <ProceedTemplate  vibrate={false} vibrateText={vibrateText} text="Proceed" choice={nextPage} backLink="choice" conditionMet={first_name && email.includes('@') && (phone_number.length == 10 && /^[0-9]+$/.test(phone_number))}/> 
    </>
  )
}

const InputCard = ({heading,placeholder,requiredErrorText,value,vibrate, required,onchange,numberCheck,validity}) => {
  return (
    <>
      <h3 style={{}}>{heading} 
        <div style={{display:"inline-block",fontSize:"20px",color:"#EA2C2C", marginLeft:"3px"}} className=''>{required}
        </div>
      </h3>
      <input className='input' onChange={onchange} value={value} 
      type="text" placeholder={placeholder}/>
      <span style={ (vibrate && !validity) ? {visibility:"visible"} : {visibility:"hidden"}} className='error-text' id="two">
        {requiredErrorText}
      </span>
    </>
  )
}

export default BasicInfo
