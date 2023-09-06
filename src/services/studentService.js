import { api } from "../api/axios";

export const StudentService = {
  getStudents: async () => {
    const { data } = await api.get("/users?role=student");
    return data;
  },
  getStudent: async (id) => {
    const { data } = await api.get(`/users/${id}?role=student`);
    return data;
  },

  updateStudent: async (id, studentData) => {
    const { data } = await api.patch(`/users/${id}`, { ...studentData });
    return data;
  },
  deleteStudents: async (studentId) => {
    const { data } = await api.delete(`/users/${studentId}`);
    return data;
  },
};
