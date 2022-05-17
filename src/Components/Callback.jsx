import Header from "./Header"
import logo from '../images/mars-logo.png'
import doctor  from '../images/doctor-small.png'
import phone from '../images/call.png'
import GenericButton from './GenericButton';
import '../css/Recommendation.css'
import { useEffect, useState } from "react";
const {getCategory,getProductId,getSendMailData} = require('./common/utils')
const axios = require('axios');

const Callback = () => {
    const [image,Set_image] =  useState('');
    const [price,Set_price] = useState('');
    const [compare_at_price,Set_compare_at_price] = useState('')
    const [title,Set_title] = useState('');
    const [product_link,Set_link]= useState('');
    const [call_customer,Set_call_customer] = useState(false)
    const [bmi,Set_bmi] = useState('')
    const [category, Set_catgory] = useState('')
    // const [product_subtext,Set_product_subtext] = useState('')
    
  useEffect(()=>{
    const choice = window.localStorage.getItem('choice');
    Set_catgory(choice)
    const category =  getCategory(choice);
    const product_id = getProductId(choice);
    const weight = parseInt(window.localStorage.getItem("weight"));
    const height = parseInt(window.localStorage.getItem("height"));
    const BMI = parseInt((weight * 10000) / (height * height));
    Set_bmi(BMI)
    Set_call_customer(window.localStorage.getItem('appointment_type') == 'Get a free consultation call')
    const getData = async () => {
        var config = {
            method: 'get',
            url: `https://${process.env.REACT_APP_GET_PRODUCTS_BASE_URL}/${category}/products.json`,
            headers: { 
              'Content-Type': 'application/json'
            }
        };
        await axios(config)
        .then(response => {
            const product_recommended = (response.data["products"].filter((item) => item.id == product_id));
            let product_title = product_recommended[0]["title"];
            const product_price = product_recommended[0]["variants"][0]["price"]
            const compare_price = product_recommended[0]["variants"][0]["compare_at_price"]
            const img_src = product_recommended[0]["images"][0]["src"]
            // Set_product_subtext(subtext)
            Set_title(product_title);
            Set_image(img_src)
            Set_price(product_price)
            Set_compare_at_price(compare_price)
            Set_link(product_recommended[0]["handle"])
        }).catch((error)=>{
            console.log(error)
        });
    }

    getData();

    const data = getSendMailData();
    const config = {
        method: 'post',
        url: `https://${process.env.REACT_APP_SEND_MAIL_API_BASE_URL}/api/device/consultation`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      axios(config).then((response) => {
        console.log('success')
      }).catch(function (error) {
        console.log(error);
      }); 

  },[])

    
  return (
    <>
        <Header/>
        <div className="recommendation-section">
            <div className="doctor-info2" style={{marginTop:"0%"}}>
                <div className="logo">
                    <img src={logo} className='image' alt="" />
                </div>  
                <div className="details2">
                    {/* <div className="image-section">
                        <img src={doctor} className='image' alt="" />
                    </div> */}
                    <div className="name-designation">
                        <div className="name">
                            Thank you for filling out the assessment!
                        </div>
                        { call_customer ? <div className="designation">
                            One of our physician’s assistants will call you shortly.
                        </div> : <div className="designation"> </div> }
                        <div className="designation">
                            {call_customer ? "Meanwhile," : ""} Check out our recommended products.
                        </div>
                    </div>
                </div>
                {/* <h2>
                    Audio Consultation
                </h2> */}
                {/* <div className="details" style={{marginTop:"10%"}}> 
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
                </div> */}
            </div>
            <div className="product-info">
                <div className="product-header">
                    <h3 className="shown-h3">
                        We Recommend only the best for you
                    </h3>
                    <h3 className="hidden-h3">
                         Our Recommendation
                    </h3>
                   { category === 'WeightLoss' ?  <div className="bmi">
                        <div className="bmi-text">
                            Your BMI
                        </div>
                        <div className="bmi-number">
                            {bmi}
                        </div> 
                    </div>: ""}
                </div>
               
                <div className="product-card">
                    <div className="image-section">
                        <img src={image} className="image" alt="Product1" srcset="" />
                    </div>
                    <div className="details">
                        <div className="reco-1">
                            Highly Recommended
                        </div>
                        <div className="heading">
                            {title}
                            {/* Completete Hair Treatment */}
                        </div>
                        {/* <div className="subtext"> */}
                            {/* {product_subtext} */}
                            {/* Treats all hair concerns and improves overall hair growth */}
                        {/* </div> */}
                        <div className="price">
                           Rs.{price} <span className="strike-text">&nbsp;&nbsp;<strike>Rs.{compare_at_price}</strike> </span>
                        </div>
                        <div className="buy-button">
                            <GenericButton productNavigate="true" productLink={product_link} radiusBottom="true" text={"Buy Now"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}




export default Callback