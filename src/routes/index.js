import React from "react";
import { useRoutes } from "react-router-dom";
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
// import ProgressPage from "../pages/progressPage";
import CreateResult from "../layout/dashboard/Teacher/createResult";
import ResultsPage from "../layout/dashboard/Student/resultsPage";
import AdminDashboard from "../layout/dashboard/Admin/adminDashboard";
import CreateTeachers from "../layout/dashboard/Admin/createTeachers";
import AdminDashboardLayout from "../layout/dashboard/Admin";
import TeachersList from "../layout/dashboard/Admin/teachersList";
import StudentsList from "../layout/dashboard/Admin/studentsList";
// import RequireAuth from "./requireAuth";

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
      children: [
        { path: "student-login", element: <Login /> },
        { path: "teacher-login", element: <Teacher /> },
      ],
      // children: [{ path: "/auth", element: <ProgressPage /> }],
    },

    //PRIVATE ROUTES FOR TEACHERS
    {
      path: "/teacher",
      element: (
        // <RequireAuth allowedRoles={["teacher"]}>
          <TeacherDashboardLayout/>
        // </RequireAuth>
      ),
      children: [
        { path: "", element: <TeacherDashboard /> },
        { path: "students", element: <MyClass /> },
        { path: "results", element: <Results /> },
        { path: "create-student", element: <Create /> },
        { path: "create-result", element: <CreateResult /> },
      ],
      // children: [{ path: "/teacher", element: <ProgressPage /> }],
    },

    //PRIVATE ROUTES FOR STUDENTS
    {
      path: "/student",
      element: (
        // <RequireAuth allowedRoles={["student"]}>
          <StudentDashboardLayout />
        // </RequireAuth>
      ),
      children: [
        { path: "/student", element: <StudentDashboard /> },
        { path: "/student/reports", element: <ResultsPage /> },
        // {path: "/teacher/my-class", element: <MyClass/>},
        // {path: "/teacher/results", element: <Results/>}
      ],
      // children: [{ path: "/student", element: <ProgressPage /> }],
    },

    //PRIVATE ROUTES FOR ADMIN
    {
      path: "/admin",
      element: (
        // <RequireAuth allowedRoles={["admin"]}>
          <AdminDashboardLayout  />
        // </RequireAuth>
      ),
      children: [
        { path: "/admin", element: <AdminDashboard /> },
        { path: "/admin/create", element: <CreateTeachers /> },
        { path: "/admin/teachers-list", element: <TeachersList /> },
        { path: "/admin/students-list", element: <StudentsList /> },

      ],
    },

    //CATCH ALL
  ]);
}
