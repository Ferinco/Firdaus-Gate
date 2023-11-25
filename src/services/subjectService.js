import { api } from "../api/axios";
export const SubjectService = {
  getSubjects: async (userId) => {
    const { data } = await api.get(`/subject/get${userId}`);
    return data;
  },
  addSubjects: async (payload) => {
    const { data } = await api.post("/subject/add", payload, {
      userId: "",
      subjects: [
        {
          name: "",
          code: "",
          id: "",
        },
      ],
    });
    return data;
  },
  deleteSubjects: async (subject_code, userId)=>{
    const {data} = await api.delete(`/subject/remove/${subject_code}/${userId}`)
    return data
  },
};
