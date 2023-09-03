const JOIN = (root, sublink) => {
  return `${root}/${sublink}`;
};
const ROOT_AUTH = "/auth";
const ROOT_STUDENT = "/student";
const ROOT_TEACHER = "/teacher";
export const PATH_AUTH = {
  login: JOIN(ROOT_AUTH, "student-login"),
  teacher: JOIN(ROOT_AUTH, "teacher-login"),
  // teacherDashboard : JOIN(ROOT_TEACHER, "teacher-dashboard")
};
// for  external pages
export const PATH_PAGE = {
  home: "/",
};

// for teacher dashboard pages
export const PATH_DASHBOARD = {
  teacher: {
    index: ROOT_TEACHER,
    myStudents: JOIN(ROOT_TEACHER, "students"),
    results: JOIN(ROOT_TEACHER, "results"),
    create: JOIN(ROOT_TEACHER, "create-student"),
    createResult: JOIN(ROOT_TEACHER, "create-result"),
  },
  student: {
    index: ROOT_STUDENT,
    mySubjects: JOIN(ROOT_TEACHER, "subjects"),
    myTeachers: JOIN(ROOT_TEACHER, "teachers"),
  },
};
