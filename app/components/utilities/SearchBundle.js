'use client';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useHotkeys } from 'react-hotkeys-hook';

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

// https://simplemaps.com/data/us-cities for search data! -- must be cleaned

export default function SearchBundle() {
	const [open, setOpen] = useState(false);

	const toggleClose = () => {
		setOpen(false);
	};
	const toggleOpen = () => {
		setOpen(true);
	};

	useHotkeys('ctrl+k', () => setOpen(true), { preventDefault: true });

	const clearForm = () => {
		document.getElementById('modal_search').reset();
	};
	return (
		<div>
			<div
				className='flex flex-grow items-stretch relative mt-4  w-full sm:w-3/4 mx-auto cursor-pointer'
				onClick={toggleOpen}
			>
				<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
					<MagnifyingGlassIcon
						className='h-5 w-5 text-gray-400'
						aria-hidden='true'
					/>
				</div>
				<input
					type='text'
					name='search'
					id='search'
					placeholder=' Search by City, State, Zip.. '
					className=' block w-full pl-10 disabled-input rounded-md border-0 py-3 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-1 focus:ring-1 duration-200 focus:ring-inset hover:ring-black focus:ring-black sm:text-sm  sm:leading-6'
				/>

				<div className='absolute hidden inset-y-0 right-0 sm:flex py-1.5 pr-4 select-none'>
					<kbd className='inline-flex items-center rounded-lg border border-gray-200 p-2 font-sans text-xs text-gray-400'>
						Ctrl+ K
					</kbd>
				</div>
			</div>
			<button className=''></button>
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
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black bg-opacity-80 transition-opacity' />
					</Transition.Child>

					<div className='fixed inset-0 z-10 overflow-y-auto'>
						<div className='flex min-h-full items-end justify-center sm:p-4 text-center sm:items-center '>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
								enterTo='opacity-100 translate-y-0 sm:scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 translate-y-0 sm:scale-100'
								leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							>
								<Dialog.Panel className='relative transform overflow-hidden sm:rounded-xl sm:h-[85vh] w-screen h-screen sm:w-auto min-w-[40vw] bg-white sm:px-4 sm:pb-4 sm:pt-5 text-left shadow-xl transition-all sm:my-8 sm:p-6'>
									<div className='flex items-center space-x-3 sm:space-x-4 px-4'>
										{/* Search Bar */}
										<div className='flex flex-grow  items-stretch relative mt-4 bg-[#f1f1f1]  w-3/4 mx-auto cursor-pointer'>
											<form
												id='modal_search'
												className='block w-full '
											>
												<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
													<MagnifyingGlassIcon
														className='h-5 w-5 text-gray-400'
														aria-hidden='true'
													/>
												</div>

												<input
													type='text'
													name='search'
													id='search'
													placeholder=' Search by City, State, Zip.. '
													className='block w-full pl-10 rounded-md border-0 py-3 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-1 focus:ring-1 duration-200 focus:ring-inset hover:ring-[#723639] focus:ring-[#723639] sm:text-sm  sm:leading-6'
												/>
												<div
													onClick={clearForm}
													className='absolute inset-y-0 mt-[.85rem] sm:mt-[.15rem] right-0 items-center sm:flex pr-2'
												>
													<XMarkIcon
														className='h-5 w-5 text-gray-400'
														aria-hidden='true'
													/>
												</div>
											</form>
										</div>
										<button
											className=' hidden text-xs text-gray-500 p-2 border rounded-lg sm:inline-block mt-4 select-none'
											onClick={toggleClose}
										>
											{' '}
											Esc{' '}
										</button>
										<button
											className='sm:hidden text-xs text-gray-500 p-2 border rounded-lg inline-block mt-4 select-none'
											onClick={toggleClose}
										>
											{' '}
											Close{' '}
										</button>
									</div>
									<div className='mt-5 sm:mt-6 justify-center'>
										<div className='py-40 text-xs text-gray-400 text-center'>
											{' '}
											No Recent Searches
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</div>
	);
}
