import assessmentImage from '../../images/assessment.png'
import '../../css/RadioSwitch.css';
import ChoiceCard from '.././ChoiceCard';
import '../../css/BeardTwo.css'
import ProceedTemplate from '.././ProceedTemplate';
import { useState, useEffect } from 'react';
import ImageCard from '../ImageCard';

const PerformanceFive = () => {
  const [cramps_tiredness,Set_cramps_tiredness] = 
  useState(window.localStorage.getItem('cramps_tiredness') || 'No')
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(()=>{
    window.localStorage.setItem('cramps_tiredness',cramps_tiredness)
  },[cramps_tiredness])

  const selectStyle = {
    background: "#FF8277",
    color: "white",
    borderRadius: "5px"
  }

  const deselectStyle = {
    background: "#FBFDFE",
    border: "1px solid #CACACA",
    boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
  }

  const handleClickOne = (choice) => {
    Set_cramps_tiredness(choice)
  }

  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            {/* <div className='assessment'>
              <h5>Do you experience any cramps or tiredness while performing?</h5>
              <div className='switch-container'>
                    <div className='switch' name="hairLoss" 
                    style={ (cramps_tiredness == "Yes") ? selectStyle : deselectStyle  }
                    onClick={() => Set_cramps_tiredness("Yes")}>
                        Yes
                    </div>
                    <div className='switch' 
                        style={ (cramps_tiredness == 'No') ? selectStyle: deselectStyle  }
                    onClick={() => Set_cramps_tiredness("No")}>
                        No
                    </div>
                </div>
            </div> */}
            <div className='assessment-container'>
                <div className=''>
                  <h5>Do you experience any cramps or tiredness while performing?? </h5>
                      <ChoiceCard 
                          clickHandler={handleClickOne} noImage="true" choice={cramps_tiredness} text="Yes"/>
                      <ChoiceCard 
                          clickHandler={handleClickOne} noImage="true" choice={cramps_tiredness}  text="No"/>
                  </div>
            </div>
        </div>
        <ProceedTemplate text="Proceed" conditionMet="true" choice={"appointment"} backLink="performance-3"/>
    </>
  )
}

export default PerformanceFive