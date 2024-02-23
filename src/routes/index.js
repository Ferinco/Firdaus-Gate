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
import AboutMe from "../layout/dashboard/AboutMe";
import JuniorFirst from "../utils/results/Junior/juniorFirst";
import {
  TeacherDashboard,
  CreateResult,
  Create,
  Results,
  MyClass,
  TeacherLogin,
  Assign,
  GiveAssignments,
  AssignmentSettings,
  History,
} from "../pages/teacher";

import {
  MyTeachers,
  Subjects,
  StudentDashboard,
  ResultsPage,
  StudentLogin,
  Assignments,
  Scheme,
  ViewResult,
  FilterResults,
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
  EditTeacher,
  UploadNews,
  NewsPage,
} from "../pages/admin";

import { JSS1Admission, AdmissionForm } from "../pages/admission";
import RoleBasedGuard from "../guards/RoleBasedGuard";
import AuthGuard from "../guards/AuthGuard";
import GuestGuard from "../guards/GuestGuard";
import Calendar from "../pages/teacher/calendar";
import Notify from "../pages/admin/notify";
import { StudentInfo } from "../pages/admin/profileInfo";
import { TeacherInfo } from "../pages/admin/profileInfo";
import AdmissionLayout from "../pages/admission/layout";
import Reports from "../pages/admin/reportsPage";
import News from "../components/landing/newsSection";
import SeniorFirst from "../utils/results/Senior/seniorFirst";
import BasicFirst from "../utils/results/Basic/basicFirst";
import NurseryFirst from "../utils/results/Nursery/nurseryFirst";
import { KgResult } from "../utils/results/KG/kgResult";
import JuniorSecond from "../utils/results/Junior/juniorSecond";
import JuniorThird from "../utils/results/Junior/juniorThird";
import SeniorSecond from "../utils/results/Senior/seniorSecond";
import SeniorThird from "../utils/results/Senior/seniorThird";
import CheckResults from "../pages/teacher/checkResults";
import SchoolFeesLayout from "../pages/fees/layout";
import ReturningStudents from "../pages/fees/returning";
import NewStudents from "../pages/fees/newStudents";
export default function Routes() {
  return useRoutes([
    //GENERAL ROUTES
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about-us", element: <About /> },
        { path: "/gallery", element: <Gallery /> },
      ],
    },
    {
      path: "/school-fees",
      element: <SchoolFeesLayout />,
      children: [
        { path: "returning-students", element: <ReturningStudents /> },
        { path: "new-students", element: <NewStudents /> },
      ],
    },
    {
      path: "/admission",
      element: <AdmissionLayout />,
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
        { path: "account-settings", element: <Settings /> },
        { path: "assign", element: <Assign /> },
        { path: "edit-student/:identity", element: <EditStudent /> },
        { path: "student-info/:identity", element: <StudentInfo /> },
        { path: "new-assignment", element: <GiveAssignments /> },
        { path: "set-assignment/:identity", element: <AssignmentSettings /> },
        { path: "about-me", element: <AboutMe /> },
        { path: "results/uploaded-results", element: <History /> },
        { path: "view-results/:identity", element: <CheckResults /> },
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
        { path: "/student/account-settings", element: <Settings /> },
        { path: "/student/submit-assignments", element: <Assignments /> },
        { path: "work-scheme/:identity", element: <Scheme /> },
        { path: "about-me", element: <AboutMe /> },
        { path: "view-result", element: <ViewResult /> },
        { path: "filter-results", element: <FilterResults /> },
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
        { path: "/admin/student-info/:identity", element: <StudentInfo /> },
        { path: "/admin/teacher-info/:identity", element: <TeacherInfo /> },
        { path: "/admin/edit-student/:identity", element: <EditStudent /> },
        { path: "/admin/edit-teacher/:identity", element: <EditTeacher /> },
        { path: "/admin/results", element: <Reports /> },
        { path: "/admin/news", element: <NewsPage /> },
        { path: "/admin/post-news", element: <UploadNews /> },
      ],
    },

    //CATCH ALL
  ]);
}
