import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState, useEffect } from 'react';
import ImageCard from '../ImageCard';

const SkinThree = () => {
  const [skin_type,Set_skin_type] = 
  useState(window.localStorage.getItem('skin_type') || 'Normal')

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    window.localStorage.setItem('skin_type', skin_type);
  }, [skin_type]);
  
  const handleClick = (choice) => {
    Set_skin_type(choice)
  }
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
              <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>Please select your skin type </h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={skin_type} text="Normal"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={skin_type}  text="Sensitive skin"/>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-3"} backLink="skin-1"/>
    </>
  )
}

export default SkinThree