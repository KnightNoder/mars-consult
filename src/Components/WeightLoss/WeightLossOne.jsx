import assessmentImage from '../../images/assessment.png'
import ProceedTemplate from '.././ProceedTemplate';
import { useState,useEffect } from 'react';
import ImageCard from '../ImageCard';

const WeightLossOne = () => {
  const [height,SetHeight] = useState('')
  const [weight,SetWeight] = useState('')
  const [vibrate_height,Set_vibrate_height] = useState(false);
  const [vibrate_weight,Set_vibrate_weight] = useState(false);

  const vibrateText = () => {
    navigator.vibrate(1000)
    Set_vibrate_height(true)
    Set_vibrate_weight(true)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(()=>{
    window.localStorage.setItem('height',height);
    window.localStorage.setItem('weight',weight);
  },[height,weight])

  const heightCheck = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    SetHeight(onlyDigits);
    Set_vibrate_height(false);
  }

  const weightCheck = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    SetWeight(onlyDigits);
    Set_vibrate_weight(false);
  }
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5 style={{marginBottom:"3%"}}>Please enter your height and weight below?</h5>
              <input className='input' type="text" onChange={heightCheck} value={height} placeholder='Height(in cms)' />
              <span style={ (!height && vibrate_height) ? {visibility:"visible"} : {visibility:"hidden"}} className='error-text'>
                  Invalid input
              </span>
              <div  style={{visibility:"hidden", fontSize:"3px"}} > Dummy</div>
              <input className='input' type="text" onChange={weightCheck} value={weight} placeholder='Weight(in Kgs)' />
              <span style={ (!weight && vibrate_weight) ? {visibility:"visible"} : {visibility:"hidden"}} className='error-text'>
                Invalid input
              </span>
            </div>
        </div>
        <ProceedTemplate text="Proceed" vibrateText={vibrateText} choice={"weightloss-1"} backLink="user-details" conditionMet={height && weight}/>
    </>
  )
}

export default WeightLossOne