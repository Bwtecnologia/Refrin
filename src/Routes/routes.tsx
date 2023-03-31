import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

import LoginPage from "../pages/Login";
import UnauthorizedPage from "../pages/unauthorized/unauthorizedPage";
import Private from "../components/PrivateRoute";


function RouterController() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/home" element={ <Private> <Home /> </Private> } ></Route> 
        <Route path="/unauthorized" element={ <UnauthorizedPage /> }></Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default RouterController;