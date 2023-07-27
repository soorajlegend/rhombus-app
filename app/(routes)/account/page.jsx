import Container from '@/components/ui/container';
import Card from '@/components/ui/card';
import OtherCard from './components/OtherCard';
import Transactions from './components/Transactions';

const Account = () => {
	const BalanceCards = [
		{
			title: 'N8,282',
			description: 'Balance',
			href: '',
			color: 'bg-emerald-800',
			notLink: true,
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					className="h-6 md:h-8 w-6 md:w-8 text-white bi bi-wallet-fill"
					viewBox="0 0 16 16"
				>
					<path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z" />
					<path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z" />
				</svg>
			),
		},
		{
			title: 'N8,28',
			description: 'Pending Balance',
			href: '',
			color: 'bg-indigo-600',
			notLink: true,
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					className="h-6 md:h-8 w-6 md:w-8 text-white bi bi-wallet-fill"
					viewBox="0 0 16 16"
				>
					<path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z" />
					<path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z" />
				</svg>
			),
		},
	];
	const OtherCards = [
		{
			title: 'Fund Account',
			description: 'Fund account',
			href: '',
			color: 'text-emerald-800',
			bgColor: 'bg-emerald-800',
			bgOnHover: 'hover:bg-blue-100',
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					className="h-6 md:h-8 w-6 md:w-8 text-white bi bi-shop"
					viewBox="0 0 16 16"
				>
					<path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
				</svg>
			),
		},
		{
			title: 'Add bank Card',
			description: 'Add bank Card',
			href: '/account/createcard',
			color: 'text-emerald-800',
			bgColor: 'bg-emerald-800',
			bgOnHover: 'hover:bg-blue-100',
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 md:h-8 w-6 md:w-8 text-white bi bi-credit-card"
					fill="currentColor"
					viewBox="0 0 16 16"
				>
					<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
					<path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
				</svg>
			),
		},
		{
			title: 'Change card pin',
			description: 'change transaction pin',
			href: '/account/changepin',
			color: 'text-emerald-800',
			bgColor: 'bg-emerald-800',
			bgOnHover: 'hover:bg-blue-100',
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					className="h-6 md:h-8 w-6 md:w-8 text-white bi bi-file-earmark-lock2"
					viewBox="0 0 16 16"
				>
					<path d="M10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0zM7 7v1h2V7a1 1 0 0 0-2 0z" />
					<path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
				</svg>
			),
		},
	];
	return (
		<Container>
			<main className="flex-1 h-full overflow-x-hidden overflow-y-auto pt-4">
				<h3 className="text-gray-700 text-xl md:text-3xl font-medium">
					Account
				</h3>
				<div className="mt-4">
					<div className="flex flex-wrap -mx-6">
						{BalanceCards.map((card, index) => (
							<Card
								key={index}
								title={card.title}
								href={card.href}
								notLink={card.notLink}
								icon={card.icon}
								description={card.description}
								color={card.color}
								bgOnHover={card.bgOnHover}
							/>
						))}
					</div>
				</div>
				<h3 className="text-gray-700 text-xl my-2 font-medium">
					What would you like to do?
				</h3>
				<div className="mt-4">
					<div className="flex flex-wrap -mx-6">
						{OtherCards.map((card, index) => (
							<OtherCard
								key={index}
								title={card.title}
								href={card.href}
								icon={card.icon}
								description={card.description}
								color={card.color}
								bgOnHover={card.bgOnHover}
								bgColor={card.bgColor}
							/>
						))}
					</div>
				</div>
				<Transactions />
			</main>
		</Container>
	);
};

export default Account;
