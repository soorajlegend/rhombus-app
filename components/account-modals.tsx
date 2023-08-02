'use client';

import React from 'react';
import Modal from '@/components/ui/modal';
import useCardModal from '@/hooks/use-addcard-modal';
import useChangePinModal from '@/hooks/use-change-pin-modal';
import usePrintCardModal from '@/hooks/use-printcard-modal';
import { useState, FormEventHandler, useRef } from 'react';
import useUserData from '@/hooks/use-user-data';
import axios from 'axios';
import ReactToPrint from 'react-to-print';
import Image from 'next/image';
import QrCode from '@/public/qrcode.png';

export const AddCardModal = () => {
	const [card, setCard] = useState('');
	const [alert, setAlert] = useState('hidden');
	const cardModal = useCardModal();
	const user = useUserData();

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
		if (card === '') {
			return toggleAlert();
		}
		const mobile = user.data?.phoneNumber;
		console.log(card, mobile);
		axios
			.post(`https://rumbu-admin.vercel.app/api/user/${encodeURIComponent(mobile)}/card`, { pin: card})
			.then((res) => {
				console.log(res.data);
			})
			.catch((error) => console.log(error));
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
					<label htmlFor="card">Card pin</label>
					<input
						onChange={(e) => setCard(e.target.value)}
						className="px-3 my-2 py-2 text-lg w-full font-normal text-gray-500 bg-clip-padding border-gray-200  border rounded p-3 shadow  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-800 focus:outline-none"
						type="text"
						id="card"
						value={card}
						max={6}
						min={4}
						placeholder="Enter card number (4-5 digits)"
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
	const user = useUserData();

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
		console.log(oldPassword, newPassword, user.data?.phoneNumber);
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

export const PrintCardModal = () => {
	const cardModal = usePrintCardModal();
	const printRef = useRef(null);
	const userData = useUserData();
	const mobile = userData.data?.phoneNumber;

	return (
		<Modal isOpen={cardModal.isOpen} onClose={cardModal.onClose}>
			<div className="w-full flex flex-col space-y-10">
				<div
					className="py-2 text-center rounded-md shadow-md w-fit px-3 mx-auto"
					ref={printRef}
				>
					<h2 className="font-bold text-xl my-2">Rhumbus card</h2>
					<div className="rounded w-full py-1 font-semibold px-2 bg-green-700 text-white">
						Rhumbus : 123 ***** 1223
					</div>
					{/* QR Code */}
					<div className="my-2 w-52 h-52 mx-auto">
						<Image src={QrCode} alt="QrCode" />
					</div>
					<div className="space-y-2">
						<p>{mobile}</p>
						<h3 className="font-semibold">Instructions</h3>
						<p>Use card for transaction only</p>
					</div>
				</div>
				<div className="text-center mt-2">
					<ReactToPrint
						trigger={() => (
							<button className="mx-auto mb-3 sm:mb-0 md:mb-0 lg:mb-0 flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white transition-all text-sm font-semibold h-10 py-2 px-5 rounded-md">
								Print {' '}
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
						)}
						content={() => printRef.current}
					/>
				</div>
			</div>
		</Modal>
	);
};
