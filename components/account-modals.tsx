'use client';

import React from 'react';
import Modal from '@/components/ui/modal';
import useCardModal from '@/hooks/use-addcard-modal';
import useChangePinModal from '@/hooks/use-change-pin-modal';
import { useState, FormEventHandler } from 'react';

export const AddCardModal = () => {
	const [cardName, setCardName] = useState('');
	const [alert, setAlert] = useState('hidden');
	const cardModal = useCardModal();

	const toggleAlert = () => {
		setAlert('block');
		setTimeout(() => {
			setAlert('hidden');
		}, 2000);
	};

	const handleChangePasswordSubmit: FormEventHandler<HTMLFormElement> = (
		event
	) => {
		event.stopPropagation();
		event.preventDefault();
		if (cardName === '') {
			return toggleAlert();
		}
		console.log(cardName);
	};
	return (
		<Modal isOpen={cardModal.isOpen} onClose={cardModal.onClose}>
			<div className="w-full">
				<h2 className="text-center font-bold text-xl my-2">
					Please fill in the card information
				</h2>
				<form
					className="w-full flex flex-col py-4"
					onSubmit={handleChangePasswordSubmit}
				>
					{' '}
					<label htmlFor="cardName">Card Name</label>
					<input
						onChange={(e) => setCardName(e.target.value)}
						className="px-3 my-2 py-2 text-lg w-full font-normal text-gray-500 bg-clip-padding border-gray-200  border rounded p-3 shadow  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-800 focus:outline-none"
						type="text"
						id="cardName"
						value={cardName}
						placeholder="Enter card number (16-19 digits)"
					/>
					<p
						className={`text-center text-lg bg-red-800 p-3 w-full text-white duration-500 ${alert}`}
					>
						All inputs are required
					</p>
					<button
						type="submit"
						className="bg-emerald-800 w-full text-white py-3 my-3 rounded font-bold"
					>
						Add Card
					</button>
				</form>
			</div>
		</Modal>
	);
};

export const ChangePin = () => {
	const [oldPassword, setoldPassword] = useState('');
	const [newPassword, setnewPassword] = useState('');
	const [alert, setAlert] = useState('hidden');
	const changePinModal = useChangePinModal();

	const toggleAlert = () => {
		setAlert('block');
		setTimeout(() => {
			setAlert('hidden');
		}, 2000);
	};

	const handleChangePasswordSubmit: FormEventHandler<HTMLFormElement> = (
		event
	) => {
		event.stopPropagation();
		event.preventDefault();
		if (oldPassword === '' || newPassword === '') {
			return toggleAlert();
		}
		console.log(oldPassword, newPassword);
	};
	return (
		<Modal isOpen={changePinModal.isOpen} onClose={changePinModal.onClose}>
			<div className="w-full">
				<h2 className="text-center font-bold text-xl my-2">Change card pin</h2>
				<form
					className="w-full flex flex-col py-4"
					onSubmit={handleChangePasswordSubmit}
				>
					<label htmlFor="oldPassword">Old Password</label>
					<input
						onChange={(e) => setoldPassword(e.target.value)}
						className="px-3 my-2 py-2 text-lg w-full font-normal text-gray-500 bg-clip-padding border-gray-200  border rounded p-3 shadow  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-800 focus:outline-none"
						type="password"
						id="oldPassword"
						value={oldPassword}
						placeholder="Old Password"
						autoComplete="password"
					/>
					<label htmlFor="newPassword">New password</label>
					<input
						value={newPassword}
						onChange={(e) => setnewPassword(e.target.value)}
						className="px-3 my-2 py-2 text-lg w-full font-normal text-gray-500 bg-clip-padding border-gray-200  border rounded p-3 shadow  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-800 focus:outline-none"
						type="password"
						id="newPassword"
						placeholder="New Password"
						autoComplete="new-password"
					/>
					<p
						className={`text-center text-lg bg-red-800 p-3 w-full text-white duration-500 ${alert}`}
					>
						All inputs are required
					</p>
					<button
						type="submit"
						className="bg-emerald-800 w-full text-white py-3 my-3 rounded font-bold"
					>
						Change Pin
					</button>
				</form>
			</div>
		</Modal>
	);
};
