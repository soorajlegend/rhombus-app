'use client';

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const BarChart = ({data}) => {
	const [chartData, setChartData] = useState({
		datasets: [],
	});

	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData({
			labels: data?.map((each) => each.name),
			datasets: [
				{
					label: 'Products (Kg)',
					data: data?.map((each) => each.weight),
					borderColor: '#338f6b',
					backgroundColor: 'rgb(53, 205, 53, 0.4',
				},
			],
		});
		setChartOptions({
			plugins: {
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'Stocks',
				},
			},
			maintainAspectRatio: false,
			responsive: true,
		});
	}, []);

	return (
		<>
			<div className="w-full md:col-span-2 relative h-[50vh] m-auto p-4 border rounded-lg bg-white">
				<Bar data={chartData} options={chartOptions} />
			</div>
		</>
	);
};

export default BarChart;
