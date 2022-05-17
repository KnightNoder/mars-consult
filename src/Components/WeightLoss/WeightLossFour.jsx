import assessmentImage from '../../images/assessment.png'
import CheckBoxCard from '.././CheckBoxCard';
import ProceedTemplate from '.././ProceedTemplate';
import '../../css/WeightLossFour.css';
import { useEffect, useState } from 'react';
import ImageCard from '../ImageCard'

const WeightLossFour = () => {
  const [check_list,Set_check_list] = useState(JSON.parse(window.localStorage.getItem('check_list')) || {
    "Cholestrol": true,
    "Thyroid":false,
    "Heart":false,
    "Diabetes": false,
    "Kidney":false,
    "No_such_problems": false,
    "Others": false,
    "Others_input":""
  })


  const changeHandler = (name,value) =>{
    
    Set_check_list((prevState) =>{
      if(name == 'No such problems'){
        name = 'No_such_problems'
      }
      if(name == "No_such_problems" && value == false){
        return {
          "Cholestrol": false,
          "Thyroid":false,
          "Heart":false,
          "Diabetes": false,
          "Kidney":false,
          "No_such_problems": true,
          "Others": false,
          "Others_input":""
        }
      } else {
        return {...prevState,[name]: !value,"No_such_problems":false}
      }
    })
  }

  useEffect(()=>{
    window.localStorage.setItem('check_list',JSON.stringify(check_list));
  },
  [check_list]
  )

  const inputHandler = (e) => {
    Set_check_list((prevState) =>{
      return {...prevState,[e.target.name]: e.target.value}
    })
  }
  return (
    <>
        <div className="choice-container">
            <div className='assessment-image'>
                <ImageCard/>
            </div>
            <div className='assessment'>
              <h5>Do you have any pre-existing problems? </h5>
              <div className={` error-text-checkbox ${!!Object.values(check_list).filter((x)=> x).length ? "not-visible": "visible"}`}>Please answer the question to proceed</div>
              <div className='scroll-div'>
                <CheckBoxCard name="Cholestrol" value={check_list.Cholestrol} onChange={(name,value)=>changeHandler(name,value)}  text="Cholestrol"/>
                <CheckBoxCard name="Thyroid" value={check_list.Thyroid} onChange={(name,value)=>changeHandler(name,value)} text="Thyroid"/>
                <CheckBoxCard name="Heart" onChange={(name,value)=>changeHandler(name,value)} value={check_list.Heart} text="Heart"/>
                <CheckBoxCard name="Diabetes" onChange={(name,value)=>changeHandler(name,value)} value={check_list.Diabetes} text="Diabetes"/>
                <CheckBoxCard name="Kidney" onChange={(name,value)=>changeHandler(name,value)} value={check_list.Kidney} text="Kidney"/>
                <CheckBoxCard name="No_such_problems" onChange={(name,value)=>changeHandler(name,value)} value={check_list.No_such_problems} text="No such problems"/>
                {/* <div className='optional-input' style={{display:"flex", justifyContent: "center",
                  alignItems:"center"
                }}> */}
                <CheckBoxCard name="Others" onChange={(name,value)=>changeHandler(name,value)} value={check_list.Others} text="Others"/>
                <input className='input' name="Others_input" value={check_list.Others_input} disabled={check_list.Others != true}
                onChange={(e) => inputHandler(e)} style={{height:"65px"}} type="text" placeholder='Specify the issue' autoComplete='off' />
                {/* </div> */}
              </div>
            </div>
        </div>
        <ProceedTemplate text="Proceed" choice={"appointment"} vibrateText={()=>{}} backLink="weightloss-2" conditionMet={!!Object.values(check_list).filter((x)=> x).length}/>
    </>
  )
}

export default WeightLossFour