import axios from 'axios'
export const  api = axios.create({
    baseURL: "https://firdausgate-api.cyclic.app/api/v1"
})