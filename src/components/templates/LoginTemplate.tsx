
import LoginBox from "../organisms/loginBox";

interface Props  {
fc:()=>void

}

function LoginTemplate() {


    return ( 
    <>
    <div className="h-[95vh] flex justify-center  pt-[5rem]  bg-no-repeat bg-center  bg-cover  z-0  bg-opacity-60  "   style={{backgroundImage: "url('/images/10.png')"}} >
    <section className="h-[65%] min-w-[600px] border-2 flex flex-row items-center  rounded-[50px] z-1  bg-white opacity-[100%]  ">
    <LoginBox />
    </section>
    </div> 
    <footer className="bg-blue-300 h-[50px] text-white flex justify-center items-center "> <p> @all rights reserved</p></footer>
    </>
    );
}

export default LoginTemplate;