import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState,useEffect } from 'react'; 
import '../../css/BeardTwo.css'
import ImageCard from '../ImageCard';

const BeardTwo = () => {
  const [looking_for,Set_looking_for] = useState(window.localStorage.getItem('looking_for') || 'Beard Growth')
  const [trim_beard,Set_trim_beard] = useState(window.localStorage.getItem('trim_beard') || 'I generally shave my beard')
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    window.localStorage.setItem('looking_for',looking_for);
    window.localStorage.setItem('trim_beard',trim_beard);
    
  }, [trim_beard,looking_for])
  
  const handleClickOne = (choice) => {
    Set_looking_for(choice)
  }
  const handleClickTwo = (choice) => {
    Set_trim_beard(choice)
  }
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment-container'>
                <div className=''>
                  <h5>What exactly are you looking for?</h5>
                      <ChoiceCard 
                          clickHandler={handleClickOne} noImage="true" choice={looking_for} text="Beard Growth"/>
                      <ChoiceCard 
                          clickHandler={handleClickOne} noImage="true" choice={looking_for}  text="Beard Care"/>
                  </div>
                <div className=''>
                  <h5>How do you trim your beard?</h5>
                    <ChoiceCard 
                        clickHandler={handleClickTwo} noImage="true" choice={trim_beard} text="I generally shave my beard"/>
                    <ChoiceCard 
                        clickHandler={handleClickTwo} noImage="true" choice={trim_beard}  text="I use a trimmer to shape it up"/>
                </div>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"beard-2"} backLink="beard" conditionMet="true"/>
    </>
  )
}

export default BeardTwo