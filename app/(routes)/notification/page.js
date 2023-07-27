import React from 'react';
import Link from 'next/link';
import { ArrowBigLeft, User2Icon } from 'lucide-react';

const page = () => {
	const notifications = [
		{
			title: '30% Special Discount!',
			description: 'Special promotion only valid today',
			icon: '500.00',
		},
		{
			icon: '500.00',
			description: 'You have to top up your wallet',
			title: 'Top up E-wallet successful',
		},
		{
			icon: '5000.00',
			title: 'Credit card connected',
			description: 'Credit card has been linked!',
		},
		{
			title: 'Account setup successful!',
			description: 'Your account has been created!',
			icon: '5000.00',
		},
	];

	return (
		<div>
			<div className="flex mt-4 items-center justify-between">
				<Link
					href="/"
					className="px-2 py-1 text-emerald-800 font-semibold bg-emerald-300 hover:bg-emerald-400"
				>
					<ArrowBigLeft />
				</Link>
				<h3 className="text-gray-700 text-xl my-2 font-semibold w-full text-center">
					Notifications
				</h3>
			</div>
			<div className="space-y-3 divide-y mt-5">
				{notifications?.map((notification, index) => (
					<div className="p-1.5 flex bg-gray-100 rounded-md my-1" key={index}>
						<div className="flex items-center gap-2">
							<div className={`rounded-md bg-white p-2`}>
								<User2Icon />
							</div>
							<div>
								<h4 className={`font-semibold`}>{notification.title}</h4>
								<p className="flex items-center space-x-5 text-sm font-light text-primary">
									{notification.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default page;
