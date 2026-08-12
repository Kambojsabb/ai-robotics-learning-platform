import { useRoutes, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";

import Dashboard from "./pages/Dashboard";
import ContentPage from "./pages/ContentPage";
import TasksPage from "./pages/TasksPage";
import TestsPage from "./pages/TestsPage";
import ResultsPage from "./pages/ResultsPage";
import AnnouncementsPage from "./pages/AnnouncementsPage";
import NotificationsPage from "./pages/NotificationsPage";
import AdminUsersPage from "./pages/AdminUsersPage";
import ClassesPage from "./pages/ClassesPage";
import ProfilePage from "./pages/ProfilePage";

import Glow from "./components/Glow";

/* =========================================================
   AUTH GUARD
   ========================================================= */

function Guard({ children, roles }) {
  const { user, loading } = useAuth();

  // While authentication state is being loaded
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050816]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-cyan-400/20 border-t-cyan-400" />

          <p className="text-sm text-slate-500">
            Initializing AI Learning Platform...
          </p>
        </div>
      </div>
    );
  }

  // User is not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // User doesn't have permission
  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

/* =========================================================
   APPLICATION ROUTES
   ========================================================= */

function AppRoutes() {
  return useRoutes([
    /* =====================================================
       PUBLIC ROUTES
       ===================================================== */

    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/login",
      element: <Login />,
    },

    /* =====================================================
       MAIN ROLE DASHBOARDS
       ===================================================== */

    {
      path: "/admin",
      element: (
        <Guard roles={["ADMIN"]}>
          <Dashboard />
        </Guard>
      ),
    },

    {
      path: "/teacher",
      element: (
        <Guard roles={["TEACHER"]}>
          <Dashboard />
        </Guard>
      ),
    },

    {
      path: "/student",
      element: (
        <Guard roles={["STUDENT"]}>
          <Dashboard />
        </Guard>
      ),
    },

    /* =====================================================
       ADMIN
       ===================================================== */

    {
      path: "/admin/students",
      element: (
        <Guard roles={["ADMIN"]}>
          <AdminUsersPage role="STUDENT" />
        </Guard>
      ),
    },

    {
      path: "/admin/teachers",
      element: (
        <Guard roles={["ADMIN"]}>
          <AdminUsersPage role="TEACHER" />
        </Guard>
      ),
    },

    {
      path: "/admin/classes",
      element: (
        <Guard roles={["ADMIN"]}>
          <ClassesPage />
        </Guard>
      ),
    },

    {
      path: "/admin/content",
      element: (
        <Guard roles={["ADMIN", "TEACHER", "STUDENT"]}>
          <ContentPage />
        </Guard>
      ),
    },

    {
      path: "/admin/videos",
      element: (
        <Guard roles={["ADMIN"]}>
          <ContentPage
            typeFilter="VIDEO"
            title="Video Library"
          />
        </Guard>
      ),
    },

    {
      path: "/admin/resources",
      element: (
        <Guard roles={["ADMIN"]}>
          <ContentPage title="Learning Resources" />
        </Guard>
      ),
    },

    {
      path: "/admin/syllabus",
      element: (
        <Guard roles={["ADMIN"]}>
          <ContentPage
            typeFilter="SYLLABUS"
            title="Syllabus"
          />
        </Guard>
      ),
    },

    {
      path: "/admin/tasks",
      element: (
        <Guard roles={["ADMIN"]}>
          <TasksPage />
        </Guard>
      ),
    },

    {
      path: "/admin/tests",
      element: (
        <Guard roles={["ADMIN"]}>
          <TestsPage />
        </Guard>
      ),
    },

    {
      path: "/admin/results",
      element: (
        <Guard roles={["ADMIN"]}>
          <ResultsPage />
        </Guard>
      ),
    },

    {
      path: "/admin/announcements",
      element: (
        <Guard roles={["ADMIN"]}>
          <AnnouncementsPage />
        </Guard>
      ),
    },

    {
      path: "/admin/notifications",
      element: (
        <Guard roles={["ADMIN"]}>
          <NotificationsPage />
        </Guard>
      ),
    },

    /* =====================================================
       TEACHER
       ===================================================== */

    {
      path: "/teacher/videos",
      element: (
        <Guard roles={["TEACHER"]}>
          <ContentPage
            typeFilter="VIDEO"
            title="Video Library"
          />
        </Guard>
      ),
    },

    {
      path: "/teacher/resources",
      element: (
        <Guard roles={["TEACHER"]}>
          <ContentPage title="Learning Resources" />
        </Guard>
      ),
    },

    {
      path: "/teacher/syllabus",
      element: (
        <Guard roles={["TEACHER"]}>
          <ContentPage
            typeFilter="SYLLABUS"
            title="Syllabus"
          />
        </Guard>
      ),
    },

    {
      path: "/teacher/tasks",
      element: (
        <Guard roles={["TEACHER"]}>
          <TasksPage />
        </Guard>
      ),
    },

    {
      path: "/teacher/tests",
      element: (
        <Guard roles={["TEACHER"]}>
          <TestsPage />
        </Guard>
      ),
    },

    {
      path: "/teacher/results",
      element: (
        <Guard roles={["TEACHER"]}>
          <ResultsPage />
        </Guard>
      ),
    },

    {
      path: "/teacher/announcements",
      element: (
        <Guard roles={["TEACHER"]}>
          <AnnouncementsPage />
        </Guard>
      ),
    },

    {
      path: "/teacher/notifications",
      element: (
        <Guard roles={["TEACHER"]}>
          <NotificationsPage />
        </Guard>
      ),
    },

    /* =====================================================
       STUDENT
       ===================================================== */

    {
      path: "/student/videos",
      element: (
        <Guard roles={["STUDENT"]}>
          <ContentPage
            typeFilter="VIDEO"
            title="Videos"
          />
        </Guard>
      ),
    },

    {
      path: "/student/resources",
      element: (
        <Guard roles={["STUDENT"]}>
          <ContentPage title="Learning Materials" />
        </Guard>
      ),
    },

    {
      path: "/student/syllabus",
      element: (
        <Guard roles={["STUDENT"]}>
          <ContentPage
            typeFilter="SYLLABUS"
            title="Syllabus"
          />
        </Guard>
      ),
    },

    {
      path: "/student/tasks",
      element: (
        <Guard roles={["STUDENT"]}>
          <TasksPage />
        </Guard>
      ),
    },

    {
      path: "/student/tests",
      element: (
        <Guard roles={["STUDENT"]}>
          <TestsPage />
        </Guard>
      ),
    },

    {
      path: "/student/results",
      element: (
        <Guard roles={["STUDENT"]}>
          <ResultsPage />
        </Guard>
      ),
    },

    {
      path: "/student/announcements",
      element: (
        <Guard roles={["STUDENT"]}>
          <AnnouncementsPage />
        </Guard>
      ),
    },

    {
      path: "/student/notifications",
      element: (
        <Guard roles={["STUDENT"]}>
          <NotificationsPage />
        </Guard>
      ),
    },

    {
      path: "/student/profile",
      element: (
        <Guard roles={["STUDENT"]}>
          <ProfilePage />
        </Guard>
      ),
    },

    /* =====================================================
       FALLBACK
       ===================================================== */

    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);
}

/* =========================================================
   APP
   ========================================================= */

export default function App() {
  return (
    <AuthProvider>
      <Glow />
      <AppRoutes />
    </AuthProvider>
  );
}