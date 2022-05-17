import Header from "./Header"
import logo from '../images/mars-logo.png'
import doctor  from '../images/doctor-small.png'
import phone from '../images/call.png'
import productReco_1 from '../images/product-reco-1.png';
import productReco_2 from '../images/product-reco-2.png';
import GenericButton from './GenericButton';
import { InlineWidget } from "react-calendly";
import '../css/Recommendation.css'

const Recommendation = () => {
  return (
    <>
        <Header/>
        <div className="recommendation-section">
            <div className="doctor-info">
                <div className="logo">
                    <img src={logo} className='image' alt=""  />
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
                        <img src={phone} style={{height:"70%",width:"70%"}} className='image-call' alt="" />
                    </div>
                    <div className="name-designation">
                        <div className="booking" style={{fontSize:"15px"}}>
                            Call details will be provided after cofirmation
                        </div>
                        <div className="booking">
                        </div>
                        <div className="booking">
                        </div>
                    </div>
                </div>
                <div className="availability-text">
                    Please book your appointment based on the availablity.
                </div>
            </div>
            <div className="product-info">
                <InlineWidget url="https://calendly.com/lavakumared15/appointment?month=2022-04" />
            </div>
        </div>
    </>
    )
}

export default Recommendation