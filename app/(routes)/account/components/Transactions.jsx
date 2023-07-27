import React from 'react';
import Link from 'next/link';
import { ArrowBigDown, ArrowBigUp } from 'lucide-react';

const Transactions = () => {
	const transactions = [
		{
			type: 'credit',
			description: 'Create alert',
			amount: '500.00',
			date: '10th, Jan, 2025',
		},
		{
			type: 'debit',
			description: 'Debit alert',
			amount: '500.00',
			date: '10th, Jan, 2025',
		},
		{
			type: 'credit',
			description: 'Create alert',
			amount: '5000.00',
			date: '10th, Jan, 2025',
		},
	];

	return (
		<div>
			<div className="flex mt-4 items-center justify-between">
				<h3 className="text-gray-700 text-xl my-2 font-semibold">
					Transactions
				</h3>
				<Link
					href="/"
					className="px-2 py-1 text-emerald-800 font-semibold bg-emerald-300 hover:bg-emerald-400"
				>
					See all
				</Link>
			</div>
			<div className="space-y-3 divide-y mt-5">
				{transactions?.map((transaction, index) => (
					<div className="p-2 flex bg-gray-100 rounded-md my-1" key={index}>
						<div className="flex items-center gap-2">
							<div
								className={`rounded-full bg-blue-50 p-2 ${
									transaction.type == 'credit'
										? 'text-emerald-800'
										: 'text-red-800'
								}`}
							>
								{transaction.type == 'credit' ? (
									<ArrowBigDown />
								) : (
									<ArrowBigUp />
								)}
							</div>
							<div>
								<h4
									className={`font-semibold ${
										transaction.type == 'credit'
											? 'text-emerald-800'
											: 'text-red-800'
									}`}
								>
									{transaction.description}
								</h4>
								<p className="flex items-center space-x-5 text-sm font-light text-primary">
									{transaction.date}
								</p>
							</div>
						</div>
						<div className="flex-1 w-full pt-2 flex justify-end items-end">
							<h4 className="font-semibold">N{transaction.amount}</h4>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Transactions;
