import assessmentImage from '../../images/assessment.png'
import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState,useEffect } from 'react';
import ImageCard from '../ImageCard';

const SkinFour = () => {
  const [skin_allergy_to,Set_skin_allergy_to] = 
  useState(window.localStorage.getItem('skin_allergy_to') ||  'Vitamin C')

  useEffect(() => {
    // SetSelected(window.localStorage.getItem('wash_face_frequency'));
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    window.localStorage.setItem('skin_allergy_to', skin_allergy_to);
  }, [skin_allergy_to]);

  const handleClick = (choice) => {
    Set_skin_allergy_to(choice)
  }
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>Are you allergic to any of the ingredients </h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={skin_allergy_to} text="Vitamin C"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={skin_allergy_to}  text="Salicylic Acid"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={skin_allergy_to}  text="Retinol"/>
               <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={skin_allergy_to}  text="Niacinamide"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={skin_allergy_to}  text="Kojic Acid"/>
               <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={skin_allergy_to}  text="None"/>
            </div>
            
        </div>
        <ProceedTemplate text="Proceed"  conditionMet="true" choice={"appointment"} backLink="skin-2"/>
    </>
  )
}

export default SkinFour