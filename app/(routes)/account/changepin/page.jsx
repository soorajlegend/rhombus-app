'use client';
import Container from '@/components/ui/container';
import React from 'react';
import { useState } from 'react';

const Account = () => {
	const [oldPassword, setoldPassword] = useState('');
	const [newPassword, setnewPassword] = useState('');
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
				<div className="mx-auto w-full md:w-[400px] rounded-md shadow-md p-2">
					<h2 className="text-center font-bold text-xl my-2">
						Change card pin
					</h2>
					<form
						className="w-full flex flex-col py-4"
						onSubmit={handleChangePasswordSubmit}
					>
						<input
							onChange={(e) => setoldPassword(e.target.value)}
							className="px-3 my-2 py-2 text-lg w-full font-normal text-gray-500 bg-clip-padding border-gray-200  border rounded p-3 shadow  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-800 focus:outline-none"
							type="password"
							value={oldPassword}
							placeholder="Old Password"
							autoComplete="password"
						/>
						<input
							value={newPassword}
							onChange={(e) => setnewPassword(e.target.value)}
							className="px-3 my-2 py-2 text-lg w-full font-normal text-gray-500 bg-clip-padding border-gray-200  border rounded p-3 shadow  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-800 focus:outline-none"
							type="password"
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
							className="bg-emerald-800 w-full text-white py-3 my-6 rounded font-bold"
						>
							Update Password
						</button>
					</form>
				</div>
			</main>
		</Container>
	);
};

export default Account;
