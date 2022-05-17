import ChoiceCard from '../ChoiceCard';
import ProceedTemplate from '../ProceedTemplate';
import { useState,useEffect } from 'react';
import ImageCard from '../ImageCard';

const SkinTwo = () => {
  const [skin_texture,Set_skin_texture] = 
  useState(window.localStorage.getItem('skin_texture') || 'Oily')
  
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  useEffect(()=>{
    window.localStorage.setItem('skin_texture',skin_texture)
  },[skin_texture])

  const handleClick = (choice) => {
    Set_skin_texture(choice)
  }
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
              <ImageCard/>    
            </div>
            <div className='assessment'>
              <h5>Please select your skin texture </h5>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={skin_texture} text="Oily"/>
              <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={skin_texture}  text="Dry"/>
              <ChoiceCard 
               clickHandler={handleClick} noImage="true" choice={skin_texture}  text="Combined "/>
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-2"} backLink="skin"/>
    </>
  )
}

export default SkinTwo