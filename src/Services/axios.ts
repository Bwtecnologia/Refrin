import axios from "axios";
 
const api = axios.create({
baseURL:"http://ec2-52-90-115-36.compute-1.amazonaws.com:3001"
})


export const useApi   = () => ({

validadeToken: async (token:String) =>{
},

signin:async (email:string,password:string) =>{
    const response  = await api.post('/auth/user',{email,password})
    return response
}


})
