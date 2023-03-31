import LoginInput from "../atoms/LoginInput";
import InputText from "../atoms/InputText";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Swal from "sweetalert2";

export default function LoginFormArea() {
  const navigate = useNavigate();

  const auth = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleLogin = async (event: any) => {
    event.preventDefault();
    if (username && password) {
      const islogged = await auth.signin(username, password);
      if (islogged === true ) {
        navigate("/home");
      } 
      if(islogged === false ){
        Swal.fire({
          title: "<strong>Usuario ou senha incorretos</strong>",
          icon: "info",
          focusConfirm: true,
        });
      }
    } else {
      Swal.fire({
        title: "<strong>informa a senha e seu email</strong>",
        icon: "info",
        focusConfirm: true,
      });
    }
  };

  return (
    <>
      <form className=" w-[100%] p-[3rem] pt-[0] ">
        <InputText
          text="Username"
          styleText="text-[25px] font-semibold text-gray-600 max-xl:text-[20px]"
        />
        <LoginInput
        type="text"
          label="fulano/exemplo@gmail.com"
          onChange={handleUsernameChange}
        />
        <InputText
          text="Password"
          styleText="text-[25px] font-semibold text-gray-600 mt-[1rem] max-xl:text-[20px]  "
        />
        <LoginInput type="password" label="*******" onChange={handlePasswordChange} />
        <InputText
          text="esqueceu a senha ?"
          styleText="text-[15px] font-semibold text-gray-600 pt-[1rem] pb-[1rem]   text-end  max-xl:text-[10px]"
        />
        <button
          onClick={handleLogin}
          className="font-semibold text-[20px]    bg-blue-300 rounded-[10px] h-[60px] w-[100%] text-white  max-xl:h-[50px]"
        >
          entrar
        </button>
      </form>
    </>
  );
}
