import Container from '@/components/ui/container';
import React from 'react';
import Link from 'next/link';
import BarChart from './BarChart'

const Dashboard = () => {
	return (
		<Container>
			<main className="flex-1 h-full overflow-x-hidden overflow-y-auto">
				<div className="container mx-auto px-6 py-8">
					<h3 className="text-gray-700 text-xl md:text-3xl font-medium">
						Dashboard
					</h3>
					<div className="mt-4">
						<div className="flex flex-wrap -mx-6">
							<div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
								<Link
									href="/"
									className="w-full flex items-center px-5 py-6 shadow-sm rounded-md bg-white text-gray-500 hover:bg-green-100"
								>
									<div className="p-3 rounded-full bg-green-600 bg-opacity-75">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											className="h-6 md:h-8 w-6 md:w-8 text-white bi bi-shop"
											viewBox="0 0 16 16"
										>
											<path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
										</svg>
									</div>

									<div className="mx-5">
										<h4 className="text-lg md:text-2xl font-semibold text-gray-700">
											8,282 kg
										</h4>
										<div className="text-gray-500">My Product</div>
									</div>
								</Link>
							</div>

							<div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
								<Link
									href="/wallet"
									className="w-full flex items-center px-5 py-6 shadow-sm rounded-md bg-white text-gray-500 hover:bg-blue-100"
								>
									<div className="p-3 rounded-full bg-blue-700 bg-opacity-75">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											className="h-6 md:h-8 w-6 md:w-8 text-white bi bi-wallet-fill"
											viewBox="0 0 16 16"
										>
											<path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z" />
											<path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z" />
										</svg>
									</div>

									<div className="mx-5">
										<h4 className="text-lg md:text-2xl font-semibold text-gray-700">
											N8,282
										</h4>
										<div className="text-gray-500">My Wallet</div>
									</div>
								</Link>
							</div>
							<div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
								<Link
									href="#history"
									className="w-full flex items-center px-5 py-6 shadow-sm rounded-md bg-white text-gray-500 hover:bg-yellow-100"
								>
									<div className="p-3 rounded-full bg-yellow-600 bg-opacity-75">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 md:h-8 w-6 md:w-8 text-white bi bi-bar-chart-line"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
										</svg>
									</div>

									<div className="mx-5">
										<h4 className="text-lg md:text-2xl font-semibold text-gray-700">
											82
										</h4>
										<div className="text-gray-500">History</div>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<h3 className="mt-8 text-gray-700 text-xl md:text-3xl font-medium">
						Total available stock(Kg)
					</h3>
					<div className="mt-4">
						<div className="flex flex-wrap -mx-6">
							<div className="w-full px-6 sm:w-1/2 xl:w-1/3">
								<div className="flex items-center px-5 py-6 shadow-md rounded-md bg-white">
									<div className="p-3 rounded-full bg-green-800 bg-opacity-75">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 md:h-8 w-6 md:w-8 text-white bi bi-bar-chart-line"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
										</svg>
									</div>

									<div className="mx-5">
										<h4 className="text-lg md:text-2xl font-semibold text-gray-700">
											8,282 kg
										</h4>
										<div className="text-gray-500">Total product capacity</div>
									</div>
								</div>
							</div>
							<div className="w-full px-6 sm:w-1/2 xl:w-1/3">
								<div className="flex items-center px-5 py-6 mt-2 md:mt-0 shadow-sm rounded-md bg-white">
									<div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 md:h-8 w-6 md:w-8 text-white bi bi-shop-window"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
										</svg>
									</div>

									<div className="mx-5">
										<h4 className="text-lg md:text-2xl font-semibold text-gray-700">
											8,282kg
										</h4>
										<div className="text-gray-500">Total in Main Store</div>
									</div>
								</div>
							</div>

							<div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
								<div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
									<div className="p-3 rounded-full bg-orange-600 bg-opacity-75">
										<svg
											className="h-6 md:h-8 w-6 md:w-8 text-white"
											viewBox="0 0 28 28"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
												fill="currentColor"
											></path>
											<path
												d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z"
												fill="currentColor"
											></path>
											<path
												d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z"
												fill="currentColor"
											></path>
										</svg>
									</div>

									<div className="mx-5">
										<h4 className="text-lg md:text-2xl font-semibold text-gray-700">
											200,521kg
										</h4>
										<div className="text-gray-500">Total Stock in Market</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className=" mt-4 flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
						<BarChart />
					</div>
					<div id="history" className="flex flex-col mt-8">
						<h3 className="text-gray-700 text-xl my-2 font-medium">History</h3>
						<div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
							<div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
								<table className="min-w-full">
									<thead>
										<tr>
											<th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
												Product
											</th>
											<th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
												Discription
											</th>
											<th className="px-6 py-3 whitespace-no-wrap border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
												Qty (Kg)
											</th>
											<th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
												Price
											</th>
											<th className="px-6 py-3 whitespace-no-wrap border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
												Total Price
											</th>
										</tr>
									</thead>

									<tbody className="bg-white">
										<tr>
											<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900">
												Rice
											</td>

											<td className="px-6 py-4 truncate whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
												Jigawa local rice
											</td>

											<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
												<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
													60kg
												</span>
											</td>

											<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
												50
											</td>
											<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
												$4000
											</td>
										</tr>
										<tr>
											<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900">
												Tomato
											</td>

											<td className="px-6 py-4 truncate whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
												Kaduna red tomato
											</td>

											<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
												<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
													400kg
												</span>
											</td>

											<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
												400
											</td>
											<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
												$600000
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</main>
		</Container>
	);
};

export default Dashboard;
