import { Fragment, React } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function HeroPill(props) {
	return (
		<div className='relative inline-block text-left'>
			<span>
				<div className='inline-flex w-full justify-center gap-x-1.5 rounded-full bg-[#494f37]/5 border-transparent border hover:border-gray-300  items-center text-[#434639]/60 px-3 py-2.5 text-xs sm:text-xs font-semibold  shadow-sm   duration-300'>
					{props.title}
				</div>
</span>
				
		</div>
	);
}
