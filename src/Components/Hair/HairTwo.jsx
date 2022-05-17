import assessmentImage from '../../images/assessment.png'
import ProceedTemplate from '.././ProceedTemplate';
import '../../css/RadioSwitch.css';
import '../../css/ChoicePage.css'
import ChoiceCard from '.././ChoiceCard';
import '../../css/BeardTwo.css'
import { useState, useEffect } from 'react';
import ImageCard from '../ImageCard'

const HairOne = () => {
  const [family_hair_loss,Set_family_hair_loss] = useState(window.localStorage.getItem('family_hair_loss') || 'Yes');
  const [past_allergy,Set_past_allergy] = useState(window.localStorage.getItem('past_allergy') || 'Yes');

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  useEffect(() => {
    window.localStorage.setItem('family_hair_loss', family_hair_loss );
}, [family_hair_loss]);

useEffect(()=>{
    window.localStorage.setItem('past_allergy', past_allergy );
  },[past_allergy])

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
    Set_family_hair_loss(choice)
  }
  const handleClickTwo = (choice) => {
    Set_past_allergy(choice)
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
                  <h5>Does anyone in your family have hair loss? </h5>
                      <ChoiceCard 
                          clickHandler={handleClickOne} noImage="true" choice={family_hair_loss} text="Yes"/>
                      <ChoiceCard 
                          clickHandler={handleClickOne} noImage="true" choice={family_hair_loss}  text="No"/>
                  </div>
                <div className=''>
                  <h5>Do you have any past allergic reactions to medicines?</h5>
                    <ChoiceCard 
                        clickHandler={handleClickTwo} noImage="true" choice={past_allergy} text="Yes"/>
                    <ChoiceCard 
                        clickHandler={handleClickTwo} noImage="true" choice={past_allergy}  text="No"/>
                </div>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={'hairfall-2'} backLink="hairfall" conditionMet="true"/>
    </>
  )
}

export default HairOne