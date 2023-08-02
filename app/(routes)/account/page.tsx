import Container from '@/components/ui/container';
import Card from '@/components/ui/card';
import Transactions from './components/Transactions';
import FundAccountButton from './components/FundAccountButton';
import AddCardButton from './components/AddCardButton';
import ChangePinButton from './components/ChangePinButton';
import PrintCardButton from './components/PrintCardButton';

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
	return (
		<Container>
			<main className="flex-1 h-full overflow-x-hidden overflow-y-auto pt-4">
				<div className="flex justify-between w-full">
					<h3 className="text-gray-700 text-xl md:text-3xl font-medium">
						Account
					</h3>
					<PrintCardButton />
				</div>
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
								bgOnHover=""
							/>
						))}
					</div>
				</div>
				<h3 className="text-gray-700 text-xl my-2 font-medium">
					What would you like to do?
				</h3>
				<div className="mt-4">
					<div className="flex flex-wrap -mx-6 gap-y-2">
						<FundAccountButton />
						<AddCardButton />
						<ChangePinButton />
					</div>
				</div>
				<Transactions />
			</main>
		</Container>
	);
};

export default Account;
