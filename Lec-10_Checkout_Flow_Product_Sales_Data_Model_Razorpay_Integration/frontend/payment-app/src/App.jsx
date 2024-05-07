import { useState } from 'react'
import './App.css';
import Axios from 'axios';

function App() {

  /**
  1. create a razorpay button
  2. Load the checkout.js script dynamically.
  3. on click, we need to open the UI of razorpay for making payment and capturing the events
  */

  const loadScript = () => {

    return new Promise((resolve, reject)=>{

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';

      script.onload = resolve;
      script.onerror = reject;

      document.body.appendChild(script);

    })

  }

  const displayRazorpay = async() =>{

    await loadScript();

    const resp = await Axios.post('http://localhost:3000/checkout', {method: 'post'});
    console.log(resp.data); 
    const {id, amount, currency } = resp.data.data;
    console.log(amount);
    let options = {
        "key": 'rzp_test_ndW2yMfgPfxNhX', // Enter the Key ID generated from the Dashboard
        "amount": amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": currency,
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        "prefill": {
            "name": "Ashwani Rajput",
            "email": "ashwin.rajput87@gmail.com",
            "contact": "9810214080"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };

    var razorpayInst = new Razorpay(options);

    razorpayInst.open();


  }



  return (
    <>
      <button id="rzp-btn" onClick={displayRazorpay}>Pay with Razorpay</button>
    </>
  )
}

export default App
