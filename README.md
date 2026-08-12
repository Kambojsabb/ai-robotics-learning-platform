# AI & Robotics Learning Platform

A production-ready foundation for a single-school AI & Robotics learning platform. It implements the requested three roles (ADMIN, TEACHER, STUDENT), roll-number student IDs, JWT authentication, content, tasks, MCQ tests/results, announcements, in-app notifications, dashboards, search/filtering and responsive futuristic UI.

## Stack
- React + Vite + React Router + Tailwind CSS
- Axios + Recharts + Lucide React + Framer Motion
- Node.js + Express + Mongoose + JWT + bcryptjs
- MongoDB

## Run locally
1. Install Node.js 20+ and MongoDB (local) or use MongoDB Atlas.
2. `npm install`
3. `npm run install:all`
4. Copy `server/.env.example` to `server/.env` and set `MONGO_URI` and `JWT_SECRET`.
5. Copy `client/.env.example` to `client/.env` if needed.
6. Seed demo data: `npm --prefix server run seed`
7. Start: `npm run dev`
8. Open the Vite URL shown in the terminal.

## Demo credentials
- Admin: `admin@airobo.local` / `Admin@123`
- Teacher: `teacher1@airobo.local` / `Teacher@123`
- Student: `8A121` / `Student@123`

These are demo-only credentials. Change them before any real deployment.

## Production
- Frontend: `npm --prefix client run build`
- Backend: `npm --prefix server start`
- Configure `CLIENT_URL`, `MONGO_URI`, `JWT_SECRET` and `REACT_APP_API_URL` for deployment.
- File uploads are represented by URLs in V1, so Cloudinary/S3/R2 can be added behind the storage abstraction later.
