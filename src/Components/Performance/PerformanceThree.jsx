import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState, useEffect } from 'react';
import ImageCard from '../ImageCard';

const PerformanceThree = () => {
  const [ejaculation_case,Set_ejaculation_case] = 
  useState(window.localStorage.getItem('ejaculation_case') || 'No issues with ejaculation')
  const handleClick = (choice) => {
    Set_ejaculation_case(choice)
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(()=>{
    window.localStorage.setItem('ejaculation_case',ejaculation_case)
  },[ejaculation_case])
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>Which of the following is the case with you?</h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={ejaculation_case} text="Ejaculate too early during performance"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={ejaculation_case}  text="No issues with ejaculation"/>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"performance-3"} backLink="performance-1"/>
    </>
  )
}

export default PerformanceThree