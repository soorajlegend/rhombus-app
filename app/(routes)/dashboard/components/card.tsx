import Link from 'next/link';
import React from 'react';

interface CardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	href?: string;
	color: string;
	bgOnHover: string;
	notLink?: boolean;
}

const Card: React.FC<CardProps> = ({
	icon,
	title,
	description,
	href,
	color,
	bgOnHover,
	notLink,
}) => {
	return (
		<div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
			{notLink ? (
				<div
					className={`w-full flex items-center px-5 py-6 shadow-sm rounded-md bg-white text-gray-500 ${bgOnHover}`}
				>
					<div className={`p-3 rounded-full  bg-opacity-75 ${color}`}>
						{icon}
					</div>

					<div className="mx-5">
						<h4 className="text-lg md:text-2xl font-semibold text-gray-700">
							{title}
						</h4>
						<div className="text-gray-500">{description}</div>
					</div>
				</div>
			) : (
				<Link
					href={href || '#'}
					className={`w-full flex items-center px-5 py-6 shadow-sm rounded-md bg-white text-gray-500 ${bgOnHover}`}
				>
					<div className={`p-3 rounded-full  bg-opacity-75 ${color}`}>
						{icon}
					</div>

					<div className="mx-5">
						<h4 className="text-lg md:text-2xl font-semibold text-gray-700">
							{title}
						</h4>
						<div className="text-gray-500">{description}</div>
					</div>
				</Link>
			)}
		</div>
	);
};

export default Card;
