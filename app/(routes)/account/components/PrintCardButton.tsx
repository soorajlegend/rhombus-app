'use client';
import React from 'react';
import usePrintCardModal from '@/hooks/use-printcard-modal';
import { MouseEventHandler } from 'react';

const PrintCardButton = () => {
	const changePinModal = usePrintCardModal();
	const showAddCard: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();
		changePinModal.onOpen();
	};
	return (
		<button
			onClick={showAddCard}
			className="mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white transition-all  text-sm font-semibold  py-2 px-5 rounded-full"
		>
			Print Card{' '}
			<span className="ml-2">
				<svg
					stroke="currentColor"
					fill="currentColor"
					strokeWidth="0"
					viewBox="0 0 512 512"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="none"
						strokeLinejoin="round"
						strokeWidth="32"
						d="M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24"
					></path>
					<rect
						width="256"
						height="208"
						x="128"
						y="240"
						fill="none"
						strokeLinejoin="round"
						strokeWidth="32"
						rx="24.32"
						ry="24.32"
					></rect>
					<path
						fill="none"
						strokeLinejoin="round"
						strokeWidth="32"
						d="M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24"
					></path>
					<circle cx="392" cy="184" r="24"></circle>
				</svg>
			</span>
		</button>
	);
};
export default PrintCardButton;