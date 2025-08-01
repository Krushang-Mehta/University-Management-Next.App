"use client"
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
   {
    name: "Total",
    count: 150,
    fill: "white",
  },
  {
    name: "",
    count: 67,
    fill: "#feafc7",
  },
  {
    name: "",
    count: 83 ,
    fill: "#53eafd",
  },
];

const CountChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">

            {/* TITLE */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Students</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>

            {/* CHART */}
            <div className="relative w-full h-[75%] ">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={25} data={data}>
                        <RadialBar                            
                            background            
                            dataKey="count"
                        />   
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src="/male-female.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
            </div>

            {/* BOTTOM */}
            <div className="flex justify-center gap-16">

                {/* BOYS DETAILS */}
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-cyan rounded-full" />
                        <h1 className="font-bold">1234</h1>
                        <h2 className="text-xs text-gray-300">Boys (55%)</h2>
                </div>
                

                {/* GIRLS DETAILS */}
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-candy rounded-full" />
                        <h1 className="font-bold">1234</h1>
                        <h2 className="text-xs text-gray-300">Girls (45%)</h2>
                </div>               
            </div>
        </div>
    )
}

export default CountChart