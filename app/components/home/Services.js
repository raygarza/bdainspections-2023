'use client';
import { useEffect, useState, useId} from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { Container } from '../utilities/Container'

import screenshotContacts from '../../../public/img/screenshots/contacts.png'
import screenshotInventory from '../../../public/img/screenshots/inventory.png'
import screenshotProfitLoss from '../../../public/img/screenshots/profit-loss.png'

const features = [
  {
    name: 'Residential',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quos?',
    description:
      'We have all your inspection needs covered. All of our staff are friendly and knowledgeable because we know what its like to be in your shoes.',
    image: screenshotProfitLoss,
    servicelist: ["Residential/Home", "New Construction", "Pre-listing","Townhomes/Condos"],
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1="11.5"
              y1={18}
              x2={36}
              y2="15.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#6692F1" />
            </linearGradient>
          </defs>
          <path
            d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
            stroke={`url(#${id})`}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )
    },
  },
  {
    name: 'Commercial',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quos? ',
    description:
      'We want you to know just how special you and your project are to us, so we do our very best to ensure that you and your needs always come first.',
    image: screenshotInventory,
    servicelist: ["Residential/Home", "New Construction", "Pre-listing","Townhomes/Condos"],
    icon: function InventoryIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
        </>
      )
    },
  },
  {
    name: 'Pre-Listing',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quos?',
    description:
      "We've got all your inspection needs covered. All of our staff are friendly and knowledgeable because we know what it's like to be in your shoes.",
    image: screenshotContacts,
    servicelist: ["Residential/Home", "New Construction", "Pre-listing","Townhomes/Condos"],
    icon: function ContactsIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </>
      )
    },
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-[#723639]' : 'bg-slate-500'
        )}
      > 
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-[#723639]' : 'text-slate-600'
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden rounded-lg">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-gray-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
            <div className="w-full overflow-hidden select-none  rounded-xl bg-white shadow-lg shadow-gray-900/5 ring-1 ring-gray-500/10">
                    <div className='py-10 px-10'>
                    <h1 className='font-semibold text-2xl text-gray-700'>{feature.name} Services</h1>
                    <p className='text-gray-600 mb-6 mt-2'>{feature.description}</p>
                    
                    
                    <ul className='space-y-1.5 mt-4'>
                     {feature.servicelist.map((listitem) => (

                        <div className='flex space-x-2'>
                          <CheckCircleIcon width={20} />
                          <li >  {listitem}</li>
                        </div>
                       
                     
                     ))}
                    </ul>
                    </div>                  
                  </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block ">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-gray-200 px-14 py-16 xl:px-16 rounded-xl">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.name}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60'
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[40rem] overflow-hidden select-none  rounded-xl bg-white shadow-lg shadow-gray-900/5 ring-1 ring-gray-500/10">
                    <div className='py-10 px-10'>
                    <h1 className='font-semibold text-2xl text-gray-700'>{feature.name} Services</h1>
                    <p className='text-gray-600 mb-6 mt-2'>{feature.description}</p>
                    
                    
                    <ul className='space-y-1.5 mt-4'>
                     {feature.servicelist.map((listitem) => (

                        <div className='flex space-x-2'>
                          <CheckCircleIcon width={20} />
                          <li >  {listitem}</li>
                        </div>
                       
                     
                     ))}
                    </ul>
                    </div>                  
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

export default function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-4xl md:text-center ">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
          We offer a variety of Services. Here are a few..
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reiciendis cum earum eveniet optio dolorem.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
