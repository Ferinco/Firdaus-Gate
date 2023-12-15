import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../layout/external";
import { Home, About, Gallery } from "../pages";
import AdminDashboardLayout from "../layout/dashboard/Admin";
import TeacherDashboardLayout from "../layout/dashboard/Teacher";
import StudentDashboardLayout from "../layout/dashboard/Student";
import Settings from "../pages/settings";
import { Receipt } from "../components/custom";
import AdmissionHome from "../pages/admission/home";
import ContinueAdmission from "../pages/admission/continue";
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
  Assignments
} from "../pages/student";
import {
  StudentsList,
  CreateTeachers,
  CreateStudents,
  AdminDashboard,
  TeachersList,
  AdminLogin,
  CreateTerm,
  ActiveApplications,
  CreateCalendar,
  AdminSettings,
  EditStudent,
  EditTeacher
} from "../pages/admin";

import { JSS1Admission, AdmissionForm } from "../pages/admission";
import RoleBasedGuard from "../guards/RoleBasedGuard";
import AuthGuard from "../guards/AuthGuard";
import GuestGuard from "../guards/GuestGuard";
import Calendar from "../pages/teacher/calendar";
import Scheme from "../pages/teacher/scheme";
import Notify from "../pages/admin/notify";
import {StudentInfo} from "../pages/admin/profileInfo"
import {TeacherInfo} from "../pages/admin/profileInfo"
import AdmissionLayout from "../pages/admission/layout";
export default function Routes() {
  return useRoutes([
    //GENERAL ROUTES
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> },
      { path: "/about-us", element: <About /> },
      { path: "/gallery", element: <Gallery /> },
    
    ],
    },
    {
      path: "/admission",
      element: 
      <AdmissionLayout/>,
      children: [
        { path: "index", element: <AdmissionHome /> },
        { path: "admission-into-jss1", element: <JSS1Admission /> },
        { path: "admission-form", element: <AdmissionForm /> },
        { path: "admission-form/payment-success", element: <Receipt /> },
        { path: "continue-admission", element: <ContinueAdmission /> },

      ],
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
        {path:"account-settings", element: <Settings/>},
        { path: "edit-student/:identity", element: <EditStudent/> },
        { path: "student-info/:identity", element: <StudentInfo/> },

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
        {path:"/student/account-settings", element: <Settings/>},
        {path:"/student/submit-assignments", element: <Assignments/>},

      ],
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
        { path: "/admin/create-teacher", element: <CreateTeachers /> },
        { path: "/admin/create-student", element: <CreateStudents /> },
        { path: "/admin/teachers-list", element: <TeachersList /> },
        { path: "/admin/students-list", element: <StudentsList /> },
        { path: "/admin/create-term", element: <CreateTerm /> },
        { path: "/admin/applications", element: <ActiveApplications /> },
        { path: "/admin/create-calendar", element: <CreateCalendar /> },
        { path: "/admin/notify", element: <Notify /> },
        { path: "/admin/account-settings", element: <AdminSettings /> },
        { path: "/admin/student-info/:identity", element: <StudentInfo/> },
        { path: "/admin/teacher-info/:identity", element: <TeacherInfo/> },
        { path: "/admin/edit-student/:identity", element: <EditStudent/> },
        { path: "/admin/edit-teacher/:identity", element: <EditTeacher/> },




      ],
    },

    //CATCH ALL
  ]);
}
