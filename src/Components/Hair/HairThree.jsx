import assessmentImage from '../../images/assessment.png'
import ProceedTemplate from '.././ProceedTemplate';
import '../../css/RadioSwitch.css';
import '../../css/ChoicePage.css'
import ChoiceCard from '.././ChoiceCard';
import '../../css/BeardTwo.css'
import { useState, useEffect } from 'react';
import ImageCard from '../ImageCard'

const HairThree = () => {
  const [big_event_120_days,Set_big_event_120_days] = useState(window.localStorage.getItem('big_event_120_days') || 'Yes');

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  useEffect(()=>{
    window.localStorage.setItem('big_event_120_days', big_event_120_days );
  },[big_event_120_days])

//   const selectStyle = {
//     backgroundColor: "#FF8277",
//     color: "white",
//     borderRadius: "5px"
//   }

//   const deselectStyle = {
//     background: "#FBFDFE",
//     border: "1px solid #CACACA",
//     boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)",
//     borderRadius: "5px",
//   }

  const handleClickOne = (choice) => {
    Set_big_event_120_days(choice)
  }

  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
            <ImageCard/>
            </div>  
            {/* <div className='assessment'>
                <div className='radio-switch'>
                    <div className='heading'>
                    Does anyone in your family have hair loss? 
                    </div>
                    <div className='switch-container'>
                        <div className='switch' style={ (family_hair_loss == 'Yes' ) ? selectStyle : deselectStyle   }
                        onClick={() => Set_family_hair_loss('Yes')}>
                            Yes
                        </div>
                        <div className='switch' 
                            style={ (family_hair_loss == 'No' ) ? selectStyle : deselectStyle }
                        onClick={() => Set_family_hair_loss('No')}>
                            No
                        </div>
                    </div>
                     
                    <div className='heading'>
                    Do you have any past allergic reactions to medicines? 
                    </div>
                    <div className='switch-container'>
                        <div className='switch'  
                            style={ past_allergy == 'Yes' ? selectStyle : deselectStyle   }
                            onClick={() => Set_past_allergy('Yes')}>
                                Yes
                            </div>
                            <div className='switch' 
                                style={ past_allergy == 'No' ? selectStyle : deselectStyle  }
                            onClick={() => Set_past_allergy('No')}>
                                No
                        </div>
                    </div>
                    <div className='heading'>
                    Do you have any big events coming up in next 120 days? 
                    </div>
                    <div className='switch-container'>
                        <div className='switch'  
                            style={ (big_event_120_days == 'Yes') ? selectStyle : deselectStyle  }
                            onClick={() => Set_big_event_120_days('Yes')}>
                                Yes
                            </div>
                            <div className='switch' 
                                style={ (big_event_120_days == 'No') ? selectStyle : deselectStyle  }
                            onClick={() => Set_big_event_120_days('No')}>
                            No
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='assessment-container'>
                <div className=''>
                  <h5>Do you have any big events coming up in next 120 days?</h5>
                      <ChoiceCard 
                          clickHandler={handleClickOne} noImage="true" choice={big_event_120_days} text="Yes"/>
                      <ChoiceCard 
                          clickHandler={handleClickOne} noImage="true" choice={big_event_120_days}  text="No"/>
                  </div>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={'appointment'} backLink="hairfall-1" conditionMet="true"/>
    </>
  )
}

export default HairThree