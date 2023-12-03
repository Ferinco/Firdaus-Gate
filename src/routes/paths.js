const JOIN = (root, sublink) => {
  return `${root}/${sublink}`;
};
const ROOT_AUTH = "/auth";
const ROOT_STUDENT = "/student";
const ROOT_TEACHER = "/teacher";
const ROOT_ADMIN = "/admin";

export const PATH_AUTH = {
  login: JOIN(ROOT_AUTH, "student-login"),
  teacher: JOIN(ROOT_AUTH, "teacher-login"),
  // teacherDashboard : JOIN(ROOT_TEACHER, "teacher-dashboard")
};
// for  external pages
export const PATH_PAGE = {
  home: "/",
  about: "/about-us",
  jss1Admission: "/admission/admission-into-jss1",
  admissionForm: "/admission/admission-form",
};

// for teacher dashboard pages
export const PATH_DASHBOARD = {
  teacher: {
    index: ROOT_TEACHER,
    myStudents: JOIN(ROOT_TEACHER, "students"),
    results: JOIN(ROOT_TEACHER, "results"),
    create: JOIN(ROOT_TEACHER, "create-student"),
    createResult: JOIN(ROOT_TEACHER, "create-result"),
    viewCalendar: JOIN(ROOT_TEACHER, "view-calendar"),
    addScheme: JOIN(ROOT_TEACHER, "add-scheme"),
    accountSettings: JOIN(ROOT_TEACHER, "account-settings")
  },
  student: {
    index: ROOT_STUDENT,
    mySubjects: JOIN(ROOT_STUDENT, "subjects"),
    myTeachers: JOIN(ROOT_STUDENT, "teachers"),
    results: JOIN(ROOT_STUDENT, "reports"),
    subjects: JOIN(ROOT_STUDENT, "subjects"),
    teachers: JOIN(ROOT_STUDENT, "teachers"),
    accountSettings: JOIN(ROOT_STUDENT, "account-settings")

  },
  admin: {
    index: ROOT_ADMIN,
    createTeachers: JOIN(ROOT_ADMIN, "create"),
    teachersList: JOIN(ROOT_ADMIN, "teachers-list"),
    studentsList: JOIN(ROOT_ADMIN, "students-list"),
    createTerm: JOIN(ROOT_ADMIN, "create-term"),
    applications: JOIN(ROOT_ADMIN, "applications"),
    calendar: JOIN(ROOT_ADMIN, "create-calendar"),
    notify: JOIN(ROOT_ADMIN, "notify"),
    accountSettings: JOIN(ROOT_ADMIN, "account-settings"),
    studentInfo: JOIN(ROOT_ADMIN, "student-info"),
    teacherInfo: JOIN(ROOT_ADMIN, "teacher-info"),
    editStudent: JOIN(ROOT_ADMIN, "edit-student"),
    editTeacher: JOIN(ROOT_ADMIN, "edit-teacher"),




  },
};
