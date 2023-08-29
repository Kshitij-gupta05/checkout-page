import React from 'react'
// import pic from "../assets/chocolate.png";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {

 // sending the user address and phone number

  // const [enterName, setEnterName] = useState("");
  // const [enterEmail, setEnterEmail] = useState("");
  // const [enterNumber, setEnterNumber] = useState("");
  // const [enterCountry, setEnterCountry] = useState("");
  // const [enterCity, setEnterCity] = useState("");
  // const [postalCode, setPostalCode] = useState("");


  // const ShippingInfo = [];
  // var userShippingAddress = {};
  // const submitHandler = (e) => {
  //     e.preventDefault();
  //     userShippingAddress = {
  //       name: enterName,
  //       email: enterEmail,
  //       phone: enterNumber,
  //       country: enterCountry,
  //       city: enterCity,
  //       postalCode: postalCode,
  //     };
  //     console.clear;
  //     ShippingInfo.push(userShippingAddress);
  //     console.log(ShippingInfo);

  //   };

  const location = useLocation();
    console.log(location);

    const Name= location.state.name;
    const quant= location.state.quantity;
    const Amount= location.state.amount;
    const price = location.state.itemPrice;

  console.log(Name,quant,Amount,price);


    const checkout = () => {
      fetch("http://localhost:5000/create-checkout-session", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        mode:"cors",
        body: JSON.stringify({
          items: [
            {id:1, quantity: quant, price: price, name: Name}
          ]
        })
      })
      .then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
      })
      .then(({url})=>{
        window.location = url
      })
      .catch(e => {
        console.log(e.error)
      })
    }
  
  return (
    <div className='w-full mx-auto'>
      <button onClick={checkout} className='bg-green-400 text-white px-8 py-4 rounded-md text-2xl 
              font-semibold'
              >Checkout
              </button>
    </div>
  )
}

export default Home
