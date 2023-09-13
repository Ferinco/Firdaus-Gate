import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../layout/external";
import { Home } from "../pages";
import Login from "../pages/authentication/login";
import Teacher from "../pages/authentication/teacher";
import TeacherDashboardLayout from "../layout/dashboard/Teacher";
import {TeacherDashboard, CreateResult, Create, Results, MyClass} from "../layout/dashboard/Teacher";
import StudentDashboardLayout from "../layout/dashboard/Student";
import { MyTeachers, Subjects, StudentDashboard, ResultsPage} from "../layout/dashboard/Student";
import AdminDashboardLayout from "../layout/dashboard/Admin";
import { StudentsList, TeachersList, CreateTeachers, AdminDashboard} from "../layout/dashboard/Admin";


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
