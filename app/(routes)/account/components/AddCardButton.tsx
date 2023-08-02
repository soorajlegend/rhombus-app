'use client';

import React from 'react';
import useCardModal from '@/hooks/use-addcard-modal';
import { MouseEventHandler } from 'react';

const AddCardButton = () => {
	const cardModal = useCardModal();
	const showAddCard: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();
		cardModal.onOpen();
	};
	return (
		<div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
			<button
				onClick={showAddCard}
				className={`w-full flex items-center px-5 py-6 shadow-sm rounded-md bg-blue-50 text-gray-500 hover:bg-blue-100`}
			>
				<div className={`p-3 rounded-full bg-opacity-75 bg-emerald-800`}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 md:h-8 w-6 md:w-8 text-white bi bi-credit-card"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
						<path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
					</svg>
				</div>

				<div className="mx-5">
					<h4 className={`text-lg md:text-2xl font-semibold text-emerald-800`}>
						Add Card
					</h4>
					<div className="text-gray-500">{`Create Card`}</div>
				</div>
			</button>
		</div>
	);
};
export default AddCardButton;
