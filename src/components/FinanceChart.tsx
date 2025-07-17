"use client"
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        income: 136000,
        expense: 78000,
    },
    {
        name: 'Fab',
        income: 230000,
        expense: 139000,
    },
    {
        name: 'Mar',
        income: 170000,
        expense: 198000,
    },
    {
        name: 'Apr',
        income: 260000,
        expense: 240000,
    },
    {
        name: 'May',
        income: 189000,
        expense: 148000,
    },
    {
        name: 'June',
        income: 150000,
        expense: 220000,
    },
    {
        name: 'July',
        income: 234000,
        expense: 143000,
    },
    {
        name: 'Aug',
        income: 84000,
        expense: 153000,
    },
    {
        name: 'Sep',
        income: 134000,
        expense: 144000,
    },
    {
        name: 'Oct',
        income: 155000,
        expense: 143000,
    },
    {
        name: 'Nov',
        income: 115000,
        expense: 165000,
    },
    {
        name: 'Dec',
        income: 230000,
        expense: 140000,
    },
];

const FinanceChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">

            {/* TITLE */}
            <div className="flex justify-between items-center  ">
                <h1 className="text-lg font-semibold">Finance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>

            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                    <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={10}/>
                    <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={10} />
                    <Tooltip />
                    <Legend
                        align="center"
                        verticalAlign="top"
                        wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
                    />
                    <Line type="monotone" dataKey="income" stroke="#ad46ff" strokeWidth={3} />
                    <Line type="monotone" dataKey="expense" stroke="#ff637e" strokeWidth={3}  />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}

export default FinanceChart