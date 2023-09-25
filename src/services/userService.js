import { api } from "../api/axios";

// Everything here requires authorization
export const UserService = {
  getStudents: async (teacherId) => {
    const { data } = await api.get(
      `/users?role=student${teacherId && `&teacherId=${teacherId}`}`
    );
    return data;
  },
  getTeachers: async () => {
    const { data } = await api.get("/users?role=teacher");
    return data;
  },
  getUser: async (userId) => {
    const { data } = await api.get(`/users/single/${userId}`);
    return data;
  },
  //   User role must be 'teacher'
  updateUser: async (userId, payload) => {
    const { data } = await api.patch(`/users/edit/${userId}`, payload);
    return data;
  },

  //   User role must be 'teacher'
  deleteUser: async (userId) => {
    const { data } = await api.delete(`/users/delete/${userId}`);
    return data;
  },
  // User role must be 'teacher'
  createUser: async (payload) => {
    const { data } = await api.post("/users/create", payload);
    return data;
  },
  getStudentNames : async(role, teacherId)=> {
    const {data} = await api.post(`/users?role=${role}&teacherId=${teacherId}`)
    return data
  }
};
