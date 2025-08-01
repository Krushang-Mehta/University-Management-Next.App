"use client";
import React from "react";

const timeSlots = [
  { time: "07:30 to 08:25", sr: 1 },
  { time: "08:25 to 09:20", sr: 2 },
  { time: "09:20 to 09:50", sr: "", isRecess: true },
  { time: "09:50 to 10:45", sr: 3 },
  { time: "10:45 to 11:40", sr: 4 },
  { time: "11:40 to 11:50", sr: "", isRecess: true },
  { time: "11:50 to 12:45", sr: 5 },
  { time: "12:45 to 13:40", sr: 6 },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const schedule: Record<string, { text: string; span?: number; bgColor?: string }[]> = {
  Mon: [
    { text: "BY1: MCWN-B7\nBY2: BLC - B1\nBY3: MINI - B3", span: 2 },
    { text: "" },
    { text: "" },
    { text: "INS" },
    { text: "MCWN" },
    { text: "" },
    { text: "BY1: INS\nBY2: CD\nBY3: BLC", span: 2 },
    { text: "" },
  ],
  Tue: [
    { text: "" },
    { text: "MCWN" },
    { text: "" },
    { text: "CD" },
    { text: "INS" },
    { text: "" },
    { text: "" },
    { text: "" },
  ],
  Wed: [
    { text: "" },
    { text: "CD" },
    { text: "" },
    { text: "BLC" },
    { text: "INS" },
    { text: "" },
    { text: "BY1: BLC -B4\nBY2: INS -B8\nBY3: CD -B3", span: 2 },
    { text: "" },
  ],
  Thu: [
    { text: "BY1: CD -B3\nBY2: MINI -B4\nBY3: MCWN -B7", span: 2 },
    { text: "" },
    { text: "" },
    { text: "BY1: MINI -B3\nBY2: MCWN -B8\nBY3: INS-B7", span: 2 },
    { text: "" },
    { text: "" },
    { text: "CD" },
    { text: "MCWN" },
  ],
  Fri: Array(8).fill({ text: "" }),
  Sat: Array(8).fill({ text: "" }),
};

const ClassTimetable = () => {
  const rendered: Record<string, number[]> = {};

  return (
    <div className="px-4 py-6 md:px-8 max-w-7xl mx-auto">
      <div className="overflow-x-auto md:overflow-visible border rounded-lg shadow scrollbar-hide">
        <table className="w-full md:min-w-full text-sm text-gray-800">
          <thead className="bg-skylight text-gray-700 font-semibold">
            <tr>
              <th className="p-2 md:p-3 border">SR.NO</th>
              <th className="p-2 md:p-3 border">TIME</th>
              {days.map((day) => (
                <th key={day} className="p-2 md:p-3 border">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map(({ time, sr, isRecess }, rowIdx) => {
              if (isRecess) {
                return (
                  <tr key={`recess-${rowIdx}`} className="bg-skylight">
                    <td colSpan={8} className="text-center py-3 font-semibold text-gray-800 text-xs md:text-sm">
                      RECESS
                    </td>
                  </tr>
                );
              }

              return (
                <tr key={rowIdx}>
                  <td className="p-2 md:p-3 text-center font-medium border bg-yellowlight">{sr}</td>
                  <td className="p-2 md:p-3 text-center font-medium border bg-yellowlight">{time}</td>
                  {days.map((day) => {
                    const cellData = schedule[day][rowIdx];

                    if (rendered[day]?.includes(rowIdx)) {
                      return null;
                    }

                    const rowSpan = cellData?.span || 1;

                    if (rowSpan > 1) {
                      rendered[day] = [
                        ...(rendered[day] || []),
                        ...Array(rowSpan - 1)
                          .fill(0)
                          .map((_, i) => rowIdx + i + 1),
                      ];
                    }

                    return (
                      <td
                        key={day + rowIdx}
                        rowSpan={rowSpan}
                        className={`p-2 md:p-3 text-center align-middle h-20 min-w-[90px] border whitespace-pre-line ${
                          rowSpan === 2 ? "bg-purplelight" : "bg-yellowlight"
                        }`}
                      >
                        {cellData?.text}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Subject & Faculty</h3>
        <ul className="list-disc ml-5 text-sm space-y-1">
          <li><b>INS</b> - Information & Network Security (Tosal Bhalodia)</li>
          <li><b>CD</b> - Compiler Design (Rupal Shilu)</li>
          <li><b>BLC</b> - Block Chain (Bipasa Das)</li>
          <li><b>MCWN</b> - Mobile Computing & Wireless Network (Devangi Paneri)</li>
          <li><b>Mini</b> - Mini Project (Nirali Borad, Rupal Shilu)</li>
          <li><b>CAP</b> - Career Acceleration Program (Hiren Makwana)</li>
        </ul>
      </div>
    </div>
  );
};

export default ClassTimetable;
