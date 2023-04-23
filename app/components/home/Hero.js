'use client';
import React from 'react'
import Image from 'next/image'
import teamphoto from '../../../public/img/headshots/teamphoto.jpg'
import NavbarPill from '../utilities/NavbarPill'
  
export default function Hero() {
  return (
    <section id='hero' className="max-w-7xl m-auto ">

    <div className="relative isolate overflow-hidden bg-[#f9f9f9] pt-2 sm:pt-10">
   <div
     className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right  skew-x-[-30deg]  shadow-2xl/50  ring-1 ring-[#65303397]/10 sm:-mr-80 lg:-mr-96"
     aria-hidden="true"
   />
  
   <div className="mx-auto max-w-7xl px-6 py-4 sm:py-10 lg:px-8 ">
   <NavbarPill className='mb-6'/>
     <div className="mx-auto max-w-2xl pt-2 lg:mx-0 lg:grid lg:max-w-none  lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
       <p className="max-w-2xl sm:max-w-3xl text-3xl sm:text-[2.8rem] font-bold sm:font-extrabold  leading-[2.5rem] sm:leading-[3.5rem]  text-gray-800 lg:col-span-2 xl:col-auto"> 
         Your Go-To Home Inspection Service In <span className='font-extrabold text-[#653033]'>Lake Charles, La</span>
       </p>
       <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
         <p className="text-lg leading-8 text-gray-600">
           With over 200  five-star google Reviws, we are Lake Charles' premier Property Inspection Company 
         </p>
         <div className="mt-10 flex items-center gap-x-6">
           <a
             href="#"
             className="rounded-md bg-[#653033] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#653033] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#653033]"
           >
            Schedule Inspecton
           </a>
           <a href="#" className="text-sm font-semibold leading-6 text-gray-700">
             Read Our Blog <span aria-hidden="true">→</span>
           </a>
         </div>
       </div>
       <Image
         src={teamphoto}
         alt=""
         className="mt-10 aspect-[4/3] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-24"
       />
     </div>
    
   </div>
   
 </div> 
 </section>

  )
}
