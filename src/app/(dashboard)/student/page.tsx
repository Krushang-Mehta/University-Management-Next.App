import Announcements from "@/components/Announcements"
import EventCalendar from "@/components/EventCalendar"
import TimeTable from "@/components/TimeTable"

const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">

      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Time-Table (7-BY)</h1>
          {/* <BigCalendar /> */}
          <TimeTable />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>

    </div>
  )
}

export default StudentPage
