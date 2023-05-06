
import React from "react"
import Hero from "./components/home/Hero"
import CustomerService from "./components/home/CustomerService"
import Services from "./components/home/Services"
import GreenReviews from "./components/home/GreenReviews"

export default function Homepage() {
  return (
    <main>
      <div className='bg-white'>
         <Hero/>
      </div>
     
      
  
      
      

      {/* <Services/> */}
      <GreenReviews/>
      <CustomerService/>
    </main>
      
  )
}
