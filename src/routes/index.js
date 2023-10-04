import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../layout/external";
import { Home } from "../pages";
import AdminDashboardLayout from "../layout/dashboard/Admin";
import TeacherDashboardLayout from "../layout/dashboard/Teacher";
import StudentDashboardLayout from "../layout/dashboard/Student";
import {
  TeacherDashboard,
  CreateResult,
  Create,
  Results,
  MyClass,
  TeacherLogin,
} from "../pages/teacher";

import {
  MyTeachers,
  Subjects,
  StudentDashboard,
  ResultsPage,
  StudentLogin,
} from "../pages/student";
import {
  StudentsList,
  CreateTeachers,
  AdminDashboard,
  TeachersList,
  AdminLogin,
  CreateTerm,
  ActiveApplications,
  CreateCalendar,
} from "../pages/admin";
import RoleBasedGuard from "../guards/RoleBasedGuard";
import AuthGuard from "../guards/AuthGuard";
import GuestGuard from "../guards/GuestGuard";
import Calendar from "../pages/teacher/calendar";
import Scheme from "../pages/teacher/scheme";
import Notify from "../pages/admin/notify";

export default function Routes() {
  return useRoutes([
    //GENERAL ROUTES
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> }],
      // children: [{ path: "/", element: <ProgressPage /> }],
    },

    {
      path: "/auth",
      element: <GuestGuard />,
      children: [
        { path: "student-login", element: <StudentLogin /> },
        { path: "admin/login", element: <AdminLogin /> },
        { path: "teacher-login", element: <TeacherLogin /> },
      ],
      // children: [{ path: "/auth", element: <ProgressPage /> }],
    },

    //PRIVATE ROUTES FOR TEACHERS
    {
      path: "/teacher",
      element: (
        <AuthGuard>
          <RoleBasedGuard accessibleRoles={["teacher"]}>
            <TeacherDashboardLayout />
          </RoleBasedGuard>
        </AuthGuard>
      ),
      children: [
        { path: "", element: <TeacherDashboard /> },
        { path: "students", element: <MyClass /> },
        { path: "results", element: <Results /> },
        { path: "create-student", element: <Create /> },
        { path: "create-result", element: <CreateResult /> },
        { path: "view-calendar", element: <Calendar /> },
        { path: "add-scheme", element: <Scheme /> },
      ],
      // children: [{ path: "/teacher", element: <ProgressPage /> }],
    },

    //PRIVATE ROUTES FOR STUDENTS
    {
      path: "/student",
      element: (
        <AuthGuard>
          <RoleBasedGuard accessibleRoles={["student"]}>
            <StudentDashboardLayout />
          </RoleBasedGuard>
        </AuthGuard>
      ),
      children: [
        { path: "/student", element: <StudentDashboard /> },
        { path: "/student/reports", element: <ResultsPage /> },
        { path: "/student/subjects", element: <Subjects /> },
        { path: "/student/teachers", element: <MyTeachers /> },

        // {path: "/teacher/my-class", element: <MyClass/>},
        // {path: "/teacher/results", element: <Results/>}
      ],
      // children: [{ path: "/student", element: <ProgressPage /> }],
    },

    //PRIVATE ROUTES FOR ADMIN
    {
      path: "/admin",
      element: (
        <AuthGuard>
          <RoleBasedGuard accessibleRoles={["admin"]}>
            <AdminDashboardLayout />
          </RoleBasedGuard>
        </AuthGuard>
      ),
      children: [
        { path: "/admin", element: <AdminDashboard /> },
        { path: "/admin/create", element: <CreateTeachers /> },
        { path: "/admin/teachers-list", element: <TeachersList /> },
        { path: "/admin/students-list", element: <StudentsList /> },
        { path: "/admin/create-term", element: <CreateTerm /> },
        { path: "/admin/applications", element: <ActiveApplications /> },
        { path: "/admin/create-calendar", element: <CreateCalendar /> },
        { path: "/admin/notify", element: <Notify /> },

      ],
    },

    //CATCH ALL
  ]);
}
