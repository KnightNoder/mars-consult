import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState,useEffect } from 'react';
import ImageCard from '../ImageCard';

const PerformanceTwo = () => {
  const [erection_problem,Set_erection_problem] = 
  useState(window.localStorage.getItem('erection_problem') || 'No issues in maintaining erection')
  const handleClick = (choice) => {
    Set_erection_problem(choice)
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(()=>{
    window.localStorage.setItem('erection_problem',erection_problem)
  },[erection_problem])

  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>Do you have a problem getting or maintaining an erection during sex?</h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={erection_problem} text="No issues in maintaining erection"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={erection_problem}  text="Sometimes, I have issues with maintaining erection"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={erection_problem}  text="Most of the times, I have issues with getting & maintaining an erection"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"performance-2"} backLink="performance" conditionMet="true"/>
    </>
  )
}

export default PerformanceTwo