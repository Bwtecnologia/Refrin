
import Image from "../atoms/imagen";
import InputText from "../atoms/InputText";
import LoginFormArea from "../molecules/LoginformArea";



export default function LoginBox() {
    return ( 
    <div className="flex w-[100%] items-center pt-[1rem] flex-col   z-1 ">
     <Image source="/images/logo-refrin.png" style=" w-[250px] h-[100px] mt-[2rem]   max-2xl:mt-[1rem]" />
     <InputText text="Entre na sua conta" styleText="text-[30px] font-semibold text-gray-600 "  />
     <LoginFormArea />
    </div>
     );
}

