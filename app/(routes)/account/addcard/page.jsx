'use client';
import Container from '@/components/ui/container';
import React from 'react';
import { useState } from 'react';

const Account = () => {
	const [cardNumber, setCardNumber] = useState('');
	const [bank, setBank] = useState('');
	const [validity, setValidity] = useState('');
	const [cvv, setCvv] = useState('');
	const [alert, setAlert] = useState('hidden');

	const toggleAlert = () => {
		setAlert('block');
		setTimeout(() => {
			setAlert('hidden');
		}, 2000);
	};
	const handleChangePasswordSubmit = (e) => {
		e.preventDefault();
		if (oldPassword === '' || newPassword === '') {
			toggleAlert();
		}
		console.log(oldPassword, newPassword);
	};

	return (
		<Container>
			<main className="px-5 py-20 font-josefin">
				<div className="flex flex-col items-center justify-center">
					<div className="mx-auto w-full md:max-w-sm rounded-md shadow-md p-2">
						<h2 className="text-center font-bold text-xl my-2">
							Please fill in the card information
						</h2>
						<form
							className="w-full flex flex-col py-4"
							onSubmit={handleChangePasswordSubmit}
						>
							<input
								onChange={(e) => setCardNumber(e.target.value)}
								className="px-3 my-2 py-2 text-lg w-full font-normal text-gray-500 bg-clip-padding border-gray-200  border rounded p-3 shadow  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-800 focus:outline-none"
								type="number"
								value={cardNumber}
								placeholder="Enter card number (16-19 digits)"
							/>
							<select
								onChange={(e) => setBank(e.target.value)}
								className="px-3 my-2 py-2 text-lg w-full font-normal text-gray-500 bg-clip-padding border-gray-200  border rounded p-3 shadow  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-800 focus:outline-none"
								value={bank}
							>
								<option value={''}>Select Bank</option>
								<option value={'UBA'}>UBA</option>
								<option value={'Zenith'}>Zenith</option>
							</select>
							<input
								value={validity}
								onChange={(e) => setValidity(e.target.value)}
								className="px-3 my-2 py-2 text-lg w-full font-normal text-gray-500 bg-clip-padding border-gray-200  border rounded p-3 shadow  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-800 focus:outline-none"
								type="date"
								placeholder="Select Date"
							/>
							<input
								value={cvv}
								onChange={(e) => setCvv(e.target.value)}
								className="px-3 my-2 py-2 text-lg w-full font-normal text-gray-500 bg-clip-padding border-gray-200  border rounded p-3 shadow  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-800 focus:outline-none"
								type="number"
								placeholder="Enter CVV"
							/>
							<p
								className={`text-center text-lg bg-red-800 p-3 w-full text-white duration-500 ${alert}`}
							>
								All inputs are required
							</p>
							<button
								type="submit"
								className="bg-emerald-800 w-full text-white py-3 my-6 rounded font-bold"
							>
								Add Card
							</button>
						</form>
					</div>
				</div>
			</main>
		</Container>
	);
};

export default Account;
