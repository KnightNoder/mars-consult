import assessmentImage from '../images/assessment.png'
import ChoiceCard from './ChoiceCard';
import ProceedTemplate from './ProceedTemplate';
import ImageCard from './ImageCard';
import { useState, useEffect } from 'react';

const Appointment = () => {
  const [appointment_type,Set_appointment_type] = useState(window.localStorage.getItem('appointment_type') ||  'Get a free consultation call')
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    window.localStorage.setItem('appointment_type',appointment_type);
  }, [appointment_type])

  const handleClick = (choice) => {
    Set_appointment_type(choice)
  }
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
              <ImageCard/>    
            </div>
            <div className='assessment'>
              <h5>Hey! Your detailed case has been recorded. Wasn’t that easy?</h5>
              <p style={{fontSize:"18px", marginTop:"3%"}}>How would you like us to respond?</p>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={appointment_type} text="Get a free consultation call"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={appointment_type}  text="Proceed without consultation"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"callback"} directNavigate="true"
         navigateTo="-1" conditionMet="true"/>
    </>
  )
}

export default Appointment