"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

interface OverviewProps {
    data: any[],
}

export const Overview: React.FC<OverviewProps> = ({ data }) => {

    return (
        <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data} >
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value} kg`}
                />
                <Bar dataKey="weight" fill="#338f6b" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    )
}