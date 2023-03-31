
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useApi } from "../Services/axios";


interface AuthContextData {
  isAuthenticated: boolean;
  signin: (email:string,password:string) => Promise<Boolean>;
  signout: () => void;
}

interface UserType{ 
  user:string;
  password:string
}

 export  const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// export const AuthProvider = ({ children } : any ) => {  


//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//  const api = useApi()


//   const login = async (email:string, password:string) => {
  
//     const data = await api.signin(email,password);
//     if(data){
//       setIsAuthenticated(true)
//       return true
//     }
//     return false
//   };

//   const logout =  () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);

//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }

//   return context;
// };

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

  const api = useApi();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  const signin = async (email: string, password: string) => {

  try{
      const data = await api.signin(email, password);

        if (data.status == 200 ) {
        setIsAuthenticated(true)
        return true;
    } else{
      console.log('caiu no false')
      return false;
      }

  }
      catch(error){
        console.log(error)
        return false
      }
    
  }

  const signout = async () => {
    setIsAuthenticated(false)
      console.log("signout está sendo executada.");
    
  }

  return (
      <AuthContext.Provider value={{ isAuthenticated, signin, signout }}>
          {children}
      </AuthContext.Provider>
  );
}