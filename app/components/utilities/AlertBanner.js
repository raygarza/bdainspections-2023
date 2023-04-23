'use client';

import { XMarkIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

export default function AlertBanner() {
	const [open, isOpen] = useState(true);

	const clicked = () => isOpen(false);

	return (
		<div>
			{open ? (
				<div className='flex items-center gap-x-6 bg-[#723639] px-6 py-2.5 sm:px-3.5 sm:before:flex-1 duration-300'>
					<p className='text-xs sm:text-sm leading-2 text-white line-clamp-1 break-all'>
						<a
							href='#'
							className='led-box'
						>
							<svg
								viewBox='0 0 2 2'
								className=' mx-2 inline h-[7px] w-[7px] -mt-[3px] text-[#ffffff86]  fill-current'
								aria-hidden='true'
							>
								<circle
									cx={1}
									cy={1}
									r={1}
								/>
							</svg>
							<strong className='font-semibold text-xs sm:text-sm'>
								Announcement
							</strong>
							<svg
								viewBox='0 0 2 2'
								className='mx-2 inline h-0.5 w-0.5 fill-current'
								aria-hidden='true'
							>
								<circle
									cx={1}
									cy={1}
									r={1}
								/>
							</svg>
							Join us for an exclusive Zoom meeting with news you might care
							about. &nbsp;
							<span aria-hidden='true'>&rarr;</span>
						</a>
					</p>
					<div className='flex flex-1 justify-end'>
						<button
							type='button'
							className='-m-3 p-3 focus-visible:outline-offset-[-4px]'
							onClick={clicked}
						>
							<span className='sr-only'>Dismiss</span>
							<XMarkIcon
								className='h-5 w-5 text-white'
								aria-hidden='true'
							/>
						</button>
					</div>
				</div>
			) : null}
		</div>
	);
}
