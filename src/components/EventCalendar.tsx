"use client"
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Image from "next/image";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


// Temperrory Data 
const events = [
  {
    id: 1,
    title: "Event-1",
    time: "8:00 AM to 9:00 PM",
    description: "Hackathon Registration",
  },
  {
    id: 2,
    title: "Event-2",
    time: "9:00 AM to 3:30 PM",
    description: "Project Evaluation",
  },
  {
    id: 3,
    title: "Event-3",
    time: "4:00 PM to 5:00 PM",
    description: "Winner Announcement",
  },
]

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
        <Calendar onChange={onChange} value={value} />
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold my-4">Events</h1>
          <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>

        {/* EVENTS PORTION */}
        <div className="flex flex-col gap-4">
          {events.map(event => (
            <div 
             className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-purple even:border-t-cyan"
             key={event.id}
            >
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-700">{event.title}</h1>
                <span className="text-gray-500 text-xs">{event.time}</span>
              </div>
              <p className="mt-2 text-gray-600 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default EventCalendar