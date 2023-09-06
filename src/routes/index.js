import React from "react";
import { Link, useRoutes } from "react-router-dom";
import Layout from "../layout/external";
import { Home } from "../pages";
import Login from "../pages/authentication/login";
import Teacher from "../pages/authentication/teacher";
import TeacherDashboardLayout from "../layout/dashboard/Teacher";
import TeacherDashboard from "../layout/dashboard/Teacher/teacherDashboard";
import MyClass from "../layout/dashboard/Teacher/class";
import Results from "../layout/dashboard/Teacher/results";
import StudentDashboardLayout from "../layout/dashboard/Student";
import StudentDashboard from "../layout/dashboard/Student/studentDashboard";
import Create from "../layout/dashboard/Teacher/create";
import ProgressPage from "../pages/progressPage";
import CreateResult from "../pages/teacher/createResult";
import ResultsPage from "../layout/dashboard/Student/resultsPage";
export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> }],
      // children: [{ path: "/", element: <ProgressPage /> }],
    },
    {
      path: "/auth",
      children: [
        { path: "student-login", element: <Login /> },
        { path: "teacher-login", element: <Teacher /> },
      ],
      // children: [{ path: "/auth", element: <ProgressPage /> }],
    },
    {
      path: "/teacher",
      element: <TeacherDashboardLayout />,
      children: [
        { path: "", element: <TeacherDashboard /> },
        { path: "students", element: <MyClass /> },
        { path: "results", element: <Results /> },
        { path: "create-student", element: <Create /> },
        { path: "create-result", element: <CreateResult /> },
      ],
      // children: [{ path: "/teacher", element: <ProgressPage /> }],
    },
    {
      path: "/student",
      element: <StudentDashboardLayout />,
      children: [
        { path: "/student", element: <StudentDashboard /> },
        { path: "/student/reports", element: <ResultsPage /> },
        // {path: "/teacher/my-class", element: <MyClass/>},
        // {path: "/teacher/results", element: <Results/>}
      ],
      // children: [{ path: "/student", element: <ProgressPage /> }],
    },
  ]);
}
