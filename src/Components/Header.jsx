import React from 'react'
import '../css/Header.css'
const Header = () => {
  return (
    <div className='header-block'>
        <div className='heading'>
            Know what's right for you
        </div>
        <div className='header-text'>
            Get your self assessment done,
            Book an appointment with our expert, get a personalized treatment plan  
        </div>
        <div>
            <img className='img-doctor' src="https://cdn.shopify.com/s/files/1/0638/1391/0746/files/Doctor.png?v=1649252836" alt="" />
        </div>
    </div>
  )
}

export default Header