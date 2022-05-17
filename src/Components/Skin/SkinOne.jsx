import ChoiceCard from '.././ChoiceCard';
import ProceedTemplate from '.././ProceedTemplate';
import { useState,useEffect } from 'react';
import ImageCard from '../ImageCard';

const SkinOne = () => {
  const [skin_concern,Set_skin_concern] = 
  useState(window.localStorage.getItem('skin_concern') || 'Open pores')

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  useEffect(()=>{
    window.localStorage.setItem('skin_concern',skin_concern)
  },[skin_concern])

  const handleClick = (choice) => {
    Set_skin_concern(choice)
  }
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
              <ImageCard/>    
            </div>
            <div className='assessment'>
              <h5>Please select your skin concern </h5>
              <div className='scroll-div'>
                <ChoiceCard 
                  clickHandler={handleClick} noImage="true" choice={skin_concern} text="Open pores"/>
                <ChoiceCard 
                  clickHandler={handleClick} noImage="true" choice={skin_concern}  text="Pigmentation"/>
                <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={skin_concern}  text="Active Acne"/>
                <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={skin_concern}  text="Aging"/>
                <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={skin_concern}  text="Dark circles"/>
                <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={skin_concern}  text="Acne marks & spots"/>
                <ChoiceCard 
                clickHandler={handleClick} noImage="true" choice={skin_concern}  text="Dull Skin"/>
              </div>
               {/* <div className='optional-input' style={{display:"flex"
              }}> */}
                  {/* <ChoiceCard 
                  clickHandler={handleClick} noImage="true" choice={skin_concern}  text="Others"/>
                  <input className='input' style={{height:"65px"}} disabled={skin_concern != "Others"} type="text" placeholder='Specify the issue' /> */}
               {/* </div> */}
            </div>
        </div>
        <ProceedTemplate conditionMet="true" text="Proceed" choice={"skin-1"} backLink="user-details"/>
    </>
  )
}

export default SkinOne