import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import UnauthorizedPage from "../../pages/unauthorized/unauthorizedPage";

function Private({children}:any) {

const auht  = useContext(AuthContext)

   if(auht.isAuthenticated === false ){
    return <UnauthorizedPage/>
   }



    return children ;
}

export default Private;