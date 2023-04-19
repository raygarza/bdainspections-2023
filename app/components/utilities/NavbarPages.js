'use client';

import React from 'react';
import Link from 'next/link';
import NavbarPill from './NavbarPill';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

import SearchBundle from './SearchBundle';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function NavbarPages() {
	return (
		<div>
			<Disclosure
				as='nav'
				className='bg-white shadow '
			>
				{({ open }) => (
					<>
						<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
							<div className='flex h-20 '>
								{/* left side of nav */}
								<div className='flex grow'>
									{/* logo - desktop and mobile version */}
									<div className='flex grow space-x-2 pr-10 items-center'>
										<Link href='/'>
											<div className='flex grow-0 sm:space-x-8'>
												{/* <img
														className='hidden h-8 w-auto lg:block'
														src='https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600'
														alt='Your Company'
													/> */}
												<div className='my-auto font-semibold text-xl'>
													Cool Logo
												</div>
											</div>
										</Link>
										<div className='grow'>
											<SearchBundle />
										</div>
									</div>
								</div>

								{/* right side of nav */}
								<div className='sm:flex sm:space-x-8'>
									{/* Nav Links */}
									<div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
										{/* Current: "border-blue-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
										<Link
											href='/zipcodes'
											className='inline-flex items-center border-b-[4px] border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 '
										>
											Zip Codes
										</Link>
										<Link
											href='/areacodes'
											className='inline-flex items-center border-b-[4px] border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
										>
											Area Codes
										</Link>
										<Link
											href='/timezones'
											className='inline-flex items-center border-b-[4px] border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
										>
											Time Zones
										</Link>
										<Link
											href='/about'
											className='inline-flex items-center border-b-[4px] border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
										>
											About
										</Link>
									</div>
								</div>

								{/* Mobile buttons */}
								<div className='-mr-2 flex items-center sm:hidden'>
									{/* Mobile menu button */}
									<Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-100 hover:text-gray-900 duration-300'>
										<span className='sr-only'>Open main menu</span>
										{open ? (
											<XMarkIcon
												className='block h-6 w-6'
												aria-hidden='true'
											/>
										) : (
											<Bars3Icon
												className='block h-6 w-6'
												aria-hidden='true'
											/>
										)}
									</Disclosure.Button>
								</div>
							</div>
						</div>

						{/* mobile panel */}
						<Disclosure.Panel className='sm:hidden'>
							{/* nav buttons */}
							<div className='space-y-1 pb-3 pt-2'>
								{/* Current: "bg-blue-50 border-blue-500 text-blue-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
								<Disclosure.Button
									as='Link'
									href='/zipcodes'
									className='block border-l-4 border-blue-500 bg-blue-50 py-2 pl-3 pr-4 text-base font-medium text-blue-700'
								>
									Zip Codes
								</Disclosure.Button>
								<Disclosure.Button
									as='a'
									href='/areacodes'
									className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
								>
									Area Codes
								</Disclosure.Button>
								<Disclosure.Button
									as='a'
									href='/timezones'
									className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
								>
									Time Zones
								</Disclosure.Button>
								<Disclosure.Button
									as='a'
									href='/about'
									className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
								>
									About
								</Disclosure.Button>
							</div>

							{/* profile section (profile, settings, signout, etc..) */}
							<div className='border-t border-gray-200 pb-3 pt-4'>
								<div className='flex items-center px-4'></div>
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	);
}
