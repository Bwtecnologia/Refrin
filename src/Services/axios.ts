import axios from "axios";
 
const api = axios.create({
baseURL:"http://localhost:3001"
})


export const useApi   = () => ({

validadeToken: async (token:String) =>{
},

signin:async (email:string,password:string) =>{
    const response  = await api.post('/auth/user',{email,password})
    return response
}


})