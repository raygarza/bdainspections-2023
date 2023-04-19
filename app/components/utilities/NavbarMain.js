'use client';

import { useState } from 'react';

import Link from 'next/link';
import NavbarPill from './NavbarPill';
import { Fragment } from 'react';
import {
	Disclosure,
	Transition,
	Dialog,
	Menu,
	Popover,
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function NavbarMain() {
	const [open, setOpen] = useState(false);

	const navOpen = () => {
		setOpen(true);
	};
	const navClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<nav>
				<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
					<div className='flex h-20 justify-between'>
						{/* left side of nav */}
						<div className='flex'>
							{/* logo - desktop and mobile version */}

							<div className='flex space-x-4 items-center'>
								<Link href='/'>
									<div className='flex sm:space-x-8'>
										{/* Logo Goes Here */}
										<div className='my-auto font-semibold text-xl'>BDA Inspections</div>
									</div>
								</Link>
								<NavbarPill />
							</div>
						</div>

						{/* right side of nav */}
						{/* Nav Links */}
						<div className='hidden sm:ml-6 sm:flex sm:space-x-6 items-center'>
							<Link
								href='/states'
								className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 hover:text-[#653033] '
							>
								Blog
							</Link>

							<Link
								href='/cities'
								className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 hover:text-[#653033] '
							>
								About
							</Link>

							<Link
								href='/cities'
								className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 hover:text-[#653033] '
							>
								Team
							</Link>

							<Link
								href='/cities'
								className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-600 hover:text-[#653033] '
							>
								Services
							</Link>

							
							

							<Link
								href='/counties'
								className='inline-flex items-center   text-sm font-medium border-[#653033] border duration-300 p-3  rounded-lg h-fit text-[#653033]'
							><span>Schedule An Inspection</span></Link>
								
							
						
						</div>

						{/* Mobile buttons */}
						<div className='-mr-2 flex items-center sm:hidden'>
							{/* Mobile menu button */}
							<button
								className='inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-100 hover:text-gray-900 duration-300'
								onClick={navOpen}
							>
								<span className='sr-only'>Open main menu</span>
								<Bars3Icon
									className='block h-6 w-6'
									aria-hidden='true'
								/>
							</button>
							<Transition.Root
								show={open}
								as={Fragment}
							>
								<Dialog
									as='div'
									className='relative z-10'
									onClose={setOpen}
								>
									<Transition.Child
										as={Fragment}
										enter='ease-in-out duration-500'
										enterFrom='opacity-0'
										enterTo='opacity-100'
										leave='ease-in-out duration-500'
										leaveFrom='opacity-100'
										leaveTo='opacity-0'
									>
										<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
									</Transition.Child>

									<div className='fixed inset-0 overflow-hidden'>
										<div className='absolute inset-0 overflow-hidden'>
											<div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
												<Transition.Child
													as={Fragment}
													enter='transform transition ease-in-out duration-500 sm:duration-700'
													enterFrom='translate-x-full'
													enterTo='translate-x-0'
													leave='transform transition ease-in-out duration-500 sm:duration-700'
													leaveFrom='translate-x-0'
													leaveTo='translate-x-full'
												>
													<Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
														<div className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'>
															<div className='px-4 sm:px-6'>
																<div className='flex items-start justify-between'>
																	<Dialog.Title className='text-base font-semibold leading-6 text-gray-900'>
																		Logo Here
																	</Dialog.Title>
																	<div className='ml-3 flex h-7 items-center'>
																		<button
																			type='button'
																			className='rounded-md bg-white text-gray-500 '
																			onClick={() => setOpen(false)}
																		>
																			<span className='sr-only'>
																				Close panel
																			</span>
																			<XMarkIcon
																				className='h-6 w-6'
																				aria-hidden='true'
																			/>
																		</button>
																	</div>
																</div>
															</div>
															<div className='relative mt-6 flex-1 px-4 sm:px-6'>
																<ul className=' font-semibold text-xl'>
																	<Link href='#'>
																		<li className='my-10 py-4 px-4 border-l border-[#f9f9f9] active:border-[#723639]]'>
																			Link 1
																		</li>
																	</Link>
																	<Link href='#'>
																		<li className='my-10 py-4 px-4 border-l border-[#f9f9f9] active:border-[#723639]]'>
																			Link 2
																		</li>
																	</Link>
																	<Link href='#'>
																		<li className='my-10 py-4 px-4 border-l border-[#f9f9f9] active:border-[#723639]]'>
																			Link 3
																		</li>
																	</Link>
																	<Link href='#'>
																		<li className='my-10 py-4 px-4 border-l border-[#f9f9f9] active:border-[#723639]]'>
																			Link 4
																		</li>
																	</Link>
																</ul>
															</div>
														</div>
													</Dialog.Panel>
												</Transition.Child>
											</div>
										</div>
									</div>
								</Dialog>
							</Transition.Root>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
