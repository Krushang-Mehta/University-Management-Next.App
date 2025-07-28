# University Management System (UMS)

The **University Management System (UMS)** is a comprehensive full-stack web application designed to streamline academic and administrative processes within a university. It enables secure, role-based access for students, parents, teachers, and administrators, helping reduce paperwork and improve operational efficiency.

UMS integrates features such as real-time student bus tracking, attendance monitoring, event scheduling, and detailed academic record management.

---

## 🚀 Tech Stack

| Technology          | Description                               |
| ------------------- | ----------------------------------------- |
| **Next.js**         | React-based framework with SSR & routing  |
| **TypeScript**      | Strongly typed JavaScript for reliability |
| **Prisma ORM**      | Type-safe ORM for PostgreSQL              |
| **PostgreSQL**      | Robust relational database                |
| **Tailwind CSS**    | Utility-first styling framework           |
| **Recharts**        | Charting library for attendance/results   |
| **JWT/Auth**        | Role-based secure authentication          |
| **LeafLet Maps API** | For real-time student bus tracking        |

---

## 📅 Key Features

* Role-based login & access control (JWT secured)
* Student academic management: results, lectures, events, timetable
* Teacher dashboards for attendance, meetings, and scheduling
* Parent access to child records and live bus tracking
* Admin control panel with full access to all data
* Real-time attendance & analytics with Recharts
* Seamless UI/UX using Tailwind CSS

---

## 🧑‍🎓 User Roles and Capabilities

### 👨‍🏫 Student

| Feature       | Description                                          |
| ------------- | ---------------------------------------------------- |
| Lectures      | View assigned lectures and materials                 |
| Timetable     | Access to daily/weekly schedule                      |
| Attendance    | Track daily attendance with graphical representation |
| Results       | View and download exam and internal scores           |
| Events        | University events and announcements                  |
| Personal Info | Manage academic and profile data                     |

### 👨‍👩‍👦 Parent

| Feature            | Description                                    |
| ------------------ | ---------------------------------------------- |
| Student Overview   | Track child’s academic performance             |
| Attendance/Results | Monitor child’s presence and academic progress |
| Bus Tracking       | Real-time GPS tracking of student transport    |
| Personal Info      | Update and manage personal profile             |

### 👨‍🎓 Teacher

| Feature             | Description                                 |
| ------------------- | ------------------------------------------- |
| Student Access      | View student data & performance             |
| Lectures Management | Conduct and schedule lectures               |
| Attendance Manager  | Mark and manage student attendance          |
| Class & Division    | Assignments per class and division          |
| Meetings & Events   | Organize parent-teacher meetings and events |
| Personal Info       | Maintain and update teacher profile         |

### 🧑‍💼 Admin

| Feature             | Description                                    |
| ------------------- | ---------------------------------------------- |
| User Management     | Create/update/delete student, teacher, parent  |
| Role Management     | Assign and configure access rights             |
| Events Scheduler    | Schedule exams, meetings, and events           |
| Lecture Management  | Full control over timetable and class plans    |
| Full System Access  | Access all features and modules                |
| Analytics & Reports | Monitor academic stats, attendance, usage data |

---

## 📊 Data Visualization (via Recharts)

UMS uses **Recharts** to provide interactive graphs and charts for:

* Student attendance trends
* Academic performance statistics
* Admin dashboard analytics

---

## 🔐 Authentication & Security

* **JWT-based authentication** for all roles
* Role-based protected routes and APIs
* Secure data transmission and input validation
* Environment-based secrets and tokens

---

## 📍 Real-Time Integrations

* **Bus Tracking:** Real-time integration using Google Maps API for parent and admin tracking.
* **Attendance System:** Teachers can update attendance records in real time. Dashboards reflect live updates.

---

## 📁 Project Structure (Example)

```bash
/ums-app
  |-- /app
  |     |-- /auth
  |     |-- /api
  |     |-- /dashboard   
  |-- /components
  |-- /prisma
  |     |-- schema.prisma
  |-- /public
  |-- /styles
  |-- .env
  |-- next.config.js
```

---

## 🚧 Setup Instructions

1. **Clone Repository**

   ```bash
   git clone https://github.com/your-org/university-management-system.git
   cd university-management-system
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   ```bash
   cp .env.example .env
   # Add your DATABASE_URL, JWT_SECRET, etc.
   ```

4. **Initialize Database**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start Development Server**

   ```bash
   npm run dev
   ```

---

## 🛠️ Contributing

Contributions are welcome! Please open issues, submit PRs, and help enhance the platform.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🎓 Acknowledgements

* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Prisma ORM](https://www.prisma.io/)
* [Recharts](https://recharts.org/)
* [PostgreSQL](https://www.postgresql.org/)
* [Google Maps API](https://developers.google.com/maps)

---
