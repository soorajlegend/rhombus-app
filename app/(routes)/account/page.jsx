'use client';
import Container from '@/components/ui/container';
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import picture from '@/public/userImage.png';
import { CiEdit } from 'react-icons/ci';
// CiEdit;
// BiEditAlt;

const Account = () => {
	const [image, setImage] = useState(null);
	const hiddenFileInput = useRef(null);
	const session = true;
	const userName = 'abdulsalm';
	const userPhone = '09939009309';
	const userEmail = 'am@gmail.com';
	const token = ';lsdmkdjlddj';
	// const router = useRouter();
	const [showEditProfile, setShowEditProfile] = useState(true);
	const [showEditPassword, setShowEditPassword] = useState(false);
	const [alert, setAlert] = useState('hidden');

	// // change info
	const [phone, setPhoneNumber] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	// //change password
	const [oldPassword, setoldPassword] = useState('');
	const [newPassword, setnewPassword] = useState('');

	useEffect(() => {
		if (session) {
			setName(userName);
			setPhoneNumber(userPhone);
			setEmail(userEmail);
		}
	}, [session, userName, userPhone, userEmail]);

	const toggleAlert = () => {
		setAlert('block');
		setTimeout(() => {
			setAlert('hidden');
		}, 2000);
	};

	const handleEditProfileSubmit = (e) => {
		e.preventDefault();
		if (phone === '' || name === '' || email === '') {
			toggleAlert();
			return setShowEditProfile(true);
		}
		console.log(phone, name, email, token);
	};
	const handleEditPasswordSubmit = (e) => {
		e.preventDefault();
		if (oldPassword === '' || newPassword === '') {
			toggleAlert();
			return setShowEditPassword(true);
		}
		console.log(oldPassword, newPassword);
	};

	const handleEditProfile = () => {
		setShowEditProfile(true);
		setShowEditPassword(false);
		console.log('EditProfile');
	};
	const handleEditPassword = () => {
		setShowEditProfile(false);
		setShowEditPassword(true);
		console.log('EditPassword');
	};

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();
		const imgname = event.target.files[0].name;
		console.log(imgname);
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			const imageDataURL = reader.result;
			setImage(imageDataURL);
		};
	};

	const handleClick = () => {
		hiddenFileInput.current.click();
	};

	return (
		<Container>
			<main className="px-5 py-20 font-josefin">
				<div className="flex flex-col items-center justify-center">
					<div onClick={handleClick} className="cursor-pointer">
						{image ? (
							<div className="relative bg-emerald-800-400  hover:bg-emerald-800-500 p-1.5 border-3 rounded-full aspect-square">
								<Image
									src={image}
									alt="Profile Icon"
									height={100}
									width={100}
									className="z-10 rounded-full"
								/>
								<div className="absolute z-20 bg-emerald-800-400 hover:bg-emerald-800-500 hover:text-white aspect-square rounded-full px-1.5 py-0.5 border-2 -right-1 bottom-4">
									<CiEdit className="aspect-ration" />
								</div>
							</div>
						) : (
							<div className="relative bg-emerald-800-400  hover:bg-emerald-800-500 p-1.5 border-3 rounded-full aspect-square">
								<Image
									src={picture}
									alt="Profile Icon"
									height={100}
									width={100}
									className="z-10"
								/>
								<div className="absolute z-20 bg-emerald-800-400 hover:bg-emerald-800-500 hover:text-white aspect-square rounded-full px-1.5 py-0.5 border-2 -right-1 bottom-4">
									<CiEdit className="aspect-ration" />
								</div>
							</div>
						)}
						<input
							type="file"
							ref={hiddenFileInput}
							onChange={handleImageChange}
							style={{ display: 'none' }}
						/>
					</div>
					<p className="capitalize font-bold text-3xl mt-3">
						{session ? userName : 'user'}
					</p>
					<p className="text-xs font-light">{userEmail || userPhone}</p>
				</div>

				<div className="mt-10 space-y-3 max-w-lg mx-auto">
					<div className="flex items-center justify-center space-x-8 w-full border-b border-emerald-800">
						<button
							className={`font-medium text-sm p-2 justify-center flex flex-col  ${
								showEditProfile
									? 'border-b-4 border-emerald-800 text-emerald-800'
									: 'text-gray-400  font-semibold'
							}`}
							onClick={handleEditProfile}
						>
							Edit Profile
						</button>
						<button
							className={`font-medium text-sm p-2 justify-center flex flex-col ${
								showEditPassword
									? 'border-b-4  border-green-800 text-emerald-800'
									: 'text-gray-400  font-semibold'
							}`}
							onClick={handleEditPassword}
						>
							Change Password
						</button>
					</div>
					{showEditProfile ? (
						<div className="mx-auto">
							<form
								className="w-full flex flex-col py-4"
								onSubmit={handleEditProfileSubmit}
							>
								<input
									onChange={(e) => setName(e.target.value)}
									className="px-3 my-2 py-2 text-lg w-full font-normal text-gray-500 bg-clip-padding border-gray-200  border rounded p-3 shadow  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-800 focus:outline-none"
									type="text"
									value={name}
									placeholder="Name"
									autoComplete="text"
								/>
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="px-3 my-2 py-2 text-lg w-full font-normal text-gray-500 bg-clip-padding border-gray-200  border rounded p-3 shadow  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-800 focus:outline-none"
									type="Email"
									placeholder="Email"
									autoComplete="current-email"
								/>
								<input
									value={phone}
									onChange={(e) => setPhoneNumber(e.target.value)}
									className="px-3 my-2 py-2 text-lg w-full font-normal text-gray-500 bg-clip-padding border-gray-200  border rounded p-3 shadow  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-800 focus:outline-none"
									type="phone"
									placeholder="Phone Number"
									autoComplete="phone"
								/>
								<p
									className={`text-center text-lg bg-red-300 p-3 w-full text-white duration-500 ${alert}`}
								>
									All inputs are required
								</p>

								<button
									type="submit"
									className="bg-emerald-800 w-full text-white py-3 my-6 rounded font-bold"
								>
									Update Profile
								</button>
							</form>
						</div>
					) : null}
					{showEditPassword ? (
						<div className="mx-auto">
							<form
								className="w-full flex flex-col py-4"
								onSubmit={handleEditPasswordSubmit}
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
									className={`text-center text-lg bg-red-300 p-3 w-full text-white duration-500 ${alert}`}
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
					) : null}
				</div>
			</main>
		</Container>
	);
};

export default Account;
