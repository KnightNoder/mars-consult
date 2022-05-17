import Header from "./Header"
import logo from '../images/mars-logo.png'
import doctor  from '../images/doctor-small.png'
import phone from '../images/call.png'
import productReco_1 from '../images/product-reco-1.png';
import productReco_2 from '../images/product-reco-2.png';
import GenericButton from './GenericButton';
import { InlineWidget } from "react-calendly";
import '../css/Recommendation.css'

const Recommendation = ({category}) => {
  return (
    <>
        <Header/>
        <div className="recommendation-section">
            <div className="doctor-info">
                <div className="logo">
                    <img src={logo} className='image' alt="" />
                </div>  
                <div className="details">
                    <div className="image-section">
                        <img src={doctor} className='image' alt="" />
                    </div>
                    <div className="name-designation">
                        <div className="name">
                            Dr. Sudha Nanda
                        </div>
                        <div className="designation">
                            MBBS
                        </div>
                    </div>
                </div>
                <h2>
                    Audio Consultation
                </h2>
                <div className="details" style={{marginTop:"10%"}}> 
                    <div className="image-section">
                        <img src={phone} className='image-call' alt="" />
                    </div>
                    <div className="name-designation">
                        <div className="booking" style={{color: "#12B435"}}>
                            Booking confirmed
                        </div>
                        <div className="booking">
                            Date: 7 May 2022
                        </div>
                        <div className="booking">
                            Time: 12:30 p.m
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-info">
                <h3 className="shown-h3">
                    We Recommend only the best for you
                </h3>
                <h3 className="hidden-h3">
                    Our Recommendation
                </h3>
                <div className="product-card">
                    <div className="image-section">
                        <img src={productReco_1} className="image" alt="" />
                    </div>
                    <div className="details">
                        <div className="reco-1">
                            Highly Recommended
                        </div>
                        <div className="heading">
                            Complete treatment plan
                        </div>
                        <div className="subtext">
                            {/* Treats all hair concerns and improves overall hair growth */}
                        </div>
                        <div className="price">
                            Rs. 1699 <span style={{fontSize:"16px",color: "black"}}><strike>Rs. 1999</strike> </span>
                        </div>
                        <div className="buy-button">
                            <GenericButton text={"Buy Now"}/>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <div className="image-section">
                        <img src={productReco_2} className="image" style={{width:"40%",height:"70%"}} alt=""  />
                    </div>
                    <div className="details">
                        <div className="reco-2">
                            Recommended
                        </div>
                        <div className="heading">
                            Hair Care routine
                        </div>
                        <div className="subtext">
                            {/* Treats all hair concerns and improves overall hair growth */}
                        </div>
                        <div className="price">
                            Rs. 1699 <span style={{fontSize:"16px",color: "black"}}><strike>Rs. 1999</strike> </span>
                        </div>
                        <div className="buy-button">
                            <GenericButton text={"Buy Now"}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="product-card">
                <InlineWidget url="https://calendly.com/lavakumared15/appointment?month=2022-04" />
            </div> */}
        </div>
    </>
    )
}

export default Recommendation