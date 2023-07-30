'use client';
import React from 'react';
import useCardModal from '@/hooks/use-change-pin-modal';
import { MouseEventHandler } from 'react';

const ChangePinButton = () => {
	const changePinModal = useCardModal();
	const showAddCard: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();
		changePinModal.onOpen();
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
						fill="currentColor"
						className="h-6 md:h-8 w-6 md:w-8 text-white bi bi-file-earmark-lock2"
						viewBox="0 0 16 16"
					>
						<path d="M10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0zM7 7v1h2V7a1 1 0 0 0-2 0z" />
						<path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
					</svg>
				</div>

				<div className="mx-5">
					<h4 className={`text-lg md:text-2xl font-semibold text-emerald-800`}>
						Change card pin
					</h4>
					<div className="text-gray-500">{`Create Card`}</div>
				</div>
			</button>
		</div>
	);
};
export default ChangePinButton;
