import { Fragment, useState, useCallback } from 'react';
import Link from 'next/link';
import { Transition, Dialog } from '@headlessui/react';
import {
	CheckIcon,
	LockClosedIcon,
	AcademicCapIcon,
	DocumentTextIcon,
} from '@heroicons/react/24/outline';

const navigation = {
	company: [
		{ name: 'Privacy Policy', functionName: 'privacy', href: '#' },
		{
			name: 'Terms and Conditions',
			functionName: 'setTermsConditionsOpen',
		},
		{
			name: 'How to use this Site',
			functionName: 'setHowToUseOpen',
		},
	],
};

export default function CompanyLinks() {
	const [privacyOpen, setPrivacyOpen] = useState(false);
	const [termsConditionsOpen, setTermsConditionsOpen] = useState(false);
	const [howToUseOpen, setHowToUseOpen] = useState(false);

	// const privacy = useCallback(
	// 	(functionName) => () => {
	// 		setPrivacyOpen(true);
	// 	},
	// 	[]
	// );
	// const terms = useCallback(
	// 	(functionName) => () => {
	// 		setTermsConditionsOpen(true);
	// 	},
	// 	[]
	// );
	// const howTo = useCallback(
	// 	(functionName) => () => {
	// 		setHowToUseOpen(true);
	// 	},
	// 	[]
	// );
	return (
		<div>
			<div className='mt-10 md:mt-0'>
				<h3 className='text-sm font-semibold leading-6 text-white'>Company</h3>
				<ul
					role='list'
					className='mt-4 space-y-2'
				>
					<li
						className='cursor-pointer'
						onClick={() => setPrivacyOpen(true)}
					>
						<div className='text-sm leading-6 text-gray-300 hover:text-white'>
							Privacy Policy
						</div>
					</li>
					<li
						className='cursor-pointer'
						onClick={() => setTermsConditionsOpen(true)}
					>
						<div className='text-sm leading-6 text-gray-300 hover:text-white'>
							Terms and Conditions
						</div>
					</li>
					<li
						className='cursor-pointer'
						onClick={() => setHowToUseOpen(true)}
					>
						<div className='text-sm leading-6 text-gray-300 hover:text-white'>
							How to Use this Site
						</div>
					</li>

					{privacyOpen ? ( // Modal UI
						<Transition.Root
							show={true}
							as={Fragment}
						>
							<Dialog
								as='div'
								className='relative z-10'
								onClose={setPrivacyOpen}
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
									<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
								</Transition.Child>

								<div className='fixed inset-0 z-10 overflow-y-auto'>
									<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
										<Transition.Child
											as={Fragment}
											enter='ease-out duration-300'
											enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
											enterTo='opacity-100 translate-y-0 sm:scale-100'
											leave='ease-in duration-200'
											leaveFrom='opacity-100 translate-y-0 sm:scale-100'
											leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
										>
											<Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-sm md:max-w-md lg:max-w-xl my-auto max-h-[650px] overflow-y-scroll  s sm:p-6'>
												<div className=' sticky top-0 border-b  bg-white py-4'>
													<div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100'>
														<LockClosedIcon
															className='h-6 w-6 text-blue-600'
															aria-hidden='true'
														/>
													</div>
													<div className='mt-3 text-center sm:mt-5'>
														<Dialog.Title
															as='h3'
															className='text-base font-semibold leading-6 text-gray-900'
														>
															Privacy Policy{' '}
														</Dialog.Title>
													</div>
												</div>
												<div className='mt-2 pb-8 px-4'>
													<p className='text-sm text-gray-500'>
														Lorem ipsum dolor sit amet consectetur adipisicing
														elit. Ex accusamus quia quibusdam iure recusandae
														totam at nemo aperiam aspernatur doloremque officia
														distinctio et odio quaerat, perferendis ipsum nobis
														alias! Officia aperiam quaerat beatae molestias
														totam esse voluptate voluptatibus eligendi sit dicta
														magnam iste sed, doloribus dignissimos atque
														molestiae facilis ea dolorum, veritatis ipsa modi
														pariatur recusandae enim! Soluta incidunt earum
														eveniet dolor itaque dignissimos ex perspiciatis
														illo commodi? Consectetur ipsam iure doloribus quam
														nihil soluta recusandae similique minus sint animi
														rerum quasi qui adipisci ad, ipsum vel ratione velit
														vero quis earum voluptatum illo ab? Fugiat odio
													</p>
													<p className='text-sm text-gray-500'>
														Lorem ipsum dolor sit amet consectetur adipisicing
														elit. Ex accusamus quia quibusdam iure recusandae
														totam at nemo aperiam aspernatur doloremque officia
														distinctio et odio quaerat, perferendis ipsum nobis
														alias! Officia aperiam quaerat beatae molestias
														totam esse voluptate voluptatibus eligendi sit dicta
														magnam iste sed, doloribus dignissimos atque
														molestiae facilis ea dolorum, veritatis ipsa modi
														pariatur recusandae enim! Soluta incidunt earum
														eveniet dolor itaque dignissimos ex perspiciatis
														illo commodi? Consectetur ipsam iure doloribus quam
														nihil soluta recusandae similique minus sint animi
														rerum quasi qui adipisci ad, ipsum vel ratione velit
														vero quis earum voluptatum illo ab? Fugiat odio
													</p>
												</div>

												<div className='sticky bottom-0 border-t  bg-white py-4'>
													<div className=' sm:mt-6  w-[90%] sm:w-[400px] m-auto'>
														<button
															type='button'
															className='inline-flex w-full justify-center rounded-md bg-blue-600  py-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 cursor-pointer outline-none '
															onClick={() => setPrivacyOpen(false)}
														>
															Ok
														</button>
													</div>
												</div>
											</Dialog.Panel>
										</Transition.Child>
									</div>
								</div>
							</Dialog>
						</Transition.Root>
					) : (
						''
					)}

					{termsConditionsOpen ? ( // Modal UI
						<Transition.Root
							show={true}
							as={Fragment}
						>
							<Dialog
								as='div'
								className='relative z-10'
								onClose={setTermsConditionsOpen}
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
									<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
								</Transition.Child>

								<div className='fixed inset-0 z-10 overflow-y-auto'>
									<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
										<Transition.Child
											as={Fragment}
											enter='ease-out duration-300'
											enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
											enterTo='opacity-100 translate-y-0 sm:scale-100'
											leave='ease-in duration-200'
											leaveFrom='opacity-100 translate-y-0 sm:scale-100'
											leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
										>
											<Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-sm md:max-w-md lg:max-w-xl my-auto max-h-[650px] overflow-y-scroll  s sm:p-6'>
												<div className=' sticky top-0 border-b  bg-white py-4'>
													<div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100'>
														<DocumentTextIcon
															className='h-6 w-6 text-blue-600'
															aria-hidden='true'
														/>
													</div>
													<div className='mt-3 text-center sm:mt-5'>
														<Dialog.Title
															as='h3'
															className='text-base font-semibold leading-6 text-gray-900'
														>
															Terms & Conditions{' '}
														</Dialog.Title>
													</div>
												</div>
												<div className='mt-2 pb-8 px-4'>
													<p className='text-sm text-gray-500'>
														Lorem ipsum dolor sit amet consectetur adipisicing
														elit. Ex accusamus quia quibusdam iure recusandae
														totam at nemo aperiam aspernatur doloremque officia
														distinctio et odio quaerat, perferendis ipsum nobis
														alias! Officia aperiam quaerat beatae molestias
														totam esse voluptate voluptatibus eligendi sit dicta
														magnam iste sed, doloribus dignissimos atque
														molestiae facilis ea dolorum, veritatis ipsa modi
														pariatur recusandae enim! Soluta incidunt earum
														eveniet dolor itaque dignissimos ex perspiciatis
														illo commodi? Consectetur ipsam iure doloribus quam
														nihil soluta recusandae similique minus sint animi
														rerum quasi qui adipisci ad, ipsum vel ratione velit
														vero quis earum voluptatum illo ab? Fugiat odio
														quasi accusamus harum nihil! Odit quasi optio,
														dolorem unde, odio in cupiditate nostrum sit maxime
														quis, voluptate eligendi accusamus repellat
														reprehenderit porro corporis tenetur quo quisquam.
														Autem debitis quam laudantium minus ut? Sint soluta
														optio iusto magnam cupiditate officiis sapiente
														incidunt dignissimos impedit laudantium amet et
														eveniet natus, nam ducimus, harum nemo neque.
													</p>
													<p className='text-sm text-gray-500'>
														Lorem ipsum dolor sit amet consectetur adipisicing
														elit. Ex accusamus quia quibusdam iure recusandae
														totam at nemo aperiam aspernatur doloremque officia
														distinctio et odio quaerat, perferendis ipsum nobis
														alias! Officia aperiam quaerat beatae molestias
														totam esse voluptate voluptatibus eligendi sit dicta
														magnam iste sed, doloribus dignissimos atque
														molestiae facilis ea dolorum, veritatis ipsa modi
														pariatur recusandae enim! Soluta incidunt earum
														eveniet dolor itaque dignissimos ex perspiciatis
														illo commodi? Consectetur ipsam iure doloribus quam
														nihil soluta recusandae similique minus sint animi
														rerum quasi qui adipisci ad, ipsum vel ratione velit
														vero quis earum voluptatum illo ab? Fugiat odio
													</p>
												</div>

												<div className='sticky bottom-0 border-t  bg-white py-4'>
													<div className=' sm:mt-6  w-[90%] sm:w-[400px] m-auto'>
														<button
															type='button'
															className='inline-flex w-full justify-center rounded-md bg-blue-600  py-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 cursor-pointer outline-none '
															onClick={() => setTermsConditionsOpen(false)}
														>
															Ok
														</button>
													</div>
												</div>
											</Dialog.Panel>
										</Transition.Child>
									</div>
								</div>
							</Dialog>
						</Transition.Root>
					) : (
						''
					)}

					{howToUseOpen ? ( // Modal UI
						<Transition.Root
							show={true}
							as={Fragment}
						>
							<Dialog
								as='div'
								className='relative z-10'
								onClose={setHowToUseOpen}
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
									<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
								</Transition.Child>

								<div className='fixed inset-0 z-10 overflow-y-auto'>
									<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
										<Transition.Child
											as={Fragment}
											enter='ease-out duration-300'
											enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
											enterTo='opacity-100 translate-y-0 sm:scale-100'
											leave='ease-in duration-200'
											leaveFrom='opacity-100 translate-y-0 sm:scale-100'
											leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
										>
											<Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-sm md:max-w-md lg:max-w-xl my-auto max-h-[650px] overflow-y-scroll  s sm:p-6'>
												<div className=' sticky top-0 border-b  bg-white py-4'>
													<div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100'>
														<AcademicCapIcon
															className='h-6 w-6 text-blue-600'
															aria-hidden='true'
														/>
													</div>
													<div className='mt-3 text-center sm:mt-5'>
														<Dialog.Title
															as='h3'
															className='text-base font-semibold leading-6 text-gray-900'
														>
															How To Use This Site{' '}
														</Dialog.Title>
													</div>
												</div>
												<div className='mt-2 pb-8 px-4'>
													<p className='text-sm text-gray-500'>
														Lorem ipsum dolor sit amet consectetur adipisicing
														elit. Ex accusamus quia quibusdam iure recusandae
														totam at nemo aperiam aspernatur doloremque officia
														distinctio et odio quaerat, perferendis ipsum nobis
														alias! Officia aperiam quaerat beatae molestias
														totam esse voluptate voluptatibus eligendi sit dicta
														magnam iste sed, doloribus dignissimos atque
														molestiae facilis ea dolorum, veritatis ipsa modi
														pariatur recusandae enim! Soluta incidunt earum
														eveniet dolor itaque dignissimos ex perspiciatis
														illo commodi? Consectetur ipsam iure doloribus quam
														nihil soluta recusandae similique minus sint animi
														rerum quasi qui adipisci ad, ipsum vel ratione velit
														vero quis earum voluptatum illo ab? Fugiat odio
														quasi accusamus harum nihil! Odit quasi optio,
														dolorem unde, odio in cupiditate nostrum sit maxime
														quis, voluptate eligendi accusamus repellat
														reprehenderit porro corporis tenetur quo quisquam.
														Autem debitis quam laudantium minus ut? Sint soluta
														optio iusto magnam cupiditate officiis sapiente
														incidunt dignissimos impedit laudantium amet et
														eveniet natus, nam ducimus, harum nemo neque.
													</p>
												</div>

												<div className='sticky bottom-0 border-t  bg-white py-4'>
													<div className=' sm:mt-6  w-[90%] sm:w-[400px] m-auto'>
														<button
															type='button'
															className='inline-flex w-full justify-center rounded-md bg-blue-600  py-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 cursor-pointer outline-none '
															onClick={() => setHowToUseOpen(false)}
														>
															Ok
														</button>
													</div>
												</div>
											</Dialog.Panel>
										</Transition.Child>
									</div>
								</div>
							</Dialog>
						</Transition.Root>
					) : (
						''
					)}
				</ul>
			</div>
		</div>
	);
}
