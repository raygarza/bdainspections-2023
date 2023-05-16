'use client';
import React from 'react'
import Image from 'next/image'
import teamphoto from '../../../public/img/headshots/teamphoto.jpg'
import HeroPill from '../utilities/HeroPill'
  
export default function Hero() {
  return (
    <section id='hero' className="max-w-[100rem] m-auto px-3 sm:px-6 py-4 sm:py-8 bg-white  lg:px-8">
      <div className=' absolute h-[36rem] sm:h-[20rem] 2xl:h-[28rem] w-full  top-[110px] sm:top-32 left-0 '>
        <div className='blog-header  w-full h-full' >
        </div>
      </div>
      

    <div className="relative isolate overflow-hidden bg-white rounded-2xl shadow-lg  py-6 sm:py-0 px-6 lg:px-8   pb-8">
  
  
   <div className="mx-auto 2xl:px-10 ">
     <div className="mx-auto max-w-2xl sm:-mt-10   lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 items-center lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
       
       <div className="max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
        <HeroPill className='mb-6' title="BDA Inspections" href="/contact"/>
          <p className="max-w-2xl sm:max-w-3xl text-[1.6rem] lg:text-3xl 2xl:text-4xl pt-4 font-bold sm:font-bold leading-tight sm:leading-[3rem]  text-gray-800 lg:col-span-2 xl:col-auto"> 
          Your Go-To Home Inspection  <br className='hidden sm:block' />Service In <span className='font-extrabold text-[#653033]'>Lake Charles, La</span>
        </p>
         <p className="text-lg mt-2 leading-2 sm:leading-8 text-gray-600">
           With over 200 five-star Google Reviews, BDA Inspections is Lake Charles' premier Property Inspection Company. 
         </p>
         <div className="mt-10 flex items-center gap-3">
           <a
             href="tel:3374995872"
             className="rounded-md duration-200 bg-[#653033] hover:bg-[#823f42] border border-[#653033] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#653033]"
           >
            Schedule Inspection
           </a>
           <a href="/blog" className="text-sm font-semibold border px-3.5 py-2.5 inset-2 hover:border-gray-400 duration-200 rounded-md leading-6 text-gray-700">
             Read Blog <span aria-hidden="true">→</span>
           </a>
         </div>
       </div>
       <div className='rounded-2xl'>
         <Image
         src={teamphoto}
         alt=""
         className="mt-10 aspect-[3/2] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0  lg:p-10 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-16"
       />
       </div>
      
     </div>
    
   </div>
   
 </div> 
 </section>

  )
}
