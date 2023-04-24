
import React from "react"
import Hero from "./components/home/Hero"
import CustomerService from "./components/home/CustomerService"
import Services from "./components/home/Services"
import GreenReviews from "./components/home/GreenReviews"

export default function Homepage() {
  return (
    <main>
      <Hero/>
      <div
        className="absolute inset-x-50 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
  
      
      <CustomerService/>

      <Services/>
      <GreenReviews/>
    </main>
      
  )
}
