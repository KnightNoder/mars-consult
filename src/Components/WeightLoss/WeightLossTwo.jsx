import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState, useEffect } from 'react';
import ImageCard from '../ImageCard';

const WeightLossTwo = () => {
  const [meals_a_day,Set_meals_a_day] = useState(window.localStorage.getItem('meals_a_day') || '3 times')

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(()=>{
    window.localStorage.setItem('meals_a_day',meals_a_day)
  },[meals_a_day])

  const handleClick = (choice) => {
    Set_meals_a_day(choice)
  }
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>How often do you eat meals in a day? </h5>
              <h5>(including tea, coffee, fruits, salads, snacks)  </h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={meals_a_day} text="Greater than 6 times"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={meals_a_day}  text="4-6 times"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={meals_a_day}  text="3 times"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={meals_a_day}  text="Less than 3 times"/>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"weightloss-2"} backLink="weightloss" conditionMet="true"/>
    </>
  )
}

export default WeightLossTwo