import { api } from "../api/axios";

// Everything here requires authentication
export const UserService = {
  getUsers: async () => {
    const { data } = await api.get("/users");
    return data;
  },
  getUser: async (userId) => {
    const { data } = await api.get(`/users/${userId}`);
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
};