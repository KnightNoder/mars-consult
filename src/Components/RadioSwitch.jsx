import Radio from '@mui/material/Radio';
import { width } from '@mui/system';
import { useState } from 'react';
import '../css/RadioSwitch.css'
import GenericButton from './GenericButton';
const RadioSwitch = ({text}) => {
  return (
    <div className='radio-switch'>
        <div className='heading'>
            {text}
        </div>
        <div className='switch-container'>
            <div className='switch' name="hairLoss" onClick={() => {}}>
                Yes
            </div>
            <div className='switch'>
                No
            </div>
        </div>
    </div>

  )
}

export default RadioSwitch