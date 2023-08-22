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
export default function Routes() {
  return useRoutes([ 
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> }],
    },
    {
      path: "/auth",
      children: [
        {path: "/auth/student-login", element: <Login/>},
        {path: "/auth/teacher-login", element:<Teacher/>}
      ]
    },
    {
      path: "/teacher",
      element: <TeacherDashboardLayout/>,
      children: [
        {path: "/teacher", element: <TeacherDashboard/>},
        {path: "/teacher/students", element: <MyClass/>},
        {path: "/teacher/results", element: <Results/>},
        {path: "/teacher/create-student", element: <Create/>}

      
      ]
    },
    {
      path: "/student",
      element: <StudentDashboardLayout/>,
      children: [
        {path: "/student", element: <StudentDashboard/>},
        // {path: "/teacher/my-class", element: <MyClass/>},
        // {path: "/teacher/results", element: <Results/>}
      
      ]
    }
  
  ]);
}
